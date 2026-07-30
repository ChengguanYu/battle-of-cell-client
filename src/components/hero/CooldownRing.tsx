import { useId } from "react"

interface CooldownRingProps {
  size: number
  /** 动画时长 (ms), 与冷却时间一致 */
  durationMs: number
  /** 环宽度, 默认按直径非线性计算: 小直径比例高, 大直径比例低 */
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
  // 大直径恒定 12px, 小直径额外加粗: size=20→21px, size=40→18px, 80+→12px
  strokeWidth = Math.max(12, 24 - size * 0.15),
  color = "rgba(255, 255, 255, 0.5)",
  onEnd,
}: CooldownRingProps) {
  const center = size / 2
  // 确保 strokeWidth 不超 size * 85%, r 不出现负值
  const sw = Math.min(strokeWidth, size * 0.85)
  const r = Math.max(sw / 2, center - sw / 2)
  const circumference = 2 * Math.PI * r
  // viewBox 外扩半个 stroke, 避免描边被边界裁切成八边形
  const pad = sw / 2
  const vw = size + pad * 2
  const id = useId()
  const dashId = id.replace(/[:.]/g, "_")

  return (
    <svg
      className="absolute pointer-events-none"
      width={vw}
      height={vw}
      viewBox={`${-pad} ${-pad} ${vw} ${vw}`}
      style={{ left: -pad, top: -pad }}
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
        strokeWidth={sw}
        strokeLinecap="butt"
        strokeDasharray={circumference}
        strokeDashoffset={0}
        transform={`rotate(-90 ${center} ${center})`}
        style={{ animation: `cooldown-${dashId} ${durationMs}ms linear forwards` }}
      />
    </svg>
  )
}
