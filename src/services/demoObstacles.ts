import { PolygonShape } from "../entities/geometry/PolygonShape"
import type { Shape } from "../entities/geometry/Shape"
import type { Vec2 } from "../entities/geometry/collision"

/**
 * Build a C-shaped obstacle (opening to the right) given origin coords, a
 * per-cell pixel size, grid dimensions and a wall thickness in cells.
 *
 * Traces the outer contour as an 8-vertex simple (non-self-intersecting)
 * polygon; no inner hole, so the mid rows of the right edge are absent.
 *
 * @param x0       Top-left X (real world px).
 * @param y0       Top-left Y (real world px).
 * @param cellSize One grid cell in world px.
 * @param cols     Grid columns in the bounding box (default 9).
 * @param rows     Grid rows in the bounding box (default 9).
 * @param thick    Wall thickness in cells (default 1).
 */
export function createCShape(
  x0: number,
  y0: number,
  cellSize: number,
  cols = 9,
  rows = 9,
  thick = 1,
): PolygonShape {
  const w = cols * cellSize
  const h = rows * cellSize
  const t = thick * cellSize
  const vertices: Vec2[] = [
    { x: x0, y: y0 },
    { x: x0 + w, y: y0 },
    { x: x0 + w, y: y0 + t },
    { x: x0 + t, y: y0 + t },
    { x: x0 + t, y: y0 + h - t },
    { x: x0 + w, y: y0 + h - t },
    { x: x0 + w, y: y0 + h },
    { x: x0, y: y0 + h },
  ]
  return PolygonShape.fromVertices(vertices)
}

/**
 * Build a regular polygon (all vertices on a circle, equal arc length
 * between neighbors). `sides` must be >= 3. `startAngle` rotates the first
 * vertex; default -PI/2 puts a vertex at the top so the shape looks upright.
 *
 * @param cx          Circle center X (real world px).
 * @param cy          Circle center Y (real world px).
 * @param radius      Circumradius in world px.
 * @param sides       Number of vertices / edges.
 * @param startAngle  Radians; default places first vertex at top.
 */
export function createRegularPolygon(
  cx: number,
  cy: number,
  radius: number,
  sides: number,
  startAngle = -Math.PI / 2,
): PolygonShape {
  if (sides < 3) throw new Error(`regular polygon needs >= 3 sides, got ${sides}`)
  const step = (2 * Math.PI) / sides
  const vertices: Vec2[] = []
  for (let i = 0; i < sides; i++) {
    const a = startAngle + i * step
    vertices.push({ x: cx + radius * Math.cos(a), y: cy + radius * Math.sin(a) })
  }
  return PolygonShape.fromVertices(vertices)
}

/**
 * Spawn a few non-equilateral triangles near the hero so they are visible
 * within the default viewport and bounce is observable on the first launch.
 * Offsets are kept small (within a few hundred px) so they stay on screen at
 * zoom = 1.
 *
 * Returns obstacle shapes (PolygonShape wrapping a validated Polygon). The
 * render layer reads vertices back through the shape's polygon.
 */
export function createDemoObstacles(_heroX: number, _heroY: number): Shape[] {
  void _heroX
  void _heroY
  return []
}
