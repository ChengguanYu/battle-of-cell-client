import { Hero } from "./Hero"

/**
 * Battle world lifecycle and the entities owned by it.
 */
export class BattleWorld {
  readonly width: number
  readonly height: number
  readonly hero: Hero

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.hero = new Hero(width, height)
  }

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
