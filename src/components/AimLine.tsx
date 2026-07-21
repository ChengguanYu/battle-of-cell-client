interface AimLineProps {
  fromX: number
  fromY: number
  toX: number
  toY: number
  visible: boolean
  maxRange: number
}

export function AimLine({ fromX, fromY, toX, toY, visible, maxRange }: AimLineProps) {
  if (!visible) return null

  const dx = toX - fromX
  const dy = toY - fromY
  const dist = Math.sqrt(dx * dx + dy * dy)
  if (dist < 1) return null

  const visualDist = Math.min(dist, maxRange)
  const nx = dx / dist
  const ny = dy / dist
  const endX = fromX + nx * visualDist
  const endY = fromY + ny * visualDist

  return (
    <svg
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 30,
      }}
    >
      <line
        x1={fromX}
        y1={fromY}
        x2={endX}
        y2={endY}
        stroke="rgba(52, 211, 153, 0.5)"
        strokeWidth={2}
        strokeDasharray="6 4"
      />
      <circle
        cx={endX}
        cy={endY}
        r={4}
        fill="rgba(52, 211, 153, 0.7)"
      />
    </svg>
  )
}
