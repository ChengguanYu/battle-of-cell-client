import { useId } from "react"
import { cn } from "../../../lib/utils"
import type { HeroSkinProps } from "./types"

/**
 * Default hero skin: stylized cell with outer halo ring.
 * Fills its parent box; swap by passing another skin to HeroView.
 */
export function CellSkin({ className }: HeroSkinProps) {
  const uid = useId().replace(/:/g, "")
  const bodyId = `cell-body-${uid}`
  const coreId = `cell-core-${uid}`
  const rimId = `cell-rim-${uid}`
  const sheenId = `cell-sheen-${uid}`
  const glowId = `cell-glow-${uid}`

  return (
    <div className={cn("relative h-full w-full", className)} aria-hidden>
      {/* Outer halo / ping ring — keep this presentation signature */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30" />
        <div className="absolute inset-[12%] rounded-full bg-emerald-400/10 blur-[2px]" />
      </div>

      <svg
        viewBox="0 0 100 100"
        className="relative z-10 h-full w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id={bodyId} cx="36%" cy="32%" r="72%">
            <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.98" />
            <stop offset="38%" stopColor="#34d399" stopOpacity="0.94" />
            <stop offset="78%" stopColor="#059669" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id={coreId} cx="40%" cy="38%" r="68%">
            <stop offset="0%" stopColor="#ecfdf5" />
            <stop offset="42%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#047857" />
          </radialGradient>
          <linearGradient id={rimId} x1="18%" y1="12%" x2="82%" y2="88%">
            <stop offset="0%" stopColor="#d1fae5" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#34d399" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#065f46" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id={sheenId} cx="32%" cy="28%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Soft body glow under membrane */}
        <circle cx="50" cy="50" r="39" fill="#34d399" opacity="0.18" filter={`url(#${glowId})`} />

        {/* Stylized irregular membrane */}
        <path
          d="M50 12
             C63 12 74 17 81 27
             C89 38 91 50 87 62
             C83 74 73 84 60 88
             C49 91 37 90 27 83
             C16 75 11 63 12 50
             C13 35 22 20 36 14
             C41 12 45 12 50 12 Z"
          fill={`url(#${bodyId})`}
          stroke={`url(#${rimId})`}
          strokeWidth="2.4"
          filter={`url(#${glowId})`}
        />

        {/* Inner membrane rim for depth */}
        <path
          d="M50 18
             C61 18 71 22 77 30
             C84 40 85 50 82 60
             C78 71 69 79 58 82
             C48 85 38 84 29 78
             C20 71 16 61 17 50
             C18 37 26 25 38 20
             C42 18 46 18 50 18 Z"
          fill="none"
          stroke="#a7f3d0"
          strokeOpacity="0.28"
          strokeWidth="1.2"
        />

        {/* Specular sheen */}
        <ellipse cx="38" cy="34" rx="18" ry="13" fill={`url(#${sheenId})`} />

        {/* Nucleus ring + core */}
        <circle cx="54" cy="55" r="15.5" fill="none" stroke="#6ee7b7" strokeOpacity="0.45" strokeWidth="1.4" />
        <circle cx="54" cy="55" r="12.5" fill={`url(#${coreId})`} opacity="0.96" />
        <circle cx="50" cy="51" r="4.8" fill="#ecfdf5" opacity="0.55" />
        <circle cx="58" cy="59" r="2.2" fill="#064e3b" opacity="0.28" />

        {/* Floating vesicles / organelles */}
        <circle cx="31" cy="56" r="3.4" fill="#a7f3d0" opacity="0.78" />
        <circle cx="31" cy="56" r="1.3" fill="#ecfdf5" opacity="0.55" />
        <circle cx="69" cy="35" r="2.8" fill="#86efac" opacity="0.72" />
        <circle cx="36" cy="33" r="2.1" fill="#d1fae5" opacity="0.7" />
        <ellipse cx="70" cy="64" rx="3.6" ry="2.3" fill="#34d399" opacity="0.55" />
        <circle cx="43" cy="70" r="1.7" fill="#bbf7d0" opacity="0.65" />
      </svg>

      {/* Living pulse over the cell body */}
      <div className="pointer-events-none absolute inset-[14%] z-20 animate-pulse rounded-full bg-emerald-200/10" />
    </div>
  )
}
