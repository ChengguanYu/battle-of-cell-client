import { useEffect, useRef, useState } from "react"
import type { Hero } from "../entities/Hero"
import { FIXED_SCALE, toFixed, fixedMul, fixedDiv, fixedHypot } from "../lib/fixed"

const DEFAULT_SPEED_COEFFICIENT = 10

export function useHero(
  heroRef: React.MutableRefObject<Hero>,
  containerRef: React.RefObject<HTMLDivElement | null>,
  camera: { x: number; y: number; zoom: number },
) {
  const hero = heroRef.current
  const [state, setState] = useState(hero.state)
  const [isAiming, setIsAiming] = useState(false)
  const [aimTarget, setAimTarget] = useState({ x: 0, y: 0 })
  const [speedCoefficient, setSpeedCoefficient] = useState(DEFAULT_SPEED_COEFFICIENT)
  const speedCoefficientRef = useRef(DEFAULT_SPEED_COEFFICIENT)
  const isAimingRef = useRef(false)
  const prevTimeRef = useRef(0)

  // keep ref in sync for callback usage
  useEffect(() => {
    speedCoefficientRef.current = speedCoefficient
  }, [speedCoefficient])

  // subscribe to hero state changes
  useEffect(() => {
    return hero.onChange(setState)
  }, [hero])

  // rAF game loop — runs hero.update(dt) each frame
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
      hero.update(dt)
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [hero])

  // mouse input
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // UI coords stay real; convert into fixed only when writing business state.
    const toWorld = (clientX: number, clientY: number) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      return {
        x: (clientX - cx) / camera.zoom + camera.x + cx,
        y: (clientY - cy) / camera.zoom + camera.y + cy,
      }
    }

    const onMouseDown = (e: MouseEvent) => {
      // screen-space hit test using hero's radius
      const wp = toWorld(e.clientX, e.clientY)
      if (!hero.hitTest(wp.x, wp.y, camera.x, camera.y, camera.zoom)) return

      isAimingRef.current = true
      setIsAiming(true)
      setAimTarget(wp)
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
      // Convert mouse world delta into fixed business units.
      const dx = toFixed(wp.x) - hero.x
      const dy = toFixed(wp.y) - hero.y
      const dist = fixedHypot(dx, dy)

      // Ignore near-zero pulls (< 1px)
      if (dist < FIXED_SCALE) return

      // Cap pull length, then multiply by speed coefficient → initial speed.
      const cappedDist = Math.min(dist, hero.maxLaunchSpeed)
      const coeffFixed = toFixed(speedCoefficientRef.current)
      const initialSpeed = fixedMul(cappedDist, coeffFixed)

      // Unit direction in fixed-point (scale 1000). Opposite of pull.
      const dirX = fixedDiv(-dx, dist)
      const dirY = fixedDiv(-dy, dist)
      hero.launch(dirX, dirY, initialSpeed)
    }

    el.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)

    return () => {
      el.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [containerRef, hero, camera])

  return {
    hero,
    heroRef,
    state,
    isAiming,
    aimTarget,
    speedCoefficient,
    setSpeedCoefficient,
  }
}
