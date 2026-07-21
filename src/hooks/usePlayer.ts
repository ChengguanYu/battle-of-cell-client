import { useEffect, useRef, useState } from "react"
import { Player } from "../entities/Player"

const WORLD_SIZE = 10000

export function usePlayer(
  containerRef: React.RefObject<HTMLDivElement | null>,
  camera: { x: number; y: number; zoom: number },
) {
  const playerRef = useRef<Player>(new Player(WORLD_SIZE))
  const player = playerRef.current
  const [state, setState] = useState(player.state)
  const [isAiming, setIsAiming] = useState(false)
  const [aimTarget, setAimTarget] = useState({ x: 0, y: 0 })
  const isAimingRef = useRef(false)
  const prevTimeRef = useRef(0)

  // subscribe to player state changes
  useEffect(() => {
    return player.onChange(setState)
  }, [player])

  // rAF game loop — runs player.update(dt) each frame
  useEffect(() => {
    prevTimeRef.current = 0
    let rafId: number

    const tick = (timestamp: number) => {
      if (prevTimeRef.current === 0) {
        prevTimeRef.current = timestamp
        rafId = requestAnimationFrame(tick)
        return
      }
      const dt = Math.min((timestamp - prevTimeRef.current) / 1000, 0.05)
      prevTimeRef.current = timestamp
      player.update(dt)
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [player])

  // mouse input
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const toWorld = (clientX: number, clientY: number) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      return {
        x: (clientX - cx) / camera.zoom + camera.x + cx,
        y: (clientY - cy) / camera.zoom + camera.y + cy,
      }
    }

    const onMouseDown = (e: MouseEvent) => {
      isAimingRef.current = true
      setIsAiming(true)
      setAimTarget(toWorld(e.clientX, e.clientY))
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isAimingRef.current) return
      setAimTarget(toWorld(e.clientX, e.clientY))
    }

    const onMouseUp = (e: MouseEvent) => {
      if (!isAimingRef.current) return
      isAimingRef.current = false
      setIsAiming(false)

      const wp = toWorld(e.clientX, e.clientY)
      const dx = wp.x - player.x
      const dy = wp.y - player.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 1) return

      const dirX = -dx / dist
      const dirY = -dy / dist
      player.launch(dirX, dirY, dist)
    }

    el.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)

    return () => {
      el.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [containerRef, player, camera])

  return { player, playerRef, state, isAiming, aimTarget }
}
