import { Polygon } from "../entities/geometry/Polygon"
import { PolygonShape } from "../entities/geometry/PolygonShape"
import type { Shape } from "../entities/geometry/Shape"
import type { Vec2 } from "../entities/geometry/collision"

/**
 * Spawn a few non-equilateral triangles near the hero so they are visible
 * within the default viewport and bounce is observable on the first launch.
 * Offsets are kept small (within a few hundred px) so they stay on screen at
 * zoom = 1.
 *
 * Returns obstacle shapes (PolygonShape wrapping a validated Polygon). The
 * render layer reads vertices back through the shape's polygon.
 */
export function createDemoObstacles(heroX: number, heroY: number): Shape[] {
  const triangles: Vec2[][] = [
    [
      { x: heroX + 120, y: heroY - 80 },
      { x: heroX + 260, y: heroY - 40 },
      { x: heroX + 180, y: heroY + 60 },
    ],
    [
      { x: heroX - 220, y: heroY + 100 },
      { x: heroX - 90, y: heroY + 180 },
      { x: heroX - 240, y: heroY + 200 },
    ],
    [
      { x: heroX - 60, y: heroY - 160 },
      { x: heroX + 40, y: heroY - 120 },
      { x: heroX - 80, y: heroY - 40 },
    ],
  ]
  return triangles.map((v) => new PolygonShape(new Polygon(v)))
}