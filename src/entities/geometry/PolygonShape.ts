import { Shape, type Collision, type ShapeAABB } from "./Shape"
import { collideDispatch } from "./collisionDispatch"
import { Polygon } from "./Polygon"
import { type Vec2 } from "./collision"

/**
 * Polygonal shape wrapping the {@link Polygon} data object. Collision hits
 * reuse the framework-free circleVsPolygon routine; the returned normal
 * already points from the polygon wall toward the circle side.
 */
export class PolygonShape extends Shape {
  readonly type = "polygon" as const
  readonly polygon: Polygon

  constructor(polygon: Polygon) {
    super()
    this.polygon = polygon
  }

  /**
   * One-shot factory: raw vertices -> validated Polygon -> PolygonShape.
   * Throws on invalid geometry (see Polygon.validate). Use this when you
   * have a vertex ring and want a collision-ready shape in one call.
   */
  static fromVertices(vertices: Vec2[]): PolygonShape {
    return new PolygonShape(new Polygon(vertices))
  }

  get aabb(): ShapeAABB {
    const b = this.polygon.aabb
    return { minX: b.minX, minY: b.minY, maxX: b.maxX, maxY: b.maxY }
  }

  collide(other: Shape): Collision {
    return collideDispatch(this, other)
  }
}
