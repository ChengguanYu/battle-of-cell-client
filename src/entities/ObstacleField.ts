import { Shape } from "./geometry/Shape"
import type { Hero } from "./Hero"
import { toFixed } from "../lib/fixed"

/**
 * Static set of obstacle shapes. On each step, queries Hero's circle shape
 * against every obstacle shape through the Shape.collide double-dispatch and,
 * on a hit, hands the contact to Hero.bounce for resolution.
 *
 * Hero owns the response strategy (bounce); ObstacleField only drives the
 * per-step query loop. Adding new shape kinds requires no change here.
 */
export class ObstacleField {
  readonly shapes: Shape[]

  constructor(shapes: Shape[]) {
    this.shapes = shapes
  }

  resolve(hero: Hero): void {
    for (const shape of this.shapes) {
      const hit = hero.shape.collide(shape)
      if (!hit.hit) continue
      hero.bounce(toFixed(hit.nx), toFixed(hit.ny), toFixed(hit.penetration))
    }
  }
}