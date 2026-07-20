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

export function BattlePage() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const [player, setPlayer] = useState({ x: WORLD_SIZE / 2, y: WORLD_SIZE / 2 })
  const [viewport, setViewport] = useState({ width: 0, height: 0 })
  const [zoom, setZoom] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  // 初始化视口尺寸
  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
    }
    updateViewport()
    window.addEventListener("resize", updateViewport)
    return () => window.removeEventListener("resize", updateViewport)
  }, [])

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

  // 摄像机跟随玩家居中
  const vw = viewport.width
  const vh = viewport.height
  const cx = vw / 2
  const cy = vh / 2
  const cameraX = Math.max(0, Math.min(player.x - cx, WORLD_SIZE - vw))
  const cameraY = Math.max(0, Math.min(player.y - cy, WORLD_SIZE - vh))

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
