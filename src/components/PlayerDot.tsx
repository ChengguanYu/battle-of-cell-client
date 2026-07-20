interface PlayerDotProps {
  x: number
  y: number
}

export function PlayerDot({ x, y }: PlayerDotProps) {
  return (
    <div className="absolute z-20" style={{ left: x - 8, top: y - 8 }}>
      <div className="flex h-4 w-4 items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
        <div className="absolute h-6 w-6 animate-ping rounded-full bg-emerald-400/30" />
      </div>
    </div>
  )
}
