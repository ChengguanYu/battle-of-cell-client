import { Shape, type Collision, type ShapeAABB, NO_HIT, aabbOverlap } from "./Shape"
import { circleVsPolygon } from "./collision"
import { PolygonShape } from "./PolygonShape"

/**
 * Circle shape in real world units. Hero owns one of these and keeps it in
 * sync with its fixed-point position/radius. The shape carries no motion and
 * no response policy: it only answers collision queries.
 */
export class CircleShape extends Shape {
  constructor(
    public x: number,
    public y: number,
    public r: number,
  ) {
    super()
  }

  get aabb(): ShapeAABB {
    return {
      minX: this.x - this.r,
      minY: this.y - this.r,
      maxX: this.x + this.r,
      maxY: this.y + this.r,
    }
  }

  collide(other: Shape): Collision {
    if (!aabbOverlap(this.aabb, other.aabb)) return NO_HIT
    if (other instanceof PolygonShape) return this.collideWithPolygon(other)
    if (other instanceof CircleShape) return this.collideWithCircle(other)
    return NO_HIT
  }

  private collideWithCircle(other: CircleShape): Collision {
    const dx = this.x - other.x
    const dy = this.y - other.y
    const r = this.r + other.r
    const d = Math.hypot(dx, dy)
    if (d >= r) return NO_HIT
    if (d === 0) return { hit: true, nx: 1, ny: 0, penetration: r }
    return { hit: true, nx: dx / d, ny: dy / d, penetration: r - d }
  }

  private collideWithPolygon(other: PolygonShape): Collision {
    return circleVsPolygon(this.x, this.y, this.r, other.polygon.worldVertices())
  }
}