/**
 * Collision result in real (float) world units. hit=false means no contact;
 * nx/ny/penetration are then zero/irrelevant.
 *
 * The normal points from the obstacle wall toward where the queried body
 * should be pushed (i.e. outward, away from the obstacle interior).
 */
export interface Collision {
  hit: boolean
  nx: number
  ny: number
  penetration: number
}

export const NO_HIT: Collision = { hit: false, nx: 0, ny: 0, penetration: 0 }

/** Runtime type tag used by the collision dispatch table to pair algorithms. */
export type ShapeType = "circle" | "polygon"

/** Real-valued axis-aligned bounding box used by the shape layer. */
export interface ShapeAABB {
  minX: number
  minY: number
  maxX: number
  maxY: number
}

export function aabbOverlap(a: ShapeAABB, b: ShapeAABB): boolean {
  return a.minX <= b.maxX && a.maxX >= b.minX && a.minY <= b.maxY && a.maxY >= b.minY
}

/**
 * Shape base class. Holds the minimum that any shape must expose (an AABB
 * for broad-phase culling) and declares the collision protocol.
 *
 * Concrete subclasses own their own `collide` implementation so that the
 * base file has zero dependencies on concrete shape classes — this avoids
 * circular imports. Shapes only answer "did we touch, and if so along which
 * normal and by how much"; response strategy lives on the entity.
 */
export abstract class Shape {
  abstract readonly type: ShapeType
  abstract get aabb(): ShapeAABB
  abstract collide(other: Shape): Collision
}
