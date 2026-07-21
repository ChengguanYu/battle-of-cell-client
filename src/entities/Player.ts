import type { Position } from "./types"

export interface PlayerState {
  x: number
  y: number
  hp: number
  maxHp: number
  speed: number
}

export type PlayerEvent = "move" | "damage" | "heal" | "death" | "change"

export class Player {
  private _state: PlayerState
  private worldSize: number
  private listeners = new Map<PlayerEvent, Set<(state: PlayerState) => void>>()

  constructor(worldSize: number, opts?: Partial<PlayerState>) {
    this.worldSize = worldSize
    this._state = {
      x: worldSize / 2,
      y: worldSize / 2,
      hp: 100,
      maxHp: 100,
      speed: 50,
      ...opts,
    }
  }

  get state(): PlayerState {
    return { ...this._state }
  }

  get x(): number {
    return this._state.x
  }

  get y(): number {
    return this._state.y
  }

  get hp(): number {
    return this._state.hp
  }

  get speed(): number {
    return this._state.speed
  }

  get position(): Position {
    return { x: this._state.x, y: this._state.y }
  }

  move(dx: number, dy: number): void {
    const { speed } = this._state
    this._state.x = clamp(this._state.x + dx * speed, 0, this.worldSize)
    this._state.y = clamp(this._state.y + dy * speed, 0, this.worldSize)
    this.emit("move")
    this.emit("change")
  }

  moveUp(): void {
    this.move(0, -1)
  }

  moveDown(): void {
    this.move(0, 1)
  }

  moveLeft(): void {
    this.move(-1, 0)
  }

  moveRight(): void {
    this.move(1, 0)
  }

  setPosition(x: number, y: number): void {
    this._state.x = clamp(x, 0, this.worldSize)
    this._state.y = clamp(y, 0, this.worldSize)
    this.emit("move")
    this.emit("change")
  }

  takeDamage(amount: number): void {
    if (this._state.hp <= 0) return
    this._state.hp = Math.max(0, this._state.hp - amount)
    this.emit("damage")
    if (this._state.hp <= 0) this.emit("death")
    this.emit("change")
  }

  heal(amount: number): void {
    this._state.hp = Math.min(this._state.maxHp, this._state.hp + amount)
    this.emit("heal")
    this.emit("change")
  }

  on(event: PlayerEvent, fn: (state: PlayerState) => void): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event)!.add(fn)
    return () => {
      this.listeners.get(event)?.delete(fn)
    }
  }

  onChange(fn: (state: PlayerState) => void): () => void {
    return this.on("change", fn)
  }

  private emit(event: PlayerEvent): void {
    const fns = this.listeners.get(event)
    if (fns) {
      const snapshot = this.state
      fns.forEach((fn) => fn(snapshot))
    }
  }
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v))
}
