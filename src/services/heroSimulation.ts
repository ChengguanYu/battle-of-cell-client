import type { Hero } from "../entities/Hero"
import { fromFixed } from "../lib/fixed"

/** 子步位移上限比例：单步子步位移 ≤ radius × SAFETY_FACTOR */
const SAFETY_FACTOR = 0.5
/** 子步绝对上限（hero 静止时的兜底值） */
const MAX_SUB_STEP = 1 / 60

/**
 * 按真实客户端同款动态子步推进 Hero，并允许调用方在每步子步后做碰撞结算。
 * 追帧和实时 rAF 共用这里，避免大步长跳过障碍物。
 */
export function stepHero(
  hero: Hero,
  dtSeconds: number,
  onStep?: (dt: number) => void,
): void {
  const radius = fromFixed(hero.radius)
  const speed = fromFixed(hero.initSpeed)
  const safeStep = speed > 0 ? (radius / speed) * SAFETY_FACTOR : MAX_SUB_STEP
  const subDt = Math.min(MAX_SUB_STEP, safeStep)

  let remaining = dtSeconds
  while (remaining > 0) {
    const step = Math.min(subDt, remaining)
    hero.update(step)
    onStep?.(step)
    remaining -= step
  }
}
