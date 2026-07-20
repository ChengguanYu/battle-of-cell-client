import { useParams, useNavigate } from "react-router-dom"
import { usePlayer } from "../hooks/usePlayer"
import { useCamera } from "../hooks/useCamera"
import { GameWorld } from "../components/GameWorld"
import { PlayerDot } from "../components/PlayerDot"
import { BattleHUD } from "../components/BattleHUD"

const OUT_OF_BOUNDS = "#050805"

export function BattlePage() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const { player, playerRef } = usePlayer()
  const { cameraX, cameraY, zoom, containerRef } = useCamera(playerRef)

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden select-none"
      style={{ background: OUT_OF_BOUNDS }}
    >
      <GameWorld cameraX={cameraX} cameraY={cameraY} zoom={zoom}>
        <PlayerDot x={player.x} y={player.y} />
      </GameWorld>

      <BattleHUD
        roomId={roomId}
        playerX={player.x}
        playerY={player.y}
        zoom={zoom}
        onBack={() => navigate("/home")}
      />
    </div>
  )
}
