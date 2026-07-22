import { useRef, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { Hero } from "../entities/Hero"
import { useHero } from "../hooks/useHero"
import { useCamera } from "../hooks/useCamera"
import { GameWorld } from "../components/GameWorld"
import { HeroView } from "../components/hero"
import { BattleHUD } from "../components/BattleHUD"
import { AimLine } from "../components/AimLine"
import { DebugPanel } from "../components/DebugPanel"
import { fromFixed } from "../lib/fixed"
import { gameSession } from "../state/gameSession"
import { resetBattleFrameCursor } from "../services/battleFrame"
import { battleTick } from "../services/battleTick"

const WORLD_SIZE = 10000
const OUT_OF_BOUNDS = "#050805"

export function BattlePage() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const heroRef = useRef(new Hero(WORLD_SIZE, { radius: 20 }))
  const { cameraX, cameraY, zoom, containerRef } = useCamera(heroRef)
  const { state, isAiming, aimOffset, hero, speedCoefficient, setSpeedCoefficient } = useHero(
    heroRef,
    containerRef,
    { x: cameraX, y: cameraY, zoom },
  )
  const [debugVisible, setDebugVisible] = useState(false)
  const [sessionOk, setSessionOk] = useState(false)
  // 避免 StrictMode 双调用重复初始化
  const initedRef = useRef(false)

  /**
   * Battle 内部初始化：校验全局会话态、对齐帧游标，并启动 tick。
   * 有有效态 → true；无 → toast 错误并返回 false。
   */
  const initBattle = (routeRoomId?: string): boolean => {
    const session = gameSession.getState()

    if (!gameSession.isBattleReady()) {
      console.error("[Battle] missing game session", session)
      toast.error("战斗会话无效，请从大厅重新匹配")
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
  }

  useEffect(() => {
    if (initedRef.current) return
    initedRef.current = true
    setSessionOk(initBattle(roomId))

    return () => {
      battleTick.stop()
    }
  }, [roomId])

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

  const handleBack = () => {
    battleTick.stop()
    gameSession.enterLobby()
    navigate("/home")
  }

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden select-none"
      style={{ background: OUT_OF_BOUNDS }}
    >
      {sessionOk && (
        <GameWorld cameraX={cameraX} cameraY={cameraY} zoom={zoom}>
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
