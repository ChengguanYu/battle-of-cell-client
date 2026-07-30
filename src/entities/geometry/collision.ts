const FP = 1000

/** 向零取整整数除法 */
function idiv(a: number, b: number): number {
  return (a / b) | 0
}

/** 定点数乘法: a * b / FP */
function mul(a: number, b: number): number {
  return idiv(a * b, FP)
}

/** 正整数平方根 (牛顿法) */
function isqrt(n: number): number {
  if (n < 2) return n
  // 纯整数二分法：找最小 2^k 使 k² > n，再二分结果
  let bit = 1
  while (bit * bit <= n) bit <<= 1
  bit >>= 1
  let r = 0
  while (bit > 0) {
    const t = r + bit
    if (t * t <= n) r = t
    bit >>= 1
  }
  return r
}

/**
 * 2D collision primitives for convex / simple polygons.
 *
 * All values are fixed-point (×FP). Kept framework-free so the same routines
 * are usable from tests and server code without React.
 */

export interface Vec2 {
  x: number  /** 定点数 (×1000) */
  y: number  /** 定点数 (×1000) */
}

export interface CircleHit {
  hit: boolean
  /** Outward normal pointing from the obstacle toward where the circle
   *  should be pushed (unit length, 定点数 ×1000). */
  nx: number
  ny: number
  /** How far the circle must travel along (nx, ny) to be just touching.
   *  Always >= 0 on a hit. 定点数 ×1000. */
  penetration: number
}

/** Closest point on segment a->b to point p. */
export function closestPointOnSegment(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
): Vec2 {
  const abx = bx - ax
  const aby = by - ay
  const abSq = abx * abx + aby * aby
  if (abSq === 0) return { x: ax, y: ay }
  const dot = (px - ax) * abx + (py - ay) * aby
  let t = idiv(dot * FP, abSq)
  if (t < 0) t = 0
  else if (t > FP) t = FP
  return { x: ax + mul(t, abx), y: ay + mul(t, aby) }
}

/** Even-odd ray cast. Vertices are a closed ring (last != first). */
export function pointInPolygon(px: number, py: number, verts: Vec2[]): boolean {
  const n = verts.length
  let inside = false
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const a = verts[i]
    const b = verts[j]
    const den = b.y - a.y
    const num = (b.x - a.x) * (py - a.y)
    const intersect =
      (ay_gt: boolean, by_gt: boolean) =>
        ay_gt !== by_gt &&
        px < idiv(num, den) + a.x
    if (intersect(a.y > py, b.y > py)) inside = !inside
  }
  return inside
}

/**
 * Circle vs simple polygon. Returns the contact normal (pointing from the
 * obstacle wall toward where the circle center should sit) and penetration.
 *
 * Handles two regimes:
 *  - center outside, edge within r: push out by (r - dist) along outward
 *    normal (correct for convex and concave alike; the nearest edge is the
 *    first contact regardless of silhouette).
 *  - center inside the polygon (deep overlap): scan every edge for the
 *    *minimum positive exit depth* along its outward normal. Robust for
 *    concave polygons, where the Euclidean-nearest edge may lie across a
 *    concave bay and push the circle deeper; the true shallowest exit is
 *    found by projecting along each per-edge outward normal and taking the
 *    minimum.
 */
export function circleVsPolygon(
  cx: number,
  cy: number,
  r: number,
  verts: Vec2[],
): CircleHit {
  const n = verts.length
  if (n < 3) return { hit: false, nx: 0, ny: 0, penetration: 0 }

  let bestDSq = -1
  let bestDx = 0
  let bestDy = 0
  for (let i = 0; i < n; i++) {
    const a = verts[i]
    const b = verts[(i + 1) % n]
    const p = closestPointOnSegment(cx, cy, a.x, a.y, b.x, b.y)
    const dx = cx - p.x
    const dy = cy - p.y
    const dSq = dx * dx + dy * dy
    if (bestDSq < 0 || dSq < bestDSq) {
      bestDSq = dSq
      bestDx = dx
      bestDy = dy
    }
  }

  const d = isqrt(bestDSq)
  const inside = pointInPolygon(cx, cy, verts)

  if (d > r && !inside) return { hit: false, nx: 0, ny: 0, penetration: 0 }

  if (d === 0) {
    // Degenerate: center sits exactly on the nearest edge. In the inside
    // path below the per-edge scan handles this naturally; in the outside
    // path the centroid fallback was meaningless for a freshly-touching
    // circle, so treat it as a tangential contact with zero penetration.
    if (!inside) return { hit: true, nx: FP, ny: 0, penetration: 0 }
  }

 if (inside) {
    // Find the shallowest exit. For each edge, resolve its outward unit
    // normal winding-independently (sample pointInPolygon from the edge
    // midpoint, which sits on the boundary, not from the interior point),
    // then measure the signed distance from the center to that edge along
    // the outward normal. For an interior center this is positive; the
    // exit depth to push the circle just outside that edge is dist + r =
    // signed + r. Taking the minimum across all edges handles concave
    // polygons correctly: the Euclidean-nearest edge might lie across a
    // concave bay and not be a valid exit, while the per-edge minimum
    // naturally lands on the genuine shallowest exit. Back-facing edges
    // (signed clamped to a vertex) end up with a larger value and lose the
    // min, so no explicit skip is needed; the returned normal is a unit
    // vector so downstream reflection does not blow up velocity.
    let minExit = -1
    let exitNx = 0
    let exitNy = 0
    const EPS_OUT_FP = FP / 100
    for (let i = 0; i < n; i++) {
      const a = verts[i]
      const b = verts[(i + 1) % n]
      let ex = b.x - a.x
      let ey = b.y - a.y
      const elen = isqrt(ex * ex + ey * ey)
      if (elen === 0) continue
      ex = idiv(ex * FP, elen)
      ey = idiv(ey * FP, elen)
      // Outer normal candidate (left-hand); flip if it points into the
      // polygon. Sample from the edge midpoint so the offset actually
      // crosses the boundary, keeping the result winding-independent.
     let nx = -ey
     let ny = ex
     const mx = (a.x + b.x + 1) >> 1
     const my = (a.y + b.y + 1) >> 1
      if (pointInPolygon(mx + idiv(nx * EPS_OUT_FP, FP), my + idiv(ny * EPS_OUT_FP, FP), verts)) {
        nx = -nx
        ny = -ny
      }
      const p = closestPointOnSegment(cx, cy, a.x, a.y, b.x, b.y)
      // Signed distance from center to edge along the outward normal.
      // Positive for an interior center; the exit depth is dist + r.
      const signed = idiv((p.x - cx) * nx + (p.y - cy) * ny, FP)
      const exit = signed + r
      if (minExit < 0 || exit < minExit) {
        minExit = exit
        exitNx = nx
        exitNy = ny
      }
    }
    if (minExit >= 0) {
      return { hit: true, nx: exitNx, ny: exitNy, penetration: minExit }
    }
    // Fallback: every edge degenerate. Normalize the push direction so a
    // non-unit normal cannot blow up the reflection in bounce.
    const fd = d === 0 ? FP : d
    return { hit: true, nx: -idiv(bestDx * FP, fd), ny: -idiv(bestDy * FP, fd), penetration: r + d }
  }

  return {
    hit: true,
    nx: idiv(bestDx * FP, d),
    ny: idiv(bestDy * FP, d),
    penetration: r - d,
  }
}

/** Circle vs circle. Same hit contract as circleVsPolygon (normal points from
 *  b's surface toward where a should be pushed). d===0 falls back to +X. */
export function circleVsCircle(
  ax: number,
  ay: number,
  ar: number,
  bx: number,
  by: number,
  br: number,
): CircleHit {
  const dx = ax - bx
  const dy = ay - by
  const r = ar + br
  const d = isqrt(dx * dx + dy * dy)
  if (d >= r) return { hit: false, nx: 0, ny: 0, penetration: 0 }
  if (d === 0) return { hit: true, nx: FP, ny: 0, penetration: r }
  return { hit: true, nx: idiv(dx * FP, d), ny: idiv(dy * FP, d), penetration: r - d }
}
