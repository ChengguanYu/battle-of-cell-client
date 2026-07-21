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
      const key = e.key.replace("Arrow", "") as "Up" | "Down" | "Left" | "Right"
      const method = `move${key}` as keyof Player
      ;(player[method] as () => void)()
    }
    window.addEventListener("keydown", handleKey)
    return () => {
      unsub()
      window.removeEventListener("keydown", handleKey)
    }
  }, [player])

  return { player, playerRef, state }
}
