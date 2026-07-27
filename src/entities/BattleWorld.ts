import { Hero } from "./Hero"

const WORLD_SIZE = 10000
const HERO_RADIUS = 20

/**
 * Battle world lifecycle and the entities owned by it.
 * Creation parameters intentionally stay internal until world generation rules settle.
 */
export class BattleWorld {
  readonly size = WORLD_SIZE
  readonly hero = new Hero(WORLD_SIZE, { radius: HERO_RADIUS })

  get isCreated(): boolean {
    return this.hero.isSpawned
  }

  create(): void {
    this.hero.spawn()
  }

  destroy(): void {
    this.hero.kill()
  }
}
