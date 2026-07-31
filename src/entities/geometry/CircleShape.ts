import { Shape, type Collision, type ShapeAABB } from "./Shape"
import { collideDispatch } from "./collisionDispatch"

/**
 * Circle shape in real world units. Hero owns one of these and keeps it in
 * sync with its fixed-point position/radius. The shape carries no motion and
 * no response policy: it only answers collision queries.
 */
export class CircleShape extends Shape {
  readonly type = "circle" as const
  x: number
  y: number
  r: number

  constructor(
    x: number,
    y: number,
    r: number,
  ) {
    super()
    this.x = x
    this.y = y
    this.r = r
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
    return collideDispatch(this, other)
  }
}
