import { useId } from "react"

interface CooldownRingProps {
  size: number
  /** 动画时长 (ms), 与冷却时间一致 */
  durationMs: number
  /** 环宽度, 默认 3 */
  strokeWidth?: number
  color?: string
  /** 动画结束后回调，用于通知父组件卸载 */
  onEnd?: () => void
}

/**
 * 发射冷却环形计时条。
 * 使用 CSS @keyframes 驱动 stroke-dashoffset 从满到空，
 * 无需 JS 逐帧更新，浏览器保证 timing 精准。
 */
export function CooldownRing({
  size,
  durationMs,
  strokeWidth = 3,
  color = "rgba(255, 255, 255, 0.6)",
  onEnd,
}: CooldownRingProps) {
  const center = size / 2
  const r = center - strokeWidth / 2
  const circumference = 2 * Math.PI * r
  const id = useId()
  const dashId = id.replace(/[:.]/g, "_")

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      onAnimationEnd={onEnd}
    >
      <defs>
        <style>{`
          @keyframes cooldown-${dashId} {
            from { stroke-dashoffset: 0; }
            to   { stroke-dashoffset: ${circumference}; }
          }
        `}</style>
      </defs>
      <circle
        cx={center}
        cy={center}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={0}
        transform={`rotate(-90 ${center} ${center})`}
        style={{ animation: `cooldown-${dashId} ${durationMs}ms linear forwards` }}
      />
    </svg>
  )
}
