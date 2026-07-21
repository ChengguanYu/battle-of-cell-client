import { useRef, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Player } from "../entities/Player"
import { usePlayer } from "../hooks/usePlayer"
import { useCamera } from "../hooks/useCamera"
import { GameWorld } from "../components/GameWorld"
import { PlayerDot } from "../components/PlayerDot"
import { BattleHUD } from "../components/BattleHUD"
import { AimLine } from "../components/AimLine"
import { DebugPanel } from "../components/DebugPanel"

const WORLD_SIZE = 10000
const OUT_OF_BOUNDS = "#050805"

export function BattlePage() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const playerRef = useRef(new Player(WORLD_SIZE))
  const { cameraX, cameraY, zoom, containerRef } = useCamera(playerRef)
  const { state, isAiming, aimTarget, player, speedCoefficient, setSpeedCoefficient } = usePlayer(
    playerRef,
    containerRef,
    { x: cameraX, y: cameraY, zoom },
  )
  const [debugVisible, setDebugVisible] = useState(false)

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

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden select-none"
      style={{ background: OUT_OF_BOUNDS }}
    >
      <GameWorld cameraX={cameraX} cameraY={cameraY} zoom={zoom}>
        <PlayerDot x={state.x} y={state.y} />
        <AimLine
          fromX={state.x}
          fromY={state.y}
          toX={aimTarget.x}
          toY={aimTarget.y}
          visible={isAiming}
          maxRange={player.maxLaunchSpeed}
        />
      </GameWorld>

      <BattleHUD
        roomId={roomId}
        playerX={state.x}
        playerY={state.y}
        zoom={zoom}
        onBack={() => navigate("/home")}
      />

      <DebugPanel
        player={player}
        speedCoefficient={speedCoefficient}
        onSpeedCoefficientChange={setSpeedCoefficient}
        visible={debugVisible}
        onClose={() => setDebugVisible(false)}
      />
    </div>
  )
}
