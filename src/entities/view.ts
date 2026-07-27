import type { Fixed } from "../lib/fixed"
import type { Position } from "./types"

/**
 * Presentation contract for an entity.
 * Supplies both fixed-point simulation coords and real-pixel view helpers.
 */
export interface IEntityView {
  /** Fixed-point center X */
  readonly x: Fixed
  /** Fixed-point center Y */
  readonly y: Fixed
  /** Fixed-point radius */
  readonly radius: Fixed
  /** Fixed-point center position snapshot */
  readonly position: Position
  /** Real-world center in px for rendering. */
  getViewPosition(): { x: number; y: number }
  /** Real-world radius in px for rendering. */
  getViewRadius(): number
}
