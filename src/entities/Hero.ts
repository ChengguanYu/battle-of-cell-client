import type { Position } from "./types"

export interface HeroState {
  x: number
  y: number
  hp: number
  maxHp: number
}

export type HeroEvent = "move" | "damage" | "heal" | "death" | "change"

export class Hero {
  private _state: HeroState
  private _vx = 0
  private _vy = 0
  private _dirX = 0
  private _dirY = 0
  private _initSpeed = 0
  private worldSize: number
  private _deceleration: number
  private _maxLaunchSpeed: number
  private _radius: number
  /** 0 = fully inelastic (stop normal), 1 = perfectly elastic (no kinetic loss on bounce). */
  private _elasticity: number
  private listeners = new Map<HeroEvent, Set<(state: HeroState) => void>>()

  constructor(
    worldSize: number,
    opts?: Partial<HeroState & { deceleration?: number; maxLaunchSpeed?: number; radius?: number; elasticity?: number }>,
  ) {
    this.worldSize = worldSize
    this._deceleration = opts?.deceleration ?? 200
    this._maxLaunchSpeed = opts?.maxLaunchSpeed ?? 150
    this._radius = opts?.radius ?? 20
    this._elasticity = clamp(opts?.elasticity ?? 1, 0, 1)
    this._state = {
      x: worldSize / 2,
      y: worldSize / 2,
      hp: 100,
      maxHp: 100,
      ...opts,
    }
    this.clampPositionToBounds()
  }

  get state(): HeroState {
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

  get direction(): { dirX: number; dirY: number } {
    return { dirX: this._dirX, dirY: this._dirY }
  }

  get initSpeed(): number {
    return this._initSpeed
  }

  get maxLaunchSpeed(): number {
    return this._maxLaunchSpeed
  }

  get deceleration(): number {
    return this._deceleration
  }

  get radius(): number {
    return this._radius
  }

  get elasticity(): number {
    return this._elasticity
  }

  setDeceleration(value: number): void {
    this._deceleration = value
  }

  setMaxLaunchSpeed(value: number): void {
    this._maxLaunchSpeed = value
  }

  setRadius(value: number): void {
    this._radius = Math.max(1, value)
    this.clampPositionToBounds()
    this.emit("move")
    this.emit("change")
  }

  setElasticity(value: number): void {
    this._elasticity = clamp(value, 0, 1)
  }

  /**
   * Screen-space hit test against this hero's radius.
   */
  hitTest(worldX: number, worldY: number, cameraX: number, cameraY: number, zoom: number): boolean {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const sx = (this._state.x - cameraX - cx) * zoom + cx
    const sy = (this._state.y - cameraY - cy) * zoom + cy
    const tx = (worldX - cameraX - cx) * zoom + cx
    const ty = (worldY - cameraY - cy) * zoom + cy
    const screenR = this._radius * zoom
    const dx = sx - tx
    const dy = sy - ty
    return dx * dx + dy * dy <= screenR * screenR
  }

  launch(dirX: number, dirY: number, initialSpeed: number): void {
    this._dirX = dirX
    this._dirY = dirY
    this._initSpeed = initialSpeed
    this._vx = dirX * initialSpeed
    this._vy = dirY * initialSpeed
    this.emit("move")
    this.emit("change")
  }

  update(dt: number): void {
    if (this._vx === 0 && this._vy === 0) return

    let nextX = this._state.x + this._vx * dt
    let nextY = this._state.y + this._vy * dt
    const { min, max } = this.bounds

    // Bounce when the hero's edge hits the world edge (center constrained by radius).
    if (nextX < min) {
      nextX = min
      this._vx = -this._vx * this._elasticity
    } else if (nextX > max) {
      nextX = max
      this._vx = -this._vx * this._elasticity
    }

    if (nextY < min) {
      nextY = min
      this._vy = -this._vy * this._elasticity
    } else if (nextY > max) {
      nextY = max
      this._vy = -this._vy * this._elasticity
    }

    this._state.x = nextX
    this._state.y = nextY

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
    const { min, max } = this.bounds
    this._state.x = clamp(x, min, max)
    this._state.y = clamp(y, min, max)
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

  on(event: HeroEvent, fn: (state: HeroState) => void): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event)!.add(fn)
    return () => {
      this.listeners.get(event)?.delete(fn)
    }
  }

  onChange(fn: (state: HeroState) => void): () => void {
    return this.on("change", fn)
  }

  private emit(event: HeroEvent): void {
    const fns = this.listeners.get(event)
    if (fns) {
      const snapshot = this.state
      fns.forEach((fn) => fn(snapshot))
    }
  }

  private get bounds(): { min: number; max: number } {
    const min = this._radius
    const max = Math.max(min, this.worldSize - this._radius)
    return { min, max }
  }

  private clampPositionToBounds(): void {
    const { min, max } = this.bounds
    this._state.x = clamp(this._state.x, min, max)
    this._state.y = clamp(this._state.y, min, max)
  }
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v))
}
