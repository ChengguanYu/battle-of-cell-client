import { Shape, type Collision, type ShapeAABB, NO_HIT, aabbOverlap } from "./Shape"
import { circleVsPolygon } from "./collision"
import { Polygon } from "./Polygon"
import { CircleShape } from "./CircleShape"

/**
 * Polygonal shape wrapping the {@link Polygon} data object. Collision hits
 * reuse the framework-free circleVsPolygon routine; the returned normal
 * already points from the polygon wall toward the circle side.
 */
export class PolygonShape extends Shape {
  readonly polygon: Polygon

  constructor(polygon: Polygon) {
    super()
    this.polygon = polygon
  }

  get aabb(): ShapeAABB {
    const b = this.polygon.aabb
    return { minX: b.minX, minY: b.minY, maxX: b.maxX, maxY: b.maxY }
  }

  collide(other: Shape): Collision {
    if (!aabbOverlap(this.aabb, other.aabb)) return NO_HIT
    if (other instanceof CircleShape) return this.collideWithCircle(other)
    if (other instanceof PolygonShape) return NO_HIT
    return NO_HIT
  }

  private collideWithCircle(other: CircleShape): Collision {
    return circleVsPolygon(other.x, other.y, other.r, this.polygon.worldVertices())
  }
}