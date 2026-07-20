import type { ReactNode } from "react"

const WORLD_SIZE = 10000
const GRID_SIZE = 100
const WORLD_BG = "#0d1a0d"
const GRID_COLOR = "rgba(255, 255, 255, 0.06)"

interface GameWorldProps {
  cameraX: number
  cameraY: number
  zoom: number
  children: ReactNode
}

export function GameWorld({ cameraX, cameraY, zoom, children }: GameWorldProps) {
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2

  return (
    <div
      className="absolute left-0 top-0"
      style={{
        width: WORLD_SIZE,
        height: WORLD_SIZE,
        transform: [
          `translate(${cx}px, ${cy}px)`,
          `scale(${zoom})`,
          `translate(${-cx - cameraX}px, ${-cy - cameraY}px)`,
        ].join(" "),
        transformOrigin: "0 0",
        background: WORLD_BG,
        backgroundImage: [
          `linear-gradient(${GRID_COLOR} 1px, transparent 1px)`,
          `linear-gradient(90deg, ${GRID_COLOR} 1px, transparent 1px)`,
        ].join(", "),
        backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
      }}
    >
      {children}
    </div>
  )
}
