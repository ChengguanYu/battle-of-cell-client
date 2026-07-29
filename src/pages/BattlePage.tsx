import { useRef, useState, useEffect, useCallback, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { BattleWorld } from "../entities/BattleWorld"
import { useHero } from "../hooks/useHero"
import { useCamera } from "../hooks/useCamera"
import { GameWorld } from "../components/GameWorld"
import { HeroView } from "../components/hero"
import { BattleHUD } from "../components/BattleHUD"
import { AimLine } from "../components/AimLine"
import { PolygonLayer } from "../components/PolygonLayer"
import { DebugPanel } from "../components/DebugPanel"
import { fromFixed, toFixed, fixedMul } from "../lib/fixed"
import { gameSession } from "../state/gameSession"
import { resetBattleFrameCursor, sendLaunchFrame } from "../services/battleFrame"
import { battleTick } from "../services/battleTick"
import { leaveRoom } from "../services/leaveRoom"
import { CONFIG } from "../network/config"
import { ObstacleField } from "../entities/ObstacleField"
import { debugWorldSize, debugWorldShapes } from "../config/debugWorld"

const OUT_OF_BOUNDS = "#050805"

export function BattlePage() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const [world] = useState(() => {
    const session = gameSession.getState()
    const worldSize = session.worldSize ?? debugWorldSize
    const shapes = session.worldShapes ?? debugWorldShapes
    const worldShapes = shapes.map((s) => s.vertices)
    return new BattleWorld(worldSize.width, worldSize.height, worldShapes)
  })
  const heroRef = useRef(world.hero)
  const { cameraX, cameraY, zoom, containerRef } = useCamera(heroRef, world.width, world.height)
  const [debugVisible, setDebugVisible] = useState(false)
  const obstacles = world.shapes
  const obstacleField = useMemo(() => new ObstacleField(obstacles), [obstacles])
  const [sessionOk, setSessionOk] = useState(false)
  const sessionOkRef = useRef(false)

  // 玩家操作后立刻发送真实 LAUNCH：内容取当前发射状态，帧号取当前 tick
  const handleLaunch = useCallback(
    (info: { dirX: number; dirY: number; speed: number }) => {
      if (!sessionOkRef.current) {
        console.warn("[Battle] skip send LAUNCH: session not ready")
        return
      }

      const ok = sendLaunchFrame({
        dirX: info.dirX,
        dirY: info.dirY,
        speed: info.speed,
        // 不传 frameNumber：battleFrame 内部使用 battleTick.frameNumber
      })
      console.log(
        "[Battle] launch send LAUNCH result=",
        ok,
        "tick=",
        battleTick.frameNumber,
        "dir=",
        info.dirX,
        info.dirY,
        "speed=",
        info.speed,
      )
    },
    [],
  )

  const { state, isAiming, aimOffset, hero, speedCoefficient, setSpeedCoefficient } = useHero(
    heroRef,
    containerRef,
    { x: cameraX, y: cameraY, zoom },
    { onLaunch: handleLaunch, onStep: () => obstacleField.resolve(heroRef.current) },
  )

  /**
   * Battle 内部初始化：校验全局会话态、对齐帧游标，并启动 tick。
   * 有有效态 → true；无 → toast 错误并返回 false。
   */
  const initBattle = useCallback((routeRoomId?: string): boolean => {
    const session = gameSession.getState()

    // 调试模式：无真实会话也能进战斗页，方便本地看场景/HUD/操作
    if (CONFIG.DEBUG_MODE && !gameSession.isBattleReady()) {
      const debugRoomId = Number(routeRoomId) || session.roomId || 0
      const debugFirstFrame = session.firstFrameNumber ?? 0
      console.info(
        "[Battle] DEBUG_MODE bypass session check roomId=",
        debugRoomId,
        "firstFrame=",
        debugFirstFrame,
      )
      resetBattleFrameCursor(debugFirstFrame)
      const origin = battleTick.start(debugFirstFrame)
      console.log(
        "[Battle] debug init ready roomId=",
        debugRoomId,
        "firstFrame=",
        debugFirstFrame,
        "tickOrigin=",
        origin,
      )
      return true
    }

    if (!gameSession.isBattleReady()) {
      console.error("[Battle] missing game session", session)
      toast.error("战斗会话无效，请从大厅重新匹配")
      // 刷新/深链进入时内存会话已丢失，强制回大厅
      navigate("/home", { replace: true })
      return false
    }

    const sessionRoomId = session.roomId as number
    const firstFrameNumber = session.firstFrameNumber as number

    if (routeRoomId != null && String(sessionRoomId) !== String(routeRoomId)) {
      console.warn(
        "[Battle] route roomId mismatch",
        routeRoomId,
        "session.roomId=",
        sessionRoomId,
      )
    }

    resetBattleFrameCursor(firstFrameNumber)

    // 初始化完成后：以当前缓冲最新服务端帧为起点启动逻辑 tick
    const origin = battleTick.start()

    console.log(
      "[Battle] init ready roomId=",
      sessionRoomId,
      "firstFrame=",
      firstFrameNumber,
      "tickOrigin=",
      origin,
    )
    return true
  }, [navigate])

  useEffect(() => {
    // 每次挂载都初始化；StrictMode 会先 cleanup 再二次挂载，
    // 不能用“只 init 一次”的 ref，否则 sessionOk 会被 cleanup 清掉后无法恢复。
    const ok = initBattle(roomId)
    if (ok) world.create()
    setSessionOk(ok)
    sessionOkRef.current = ok

    return () => {
      world.destroy()
      battleTick.stop()
      sessionOkRef.current = false
      setSessionOk(false)
    }
  }, [roomId, initBattle, world])

  // Render layer uses real pixels; hero business state is fixed-point.
  const heroX = fromFixed(state.x)
  const heroY = fromFixed(state.y)
  const heroRadius = fromFixed(hero.radius)
  const maxLaunchSpeed = fromFixed(hero.maxLaunchSpeed)

  // F3 toggle debug panel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "F3") {
        e.preventDefault()
        setDebugVisible((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const [leaving, setLeaving] = useState(false)

  /** 测试：模拟蓄满力向右释放，走正常操作流程 */
  const handleSimulateFullRight = useCallback(() => {
    const hero = heroRef.current
    const coeffFixed = toFixed(speedCoefficient)
    const initialSpeed = fixedMul(hero.maxLaunchSpeed, coeffFixed)
    const dirX = toFixed(1)
    const dirY = toFixed(0)

    // 1) 客户端本地执行
    hero.launch(dirX, dirY, initialSpeed)

    // 2) 按正常入帧逻辑发送（内部用 battleTick.frameNumber 算帧号）
    sendLaunchFrame({ dirX, dirY, speed: initialSpeed })

    console.log(
      "[Simulate] full-right launch dirX=1 dirY=0 speed=",
      initialSpeed,
      "tick=",
      battleTick.frameNumber,
    )
  }, [speedCoefficient])

  const handleBack = useCallback(async () => {
    if (leaving) return
    setLeaving(true)
    try {
      await leaveRoom()
      battleTick.stop()
      gameSession.enterLobby()
      toast.success("已退出房间")
      navigate("/home")
    } catch (err) {
      console.error("[Battle] leave room failed:", err)
      toast.error(err instanceof Error ? err.message : "退出房间失败")
      setLeaving(false)
    }
  }, [leaving, navigate])

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden select-none"
      style={{ background: OUT_OF_BOUNDS }}
    >
      {sessionOk && world.isCreated && (
        <GameWorld
          width={world.width}
          height={world.height}
          cameraX={cameraX}
          cameraY={cameraY}
          zoom={zoom}
        >
          <PolygonLayer
            shapes={obstacles}
            width={world.width}
            height={world.height}
          />
          <HeroView x={heroX} y={heroY} radius={heroRadius} />
          <AimLine
            fromX={heroX}
            fromY={heroY}
            toX={heroX + aimOffset.x}
            toY={heroY + aimOffset.y}
            visible={isAiming}
            maxRange={maxLaunchSpeed}
          />
        </GameWorld>
      )}

      <BattleHUD
        roomId={roomId}
        playerX={heroX}
        playerY={heroY}
        zoom={zoom}
        onBack={handleBack}
        onSimulateFullRight={handleSimulateFullRight}
      />

      <DebugPanel
        hero={hero}
        speedCoefficient={speedCoefficient}
        onSpeedCoefficientChange={setSpeedCoefficient}
        visible={debugVisible}
        onClose={() => setDebugVisible(false)}
      />
    </div>
  )
}
