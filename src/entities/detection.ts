import type { Fixed } from "../lib/fixed"
import type { AABB } from "./types"

/**
 * Collision / spatial query contract for an entity.
 * AABB and circle tests operate in fixed-point world space unless noted.
 */
export interface IEntityDetection {
  /** Circle bounds as an AABB around the entity center. */
  getAABB(): AABB
  /** True if fixed-point world point is inside the entity circle. */
  containsWorldPoint(worldX: Fixed, worldY: Fixed): boolean
  /** True if this entity's AABB overlaps the given box. */
  intersectsAABB(other: AABB): boolean
  /** True if two detection bodies' AABBs overlap. */
  intersectsEntity(other: IEntityDetection): boolean
  /**
   * Screen-space hit test. Inputs are real screen/world floats from UI.
   * Kept for interactive picking (drag start, click select, etc.).
   */
  hitTest(
    worldX: number,
    worldY: number,
    cameraX: number,
    cameraY: number,
    zoom: number,
  ): boolean
}

/** True if two AABBs overlap (inclusive edges). */
export function aabbIntersects(a: AABB, b: AABB): boolean {
  return a.minX <= b.maxX && a.maxX >= b.minX && a.minY <= b.maxY && a.maxY >= b.minY
}

/** True if fixed-point point lies inside AABB (inclusive). */
export function pointInAABB(x: Fixed, y: Fixed, box: AABB): boolean {
  return x >= box.minX && x <= box.maxX && y >= box.minY && y <= box.maxY
}

/** Build an AABB for a circle center + radius (all fixed-point). */
export function circleToAABB(cx: Fixed, cy: Fixed, radius: Fixed): AABB {
  return {
    minX: cx - radius,
    minY: cy - radius,
    maxX: cx + radius,
    maxY: cy + radius,
  }
}

/**
 * Circle containment in fixed-point space.
 * Compares squared distances directly (both sides share scale^2).
 */
export function circleContainsPoint(
  cx: Fixed,
  cy: Fixed,
  radius: Fixed,
  px: Fixed,
  py: Fixed,
): boolean {
  const dx = cx - px
  const dy = cy - py
  return dx * dx + dy * dy <= radius * radius
}
