import type { ComponentType } from "react"

/** Pure presentation props for a hero skin. No simulation state. */
export interface HeroSkinProps {
  className?: string
}

export type HeroSkinComponent = ComponentType<HeroSkinProps>
