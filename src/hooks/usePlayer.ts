import { useEffect, useRef, useState } from "react"

const WORLD_SIZE = 10000
const MOVE_SPEED = 50

export function usePlayer() {
  const [player, setPlayer] = useState({ x: WORLD_SIZE / 2, y: WORLD_SIZE / 2 })
  const playerRef = useRef(player)
  playerRef.current = player

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e.key.startsWith("Arrow")) return
      e.preventDefault()
      setPlayer((prev) => {
        let { x, y } = prev
        switch (e.key) {
          case "ArrowUp":
            y = Math.max(0, y - MOVE_SPEED)
            break
          case "ArrowDown":
            y = Math.min(WORLD_SIZE, y + MOVE_SPEED)
            break
          case "ArrowLeft":
            x = Math.max(0, x - MOVE_SPEED)
            break
          case "ArrowRight":
            x = Math.min(WORLD_SIZE, x + MOVE_SPEED)
            break
        }
        return { x, y }
      })
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return { player, playerRef }
}
