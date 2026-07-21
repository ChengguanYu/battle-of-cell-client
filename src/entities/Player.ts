import type { Position } from "./types"

export interface PlayerState {
  x: number
  y: number
  hp: number
  maxHp: number
}

export type PlayerEvent = "move" | "damage" | "heal" | "death" | "change"

export class Player {
  private _state: PlayerState
  private _vx = 0
  private _vy = 0
  private _dirX = 0  // launch direction unit vector (constant until next launch)
  private _dirY = 0
  private _initSpeed = 0  // launch initial speed (constant until next launch)
  private worldSize: number
  private _deceleration: number
  private _maxLaunchSpeed: number
  private listeners = new Map<PlayerEvent, Set<(state: PlayerState) => void>>()

  constructor(worldSize: number, opts?: Partial<PlayerState & { deceleration?: number; maxLaunchSpeed?: number }>) {
    this.worldSize = worldSize
    this._deceleration = opts?.deceleration ?? 500
    this._maxLaunchSpeed = opts?.maxLaunchSpeed ?? 3000
    this._state = {
      x: worldSize / 2,
      y: worldSize / 2,
      hp: 100,
      maxHp: 100,
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

  get position(): Position {
    return { x: this._state.x, y: this._state.y }
  }

  get velocity(): { vx: number; vy: number } {
    return { vx: this._vx, vy: this._vy }
  }

  /** Launch direction unit vector — constant until next launch. */
  get direction(): { dirX: number; dirY: number } {
    return { dirX: this._dirX, dirY: this._dirY }
  }

  /** Initial launch speed in px/s — constant until next launch. */
  get initSpeed(): number {
    return this._initSpeed
  }

  get maxLaunchSpeed(): number {
    return this._maxLaunchSpeed
  }

  get deceleration(): number {
    return this._deceleration
  }

  setDeceleration(value: number): void {
    this._deceleration = value
  }

  setMaxLaunchSpeed(value: number): void {
    this._maxLaunchSpeed = value
  }

  /**
   * Launch the player with a direction and initial speed.
   * @param dirX - Unit vector X component
   * @param dirY - Unit vector Y component
   * @param initialSpeed - Initial speed in px/s (clamped to maxLaunchSpeed)
   */
  launch(dirX: number, dirY: number, initialSpeed: number): void {
    const speed = Math.min(initialSpeed, this._maxLaunchSpeed)
    this._dirX = dirX
    this._dirY = dirY
    this._initSpeed = speed
    this._vx = dirX * speed
    this._vy = dirY * speed
    this.emit("move")
    this.emit("change")
  }

  /**
   * Physics step: apply velocity and uniform deceleration.
   * Call once per frame with delta-time in seconds.
   */
  update(dt: number): void {
    if (this._vx === 0 && this._vy === 0) return

    this._state.x = clamp(this._state.x + this._vx * dt, 0, this.worldSize)
    this._state.y = clamp(this._state.y + this._vy * dt, 0, this.worldSize)

    const currentSpeed = Math.sqrt(this._vx * this._vx + this._vy * this._vy)
    const decelAmount = this._deceleration * dt

    if (decelAmount >= currentSpeed) {
      this._vx = 0
      this._vy = 0
    } else {
      const ratio = (currentSpeed - decelAmount) / currentSpeed
      this._vx *= ratio
      this._vy *= ratio
    }

    this.emit("move")
    this.emit("change")
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
