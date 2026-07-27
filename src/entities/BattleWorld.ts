import { Hero } from "./Hero"

const WORLD_SIZE = 10000

/**
 * Battle world lifecycle and the entities owned by it.
 * Creation parameters intentionally stay internal until world generation rules settle.
 */
export class BattleWorld {
  readonly size = WORLD_SIZE
  readonly hero = new Hero(WORLD_SIZE)

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
