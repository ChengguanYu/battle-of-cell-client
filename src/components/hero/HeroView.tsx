import type { HeroSkinComponent } from "./skins/types"
import { CellSkin } from "./skins/CellSkin"
import { cn } from "../../lib/utils"

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
}: HeroViewProps) {
  const size = radius * 2

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
    </div>
  )
}
