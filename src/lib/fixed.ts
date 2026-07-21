/** Fixed-point scale: 3 decimal places. 1.0 => 1000 */
export const FIXED_SCALE = 1000

/** Integer fixed-point number (value * FIXED_SCALE). */
export type Fixed = number

export function toFixed(n: number): Fixed {
  return Math.round(n * FIXED_SCALE)
}

export function fromFixed(n: Fixed): number {
  return n / FIXED_SCALE
}

export function fixedMul(a: Fixed, b: Fixed): Fixed {
  return Math.round((a * b) / FIXED_SCALE)
}

export function fixedDiv(a: Fixed, b: Fixed): Fixed {
  if (b === 0) return 0
  return Math.round((a * FIXED_SCALE) / b)
}

/** Length of a fixed-point vector. Result is also fixed-point. */
export function fixedHypot(x: Fixed, y: Fixed): Fixed {
  return Math.round(Math.sqrt(x * x + y * y))
}

export function fixedClamp(v: Fixed, min: Fixed, max: Fixed): Fixed {
  return Math.max(min, Math.min(max, v))
}

export function fixedAbs(v: Fixed): Fixed {
  return Math.abs(v)
}
