import { useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Player } from "../entities/Player"
import { usePlayer } from "../hooks/usePlayer"
import { useCamera } from "../hooks/useCamera"
import { GameWorld } from "../components/GameWorld"
import { PlayerDot } from "../components/PlayerDot"
import { BattleHUD } from "../components/BattleHUD"
import { AimLine } from "../components/AimLine"

const WORLD_SIZE = 10000
const OUT_OF_BOUNDS = "#050805"

export function BattlePage() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const playerRef = useRef(new Player(WORLD_SIZE))
  const { cameraX, cameraY, zoom, containerRef } = useCamera(playerRef)
  const { state, isAiming, aimTarget } = usePlayer(
    playerRef,
    containerRef,
    { x: cameraX, y: cameraY, zoom },
  )

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
        />
      </GameWorld>

      <BattleHUD
        roomId={roomId}
        playerX={state.x}
        playerY={state.y}
        zoom={zoom}
        onBack={() => navigate("/home")}
      />
    </div>
  )
}
