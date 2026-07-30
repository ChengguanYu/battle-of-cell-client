import type { Shape, Collision } from "./Shape"
import { NO_HIT, aabbOverlap } from "./Shape"
import { circleVsCircle, circleVsPolygon } from "./collision"
import type { CircleShape } from "./CircleShape"
import type { PolygonShape } from "./PolygonShape"
import { toFixed, fromFixed } from "../../lib/fixed"

/**
 * Collision algorithm dispatch table.
 *
 * Shapes carry a `type` tag; pairing two types selects the concrete
 * collision routine via a flat lookup table. Adding a new shape kind only
 * requires registering its routines here — existing shape classes stay
 * untouched (open/closed for extension).
 *
 * `fn` always receives its two arguments in the order the pair was
 * registered: param `a` matches `t1`, param `b` matches `t2`. The dispatch
 * helper reorders caller arguments accordingly so the registered routine
 * never has to guess who is who.
 */
type Entry = { t1: string; t2: string; fn: (a: Shape, b: Shape) => Collision }

const table = new Map<string, Entry>()

function key(t1: string, t2: string): string {
  return t1 < t2 ? `${t1}|${t2}` : t1 === t2 ? t1 : `${t2}|${t1}`
}

export function registerCollision(
  t1: string,
  t2: string,
  fn: (a: Shape, b: Shape) => Collision,
): void {
  table.set(key(t1, t2), { t1, t2, fn })
}

/** Broad-phase AABB cull + narrow-phase table lookup. Returns NO_HIT for
 *  unknown type pairs (silently treat as non-colliding). */
export function collideDispatch(a: Shape, b: Shape): Collision {
  if (!aabbOverlap(a.aabb, b.aabb)) return NO_HIT
  const entry = table.get(key(a.type, b.type))
  if (!entry) return NO_HIT
  if (a.type === entry.t1 && b.type === entry.t2) return entry.fn(a, b)
  return entry.fn(b, a)
}

// Default registrations for the built-in shape kinds.
registerCollision("circle", "circle", (a, b) => {
  const c1 = a as CircleShape
  const c2 = b as CircleShape
  const hit = circleVsCircle(toFixed(c1.x), toFixed(c1.y), toFixed(c1.r), toFixed(c2.x), toFixed(c2.y), toFixed(c2.r))
  return hit.hit
    ? { hit: true, nx: fromFixed(hit.nx), ny: fromFixed(hit.ny), penetration: fromFixed(hit.penetration) }
    : NO_HIT
})
registerCollision("circle", "polygon", (a, b) => {
  const c = a as CircleShape
  const p = b as PolygonShape
  const hit = circleVsPolygon(toFixed(c.x), toFixed(c.y), toFixed(c.r), p.polygon.worldVertices().map(v => ({ x: toFixed(v.x), y: toFixed(v.y) })))
  return hit.hit
    ? { hit: true, nx: fromFixed(hit.nx), ny: fromFixed(hit.ny), penetration: fromFixed(hit.penetration) }
    : NO_HIT
})
registerCollision("polygon", "polygon", () => NO_HIT)
