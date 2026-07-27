import {
  type Fixed,
  FIXED_SCALE,
  fixedDiv,
  fixedHypot,
} from "../lib/fixed"
import type { Direction, Velocity } from "./types"

/** Zero fixed-point velocity. */
export function zeroVelocity(): Velocity {
  return { vx: 0, vy: 0 }
}

/** Zero fixed-point direction. */
export function zeroDirection(): Direction {
  return { dirX: 0, dirY: 0 }
}

/** Speed magnitude of a fixed-point velocity. */
export function velocitySpeed(v: Velocity): Fixed {
  return fixedHypot(v.vx, v.vy)
}

/**
 * Normalize a fixed-point vector to a unit direction.
 * Returns zero direction when length is 0.
 */
export function normalizeDirection(x: Fixed, y: Fixed): Direction {
  const len = fixedHypot(x, y)
  if (len === 0) return zeroDirection()
  return {
    dirX: fixedDiv(x, len),
    dirY: fixedDiv(y, len),
  }
}

/** Convert fixed-point world coord to real px. */
export function fixedToWorld(n: Fixed): number {
  return n / FIXED_SCALE
}

/**
 * Project a world point into screen space given camera top-left and zoom.
 * Mirrors the existing Hero hit-test projection.
 */
export function worldToScreen(
  worldX: number,
  worldY: number,
  cameraX: number,
  cameraY: number,
  zoom: number,
  screenCenterX: number = typeof window !== "undefined" ? window.innerWidth / 2 : 0,
  screenCenterY: number = typeof window !== "undefined" ? window.innerHeight / 2 : 0,
): { x: number; y: number } {
  return {
    x: (worldX - cameraX - screenCenterX) * zoom + screenCenterX,
    y: (worldY - cameraY - screenCenterY) * zoom + screenCenterY,
  }
}
