import { useEffect, useRef, useState } from "react"
import { Player } from "../entities/Player"

const WORLD_SIZE = 10000

export function usePlayer() {
  const playerRef = useRef<Player>(new Player(WORLD_SIZE))
  const player = playerRef.current
  const [state, setState] = useState(player.state)

  useEffect(() => {
    const unsub = player.onChange(setState)
    const handleKey = (e: KeyboardEvent) => {
      if (!e.key.startsWith("Arrow")) return
      e.preventDefault()
      const key = e.key.replace("Arrow", "")
      const moveActions: Record<string, () => void> = {
        Up: player.moveUp.bind(player),
        Down: player.moveDown.bind(player),
        Left: player.moveLeft.bind(player),
        Right: player.moveRight.bind(player),
      }
      moveActions[key]?.()
    }
    window.addEventListener("keydown", handleKey)
    return () => {
      unsub()
      window.removeEventListener("keydown", handleKey)
    }
  }, [player])

  return { player, playerRef, state }
}
