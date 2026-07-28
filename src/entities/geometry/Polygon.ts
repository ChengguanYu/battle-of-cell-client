import type { Vec2 } from "./collision"

/**
 * Simple (non-self-intersecting) polygon in world space.
 *
 * Vertices are stored in real units and ordered (winding-agnostic). The ring
 * is implicitly closed: the last vertex connects back to the first; do not
 * repeat the first vertex at the end.
 *
 * This is a pure data object: it knows its geometry and can validate itself,
 * but it owns no motion, no rendering, and no entity coupling.
 */
export class Polygon {
  readonly vertices: Vec2[]

  constructor(vertices: Vec2[]) {
    Polygon.validate(vertices)
    this.vertices = vertices
  }

  /** Axis-aligned bounding box (real world units). */
  get aabb(): { minX: number; minY: number; maxX: number; maxY: number } {
    let minX = Infinity
    let minY = Infinity
    let maxX = -Infinity
    let maxY = -Infinity
    for (const v of this.vertices) {
      if (v.x < minX) minX = v.x
      if (v.y < minY) minY = v.y
      if (v.x > maxX) maxX = v.x
      if (v.y > maxY) maxY = v.y
    }
    return { minX, minY, maxX, maxY }
  }

  /** Shallow alias for render layers that want "current world verts". */
  worldVertices(): Vec2[] {
    return this.vertices
  }

  /**
   * Throws on invalid geometry; never returns for a bad ring.
   *
   * Checks (the ones that matter for a closed 2D region):
   *  1. >= 3 vertices.
   *  2. no duplicate vertices (epsilon tolerant).
   *  3. no self-intersecting (non-adjacent) edges (simple polygon test).
   *
   * Winding (CW/CCW) is intentionally not enforced: either orientation still
   * bounds a valid region; the collision routine is orientation-independent.
   */
  static validate(vertices: Vec2[]): void {
    if (vertices.length < 3) {
      throw new Error(`polygon needs >= 3 vertices, got ${vertices.length}`)
    }

    const EPS = 1e-6
    const n = vertices.length

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = vertices[i].x - vertices[j].x
        const dy = vertices[i].y - vertices[j].y
        if (Math.hypot(dx, dy) < EPS) {
          throw new Error(`duplicate vertex at index ${i} and ${j}`)
        }
      }
    }

    for (let i = 0; i < n; i++) {
      const a = vertices[i]
      const b = vertices[(i + 1) % n]
      for (let k = i + 1; k < n; k++) {
        // Skip adjacent edges (they share an endpoint and are allowed to meet).
        if (k === i || (k + 1) % n === i) continue
        const c = vertices[k]
        const d = vertices[(k + 1) % n]
        if (segmentsIntersect(a, b, c, d)) {
          throw new Error(
            `self-intersection between edge ${i}->${(i + 1) % n} and edge ${k}->${(k + 1) % n}`,
          )
        }
      }
    }
  }
}

/** Standard orientation-test segment intersection (strictly crossing). */
function segmentsIntersect(p1: Vec2, p2: Vec2, p3: Vec2, p4: Vec2): boolean {
  function orient(a: Vec2, b: Vec2, c: Vec2): number {
    return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)
  }
  const d1 = orient(p3, p4, p1)
  const d2 = orient(p3, p4, p2)
  const d3 = orient(p1, p2, p3)
  const d4 = orient(p1, p2, p4)
  if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
      ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) {
    return true
  }
  return false
}