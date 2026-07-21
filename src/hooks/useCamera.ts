import { useEffect, useRef, useState, useCallback } from "react"
import { fromFixed } from "../lib/fixed"

const WORLD_SIZE = 10000
const ZOOM_MIN = 0.25
const ZOOM_MAX = 4
const ZOOM_STEP = 0.1
const CAMERA_MAX_SPEED = 8000
const CAMERA_ACCELERATION = 0.06

/**
 * Camera follows a hero-like target. The target's x/y are fixed-point business
 * coordinates; camera converts them to real pixels for rendering/math.
 */
export function useCamera(heroRef: React.RefObject<{ x: number; y: number } | null>) {
  const [camera, setCamera] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const prevTimeRef = useRef(0)
  const cameraRef = useRef({ x: 0, y: 0 })
  const cameraVelRef = useRef({ x: 0, y: 0 })

  // 滚轮缩放
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!e.ctrlKey && !e.metaKey) return
    e.preventDefault()
    setZoom((prev) => {
      const delta = -Math.sign(e.deltaY) * ZOOM_STEP
      return Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, prev + delta))
    })
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener("wheel", handleWheel, { passive: false })
    return () => el.removeEventListener("wheel", handleWheel)
  }, [handleWheel])

  // rAF 摄像机速度缓动
  useEffect(() => {
    prevTimeRef.current = 0
    cameraVelRef.current = { x: 0, y: 0 }
    let rafId: number

    const animate = (timestamp: number) => {
      const cam = cameraRef.current
      const vel = cameraVelRef.current
      const p = heroRef.current
      const vw = window.innerWidth
      const vh = window.innerHeight
      const cx = vw / 2
      const cy = vh / 2

      if (!p) {
        rafId = requestAnimationFrame(animate)
        return
      }

      // Hero business coords are fixed-point; convert for camera.
      const px = fromFixed(p.x)
      const py = fromFixed(p.y)

      if (prevTimeRef.current === 0) {
        prevTimeRef.current = timestamp
        cam.x = Math.max(0, Math.min(px - cx, WORLD_SIZE - vw))
        cam.y = Math.max(0, Math.min(py - cy, WORLD_SIZE - vh))
        setCamera({ x: cam.x, y: cam.y })
        rafId = requestAnimationFrame(animate)
        return
      }

      const dt = Math.min((timestamp - prevTimeRef.current) / 1000, 0.05)
      prevTimeRef.current = timestamp

      const targetVx = ((px - cam.x) - cx) / cx * CAMERA_MAX_SPEED
      const targetVy = ((py - cam.y) - cy) / cy * CAMERA_MAX_SPEED

      const sf = 1 - Math.pow(1 - CAMERA_ACCELERATION, dt * 60)
      vel.x += (targetVx - vel.x) * sf
      vel.y += (targetVy - vel.y) * sf

      cam.x += vel.x * dt
      cam.y += vel.y * dt

      const maxX = Math.max(0, WORLD_SIZE - vw)
      const maxY = Math.max(0, WORLD_SIZE - vh)
      if (cam.x <= 0 || cam.x >= maxX) vel.x = 0
      if (cam.y <= 0 || cam.y >= maxY) vel.y = 0
      cam.x = Math.max(0, Math.min(cam.x, maxX))
      cam.y = Math.max(0, Math.min(cam.y, maxY))

      setCamera({ x: cam.x, y: cam.y })
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [heroRef])

  return { cameraX: camera.x, cameraY: camera.y, zoom, containerRef }
}
