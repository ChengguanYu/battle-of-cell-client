interface HeroDotProps {
  x: number
  y: number
  radius: number
}

export function HeroDot({ x, y, radius }: HeroDotProps) {
  const d = radius * 2
  const dotD = radius * 1.5
  const pingD = radius * 3

  return (
    <div
      className="absolute z-20"
      style={{ left: x - radius, top: y - radius, width: d, height: d }}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div
          className="rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]"
          style={{ width: dotD, height: dotD }}
        />
        <div
          className="absolute animate-ping rounded-full bg-emerald-400/30"
          style={{ width: pingD, height: pingD }}
        />
      </div>
    </div>
  )
}
