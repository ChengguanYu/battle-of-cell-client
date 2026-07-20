import { useEffect, useRef, useState, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"

const WORLD_SIZE = 10000
const GRID_SIZE = 100
const MOVE_SPEED = 50
const ZOOM_MIN = 0.25
const ZOOM_MAX = 4
const ZOOM_STEP = 0.1
const WORLD_BG = "#0d1a0d"
const GRID_COLOR = "rgba(255, 255, 255, 0.06)"
const OUT_OF_BOUNDS = "#050805"
const CAMERA_MAX_SPEED = 4000   // 像素/秒，摄像机最大跟随速度
const CAMERA_ACCELERATION = 0.06 // 速度惯性系数，越小加减速越平滑

export function BattlePage() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const [player, setPlayer] = useState({ x: WORLD_SIZE / 2, y: WORLD_SIZE / 2 })
  const [zoom, setZoom] = useState(1)
  const [camera, setCamera] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef(player)
  const prevTimeRef = useRef(0)
  const cameraRef = useRef({ x: 0, y: 0 })
  const cameraVelRef = useRef({ x: 0, y: 0 })

  // 键盘控制玩家移动
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

  // 玩家位置同步到 ref，供 rAF 循环读取
  playerRef.current = player

  // 摄像机速度驱动跟随 + 速度惯性平滑（rAF 循环）
  useEffect(() => {
    prevTimeRef.current = 0
    cameraVelRef.current = { x: 0, y: 0 }
    let rafId: number

    const animate = (timestamp: number) => {
      const cam = cameraRef.current
      const vel = cameraVelRef.current
      const p = playerRef.current
      const vw = window.innerWidth
      const vh = window.innerHeight
      const cx = vw / 2
      const cy = vh / 2

      // 首帧初始化到玩家中心
      if (prevTimeRef.current === 0) {
        prevTimeRef.current = timestamp
        cam.x = Math.max(0, Math.min(p.x - cx, WORLD_SIZE - vw))
        cam.y = Math.max(0, Math.min(p.y - cy, WORLD_SIZE - vh))
        setCamera({ x: cam.x, y: cam.y })
        rafId = requestAnimationFrame(animate)
        return
      }

      const dt = Math.min((timestamp - prevTimeRef.current) / 1000, 0.05)
      prevTimeRef.current = timestamp

      // 目标速度：玩家偏离中心越远，目标速度越大
      const targetVx = ((p.x - cam.x) - cx) / cx * CAMERA_MAX_SPEED
      const targetVy = ((p.y - cam.y) - cy) / cy * CAMERA_MAX_SPEED

      // 速度惯性 — 实际速度平滑接近目标速度，避免突变
      const smoothFactor = 1 - Math.pow(1 - CAMERA_ACCELERATION, dt * 60)
      vel.x += (targetVx - vel.x) * smoothFactor
      vel.y += (targetVy - vel.y) * smoothFactor

      cam.x += vel.x * dt
      cam.y += vel.y * dt

      // 碰到世界边界时刹车
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
  }, [])

  const { x: cameraX, y: cameraY } = camera
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden select-none"
      style={{ background: OUT_OF_BOUNDS }}
    >
      {/* 世界区域 — 10000x10000，transform = 居中缩放 + 摄像机偏移 */}
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
        {/* 玩家实体（世界坐标） */}
        <div
          className="absolute z-20"
          style={{ left: player.x - 8, top: player.y - 8 }}
        >
          <div className="flex h-4 w-4 items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
            <div className="absolute h-6 w-6 animate-ping rounded-full bg-emerald-400/30" />
          </div>
        </div>
      </div>

      {/* HUD 叠加层 */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* 左上角：退出 + 房间号 */}
        <div className="pointer-events-auto absolute left-4 top-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/home")}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-red-500/40 hover:text-red-400"
          >
            &lt;
          </button>
          <span className="rounded-md bg-card/80 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            房间: {roomId}
          </span>
        </div>

        {/* 右下角：玩家坐标 + 缩放 */}
        <div className="pointer-events-auto absolute bottom-4 right-4 flex items-center gap-2 rounded-md bg-card/80 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
          <span>
            玩家: ({Math.round(player.x)}, {Math.round(player.y)})
          </span>
          <span className="text-border">|</span>
          <span>缩放: {zoom.toFixed(1)}x</span>
        </div>

        {/* 操作提示 */}
        <div className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur-sm">
          方向键移动 · Ctrl+滚轮缩放
        </div>
      </div>
    </div>
  )
}
