/**
 * 2D collision primitives for convex / simple polygons.
 *
 * All math is in real (float) world units; callers convert to/from the
 * fixed-point entity layer via lib/fixed. Kept framework-free so the same
 * routines are usable from tests and server code without React.
 */

export interface Vec2 {
  x: number
  y: number
}

export interface CircleHit {
  hit: boolean
  /** Outward normal pointing from the obstacle toward where the circle
   *  should be pushed (unit length). */
  nx: number
  ny: number
  /** How far the circle must travel along (nx, ny) to be just touching.
   *  Always >= 0 on a hit. */
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
  let t = ((px - ax) * abx + (py - ay) * aby) / abSq
  if (t < 0) t = 0
  else if (t > 1) t = 1
  return { x: ax + t * abx, y: ay + t * aby }
}

/** Even-odd ray cast. Vertices are a closed ring (last != first). */
export function pointInPolygon(px: number, py: number, verts: Vec2[]): boolean {
  const n = verts.length
  let inside = false
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const a = verts[i]
    const b = verts[j]
    const intersect =
      (ay_gt: boolean, by_gt: boolean) =>
        ay_gt !== by_gt &&
        px < ((b.x - a.x) * (py - a.y)) / (b.y - a.y) + a.x
    if (intersect(a.y > py, b.y > py)) inside = !inside
  }
  return inside
}

/**
 * Circle vs simple polygon. Returns the contact normal (pointing from the
 * obstacle wall toward where the circle center should sit) and penetration.
 *
 * Handles two regimes:
 *  - center outside, edge within r: push out by (r - dist) along outward normal.
 *  - center inside the polygon (deep overlap): push out past the nearest edge
 *    by (r + dist) along -(center->closestPoint).
 */
export function circleVsPolygon(
  cx: number,
  cy: number,
  r: number,
  verts: Vec2[],
): CircleHit {
  const n = verts.length
  if (n < 3) return { hit: false, nx: 0, ny: 0, penetration: 0 }

  let bestDSq = Infinity
  let bestDx = 0
  let bestDy = 0
  for (let i = 0; i < n; i++) {
    const a = verts[i]
    const b = verts[(i + 1) % n]
    const p = closestPointOnSegment(cx, cy, a.x, a.y, b.x, b.y)
    const dx = cx - p.x
    const dy = cy - p.y
    const dSq = dx * dx + dy * dy
    if (dSq < bestDSq) {
      bestDSq = dSq
      bestDx = dx
      bestDy = dy
    }
  }

  const d = Math.sqrt(bestDSq)
  const inside = pointInPolygon(cx, cy, verts)

  if (d > r && !inside) return { hit: false, nx: 0, ny: 0, penetration: 0 }

  if (d === 0) {
    // Degenerate: center sits exactly on the nearest edge. Fall back to the
    // direction from the polygon centroid so we still resolve deterministically.
    let gx = 0
    let gy = 0
    for (const v of verts) {
      gx += v.x
      gy += v.y
    }
    gx /= n
    gy /= n
    let nx = cx - gx
    let ny = cy - gy
    const len = Math.hypot(nx, ny)
    if (len === 0) {
      nx = 1
      ny = 0
    } else {
      nx /= len
      ny /= len
    }
    const pen = inside ? r : r
    return { hit: true, nx, ny, penetration: pen }
  }

  if (inside) {
    // Push out toward the nearest edge (anti-normal of center->closest).
    return {
      hit: true,
      nx: -bestDx / d,
      ny: -bestDy / d,
      penetration: r + d,
    }
  }

  return {
    hit: true,
    nx: bestDx / d,
    ny: bestDy / d,
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
  const d = Math.hypot(dx, dy)
  if (d >= r) return { hit: false, nx: 0, ny: 0, penetration: 0 }
  if (d === 0) return { hit: true, nx: 1, ny: 0, penetration: r }
  return { hit: true, nx: dx / d, ny: dy / d, penetration: r - d }
}
