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
  // 避免 StrictMode 双调用重复 toast
  const checkedRef = useRef(false)

  // 无论跳转进入还是直接访问：加载后查全局态
  // 有态 → 忽略（对局逻辑逐步填充）；无态 → 仅错误通知
  useEffect(() => {
    if (checkedRef.current) return
    checkedRef.current = true

    const session = gameSession.getState()
    if (!gameSession.isBattleReady()) {
      console.error("[Battle] missing game session", session)
      toast.error("战斗会话无效，请从大厅重新匹配")
      setSessionOk(false)
      return
    }

    if (roomId != null && String(session.roomId) !== String(roomId)) {
      console.warn(
        "[Battle] route roomId mismatch",
        roomId,
        "session.roomId=",
        session.roomId,
      )
    }

    console.log(
      "[Battle] session ready roomId=",
      session.roomId,
      "firstFrame=",
      session.firstFrameNumber,
    )
    setSessionOk(true)
  }, [roomId, navigate])

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
