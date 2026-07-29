import type { HeroSkinComponent } from "./skins/types"
import { CellSkin } from "./skins/CellSkin"
import { cn } from "../../lib/utils"
import { CooldownRing } from "./CooldownRing"
import { useEffect, useRef, useState, useCallback } from "react"

export interface HeroViewProps {
  /** World X of hero center (real px). */
  x: number
  /** World Y of hero center (real px). */
  y: number
  /** Hero radius in world px; view box is diameter. */
  radius: number
  /**
   * Presentation-only skin. Defaults to CellSkin.
   * Replace with any component that fills 100% of its parent.
   */
  skin?: HeroSkinComponent
  className?: string
  /** 发射冷却时长 (ms), 传入后启用冷却环 */
  launchCooldownMs?: number
  /** 上次发射时间戳 (performance.now), 变化时触发冷却环动画 */
  lastLaunchTimeMs?: number
}

/** 上次发射时间戳变化时才重新挂载冷却环 */
function useCooldownTrigger(lastLaunchTimeMs: number | undefined): number {
  const [key, setKey] = useState(0)
  const prevRef = useRef(lastLaunchTimeMs)

  useEffect(() => {
    if (lastLaunchTimeMs === undefined || lastLaunchTimeMs < 0) {
      prevRef.current = lastLaunchTimeMs
      return
    }
    if (lastLaunchTimeMs !== prevRef.current) {
      prevRef.current = lastLaunchTimeMs
      setKey((k) => k + 1)
    }
  }, [lastLaunchTimeMs])

  return key
}

/**
 * Hero presentation shell.
 * Owns position/size only; appearance is fully delegated to `skin`.
 */
export function HeroView({
  x,
  y,
  radius,
  skin: Skin = CellSkin,
  className,
  launchCooldownMs,
  lastLaunchTimeMs,
}: HeroViewProps) {
  const size = radius * 2
  const cooldownKey = useCooldownTrigger(lastLaunchTimeMs)
  const [ringVisible, setRingVisible] = useState(false)

  const hideRing = useCallback(() => setRingVisible(false), [])

  useEffect(() => {
    if (cooldownKey > 0) setRingVisible(true)
  }, [cooldownKey])

  return (
    <div
      className={cn("absolute z-20 pointer-events-none", className)}
      style={{
        left: x - radius,
        top: y - radius,
        width: size,
        height: size,
      }}
      data-hero-view
    >
      <Skin />
      {ringVisible && launchCooldownMs !== undefined && (
        <CooldownRing
          key={cooldownKey}
          size={size}
          durationMs={launchCooldownMs}
          onEnd={hideRing}
        />
      )}
    </div>
  )
}
