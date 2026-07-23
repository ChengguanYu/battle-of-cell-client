import { useEffect, useRef, useState } from "react"
import type { Hero } from "../entities/Hero"
import { FIXED_SCALE, toFixed, fixedMul, fixedDiv, fixedHypot } from "../lib/fixed"

const DEFAULT_SPEED_COEFFICIENT = 10

export interface LaunchReleaseInfo {
  /** fixed-point unit direction x */
  dirX: number
  /** fixed-point unit direction y */
  dirY: number
  /** fixed-point initial speed */
  speed: number
}

export interface UseHeroOptions {
  /**
   * 鼠标抬起且成功发射后回调。
   * 参数为本次真实发射状态（定点），供上层立刻组 LAUNCH 帧发送。
   */
  onLaunch?: (info: LaunchReleaseInfo) => void
}

export function useHero(
  heroRef: React.MutableRefObject<Hero>,
  containerRef: React.RefObject<HTMLDivElement | null>,
  camera: { x: number; y: number; zoom: number },
  options?: UseHeroOptions,
) {
  const hero = heroRef.current
  const [state, setState] = useState(hero.state)
  const [isAiming, setIsAiming] = useState(false)
  /**
   * 指示器偏移（相对 Hero 中心，世界像素）。
   * 来源：屏幕控制向量取反后 / zoom，与运动方向一致。
   */
  const [aimOffset, setAimOffset] = useState({ x: 0, y: 0 })
  const [speedCoefficient, setSpeedCoefficient] = useState(DEFAULT_SPEED_COEFFICIENT)
  const speedCoefficientRef = useRef(DEFAULT_SPEED_COEFFICIENT)
  const isAimingRef = useRef(false)
  /** 控制向量原点：mousedown 的屏幕坐标 (clientX/clientY) */
  const aimStartScreenRef = useRef<{ x: number; y: number } | null>(null)
  const cameraRef = useRef(camera)
  const prevTimeRef = useRef(0)
  const onLaunchRef = useRef(options?.onLaunch)

  useEffect(() => {
    cameraRef.current = camera
  }, [camera])

  useEffect(() => {
    speedCoefficientRef.current = speedCoefficient
  }, [speedCoefficient])

  useEffect(() => {
    onLaunchRef.current = options?.onLaunch
  }, [options?.onLaunch])

  useEffect(() => {
    return hero.onChange(setState)
  }, [hero])

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

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    /**
     * 控制向量只在屏幕空间定义：
     *   origin  = 按下时的 client 坐标
     *   vector  = 当前 client - origin
     * 与世界坐标、Hero 位置无关。
     * 进入物理/世界指示器时，再 / zoom 换算成世界像素尺度。
     */
    const screenControlVector = (
      start: { x: number; y: number },
      clientX: number,
      clientY: number,
    ) => ({
      x: clientX - start.x,
      y: clientY - start.y,
    })

    const screenToWorldDelta = (screen: { x: number; y: number }) => {
      const zoom = cameraRef.current.zoom || 1
      return { x: screen.x / zoom, y: screen.y / zoom }
    }

    const onMouseDown = (e: MouseEvent) => {
      aimStartScreenRef.current = { x: e.clientX, y: e.clientY }
      isAimingRef.current = true
      setIsAiming(true)
      setAimOffset({ x: 0, y: 0 })
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isAimingRef.current) return
      const start = aimStartScreenRef.current
      if (!start) return

      const dragScreen = screenControlVector(start, e.clientX, e.clientY)
      // 指示器画在世界层：屏幕拖拽 / zoom → 世界尺度；方向 = 运动方向 = -drag
      const dragWorld = screenToWorldDelta(dragScreen)
      setAimOffset({ x: -dragWorld.x, y: -dragWorld.y })
    }

    const onMouseUp = (e: MouseEvent) => {
      if (!isAimingRef.current) return
      isAimingRef.current = false
      setIsAiming(false)
      const start = aimStartScreenRef.current
      aimStartScreenRef.current = null
      if (!start) return

      const dragScreen = screenControlVector(start, e.clientX, e.clientY)
      const dragWorld = screenToWorldDelta(dragScreen)

      // 模长用世界尺度，才能和 maxLaunchSpeed / 初速度单位对齐
      const dx = toFixed(dragWorld.x)
      const dy = toFixed(dragWorld.y)
      const dist = fixedHypot(dx, dy)

      if (dist < FIXED_SCALE) {
        // 拖拽过短：视为取消，不发射、不发帧
        setAimOffset({ x: 0, y: 0 })
        return
      }

      const cappedDist = Math.min(dist, hero.maxLaunchSpeed)
      const coeffFixed = toFixed(speedCoefficientRef.current)
      const initialSpeed = fixedMul(cappedDist, coeffFixed)

      // 发射方向 = 控制向量反向（弹弓）
      const dirX = fixedDiv(-dx, dist)
      const dirY = fixedDiv(-dy, dist)

      // 本地写入会正交合成；上报仍用本次操作原始方向/速度
      hero.launch(dirX, dirY, initialSpeed)
      setAimOffset({ x: 0, y: 0 })
      onLaunchRef.current?.({ dirX, dirY, speed: initialSpeed })
    }

    el.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)

    return () => {
      el.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [containerRef, hero])

  return {
    hero,
    heroRef,
    state,
    isAiming,
    aimOffset,
    speedCoefficient,
    setSpeedCoefficient,
  }
}