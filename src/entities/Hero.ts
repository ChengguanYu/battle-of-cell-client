import type { Position } from "./types"
import {
  FIXED_SCALE,
  type Fixed,
  toFixed,
  fixedMul,
  fixedDiv,
  fixedHypot,
  fixedClamp,
} from "../lib/fixed"

export interface HeroState {
  /** Fixed-point world X */
  x: Fixed
  /** Fixed-point world Y */
  y: Fixed
  hp: number
  maxHp: number
}

export type HeroEvent = "move" | "damage" | "heal" | "death" | "change"

export interface HeroOptions {
  x?: number
  y?: number
  hp?: number
  maxHp?: number
  /** Real units (px/s^2). Converted to fixed on entry. */
  deceleration?: number
  /** Real units (px). Converted to fixed on entry. */
  maxLaunchSpeed?: number
  /** Real units (px). Converted to fixed on entry. */
  radius?: number
  /** Real units 0..1. Converted to fixed on entry. */
  elasticity?: number
}

/**
 * Hero entity. All simulation state is stored as fixed-point integers
 * with 3 decimal places (scale = 1000). Public setters accept real numbers
 * (e.g. from API / debug UI) and convert on entry.
 */
export class Hero {
  private _state: HeroState
  private _vx: Fixed = 0
  private _vy: Fixed = 0
  private _dirX: Fixed = 0
  private _dirY: Fixed = 0
  private _initSpeed: Fixed = 0
  private worldSize: Fixed
  private _deceleration: Fixed
  private _maxLaunchSpeed: Fixed
  private _radius: Fixed
  /** 0 = fully inelastic, FIXED_SCALE = perfectly elastic. */
  private _elasticity: Fixed
  private listeners = new Map<HeroEvent, Set<(state: HeroState) => void>>()

  /**
   * @param worldSize Real world size in px (converted to fixed).
   * @param opts Real-valued options (converted to fixed).
   */
  constructor(worldSize: number, opts?: HeroOptions) {
    this.worldSize = toFixed(worldSize)
    this._deceleration = toFixed(opts?.deceleration ?? 200)
    this._maxLaunchSpeed = toFixed(opts?.maxLaunchSpeed ?? 150)
    this._radius = toFixed(opts?.radius ?? 20)
    this._elasticity = fixedClamp(toFixed(opts?.elasticity ?? 0.7), 0, FIXED_SCALE)
    this._state = {
      x: toFixed(opts?.x ?? worldSize / 2),
      y: toFixed(opts?.y ?? worldSize / 2),
      hp: opts?.hp ?? 100,
      maxHp: opts?.maxHp ?? 100,
    }
    this.clampPositionToBounds()
  }

  get state(): HeroState {
    return { ...this._state }
  }

  /** Fixed-point X */
  get x(): Fixed {
    return this._state.x
  }

  /** Fixed-point Y */
  get y(): Fixed {
    return this._state.y
  }

  get hp(): number {
    return this._state.hp
  }

  get position(): Position {
    return { x: this._state.x, y: this._state.y }
  }

  /** Fixed-point velocity */
  get velocity(): { vx: Fixed; vy: Fixed } {
    return { vx: this._vx, vy: this._vy }
  }

  /** Fixed-point unit direction (e.g. -267, 789 ≈ -0.267, 0.789) */
  get direction(): { dirX: Fixed; dirY: Fixed } {
    return { dirX: this._dirX, dirY: this._dirY }
  }

  /** Fixed-point initial launch speed */
  get initSpeed(): Fixed {
    return this._initSpeed
  }

  /** Fixed-point max launch distance */
  get maxLaunchSpeed(): Fixed {
    return this._maxLaunchSpeed
  }

  /** Fixed-point deceleration */
  get deceleration(): Fixed {
    return this._deceleration
  }

  /** Fixed-point radius */
  get radius(): Fixed {
    return this._radius
  }

  /** Fixed-point elasticity (0..FIXED_SCALE) */
  get elasticity(): Fixed {
    return this._elasticity
  }

  /** @param value Real px/s^2 */
  setDeceleration(value: number): void {
    this._deceleration = toFixed(Math.max(0, value))
  }

  /** @param value Real px */
  setMaxLaunchSpeed(value: number): void {
    this._maxLaunchSpeed = toFixed(Math.max(0, value))
  }

  /** @param value Real px */
  setRadius(value: number): void {
    this._radius = toFixed(Math.max(1, value))
    this.clampPositionToBounds()
    this.emit("move")
    this.emit("change")
  }

  /** @param value Real 0..1 */
  setElasticity(value: number): void {
    this._elasticity = fixedClamp(toFixed(value), 0, FIXED_SCALE)
  }

  /**
   * Screen-space hit test. Inputs are real screen/world floats from UI.
   */
  hitTest(worldX: number, worldY: number, cameraX: number, cameraY: number, zoom: number): boolean {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const hx = this._state.x / FIXED_SCALE
    const hy = this._state.y / FIXED_SCALE
    const hr = this._radius / FIXED_SCALE
    const sx = (hx - cameraX - cx) * zoom + cx
    const sy = (hy - cameraY - cy) * zoom + cy
    const tx = (worldX - cameraX - cx) * zoom + cx
    const ty = (worldY - cameraY - cy) * zoom + cy
    const screenR = hr * zoom
    const dx = sx - tx
    const dy = sy - ty
    return dx * dx + dy * dy <= screenR * screenR
  }

  /**
   * Launch with fixed-point unit direction and fixed-point speed.
   * Callers that receive API floats must convert first via toFixed / fixedDiv.
   */
  launch(dirX: Fixed, dirY: Fixed, initialSpeed: Fixed): void {
    this._dirX = dirX
    this._dirY = dirY
    this._initSpeed = initialSpeed
    this._vx = fixedMul(dirX, initialSpeed)
    this._vy = fixedMul(dirY, initialSpeed)
    this.emit("move")
    this.emit("change")
  }

  /**
   * @param dtSeconds Real delta time in seconds (converted to fixed on entry).
   */
  update(dtSeconds: number): void {
    if (this._vx === 0 && this._vy === 0) return

    const dt = toFixed(dtSeconds)
    let nextX = this._state.x + fixedMul(this._vx, dt)
    let nextY = this._state.y + fixedMul(this._vy, dt)
    const { min, max } = this.bounds

    // Bounce when the hero's edge hits the world edge (center constrained by radius).
    if (nextX < min) {
      nextX = min
      this._vx = -fixedMul(this._vx, this._elasticity)
    } else if (nextX > max) {
      nextX = max
      this._vx = -fixedMul(this._vx, this._elasticity)
    }

    if (nextY < min) {
      nextY = min
      this._vy = -fixedMul(this._vy, this._elasticity)
    } else if (nextY > max) {
      nextY = max
      this._vy = -fixedMul(this._vy, this._elasticity)
    }

    this._state.x = nextX
    this._state.y = nextY

    const currentSpeed = fixedHypot(this._vx, this._vy)
    const decelAmount = fixedMul(this._deceleration, dt)

    if (decelAmount >= currentSpeed) {
      this._vx = 0
      this._vy = 0
    } else {
      const ratio = fixedDiv(currentSpeed - decelAmount, currentSpeed)
      this._vx = fixedMul(this._vx, ratio)
      this._vy = fixedMul(this._vy, ratio)
    }

    this.emit("move")
    this.emit("change")
  }

  /** @param x Real world X */
  /** @param y Real world Y */
  setPosition(x: number, y: number): void {
    const { min, max } = this.bounds
    this._state.x = fixedClamp(toFixed(x), min, max)
    this._state.y = fixedClamp(toFixed(y), min, max)
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

  private get bounds(): { min: Fixed; max: Fixed } {
    const min = this._radius
    const max = Math.max(min, this.worldSize - this._radius)
    return { min, max }
  }

  private clampPositionToBounds(): void {
    const { min, max } = this.bounds
    this._state.x = fixedClamp(this._state.x, min, max)
    this._state.y = fixedClamp(this._state.y, min, max)
  }
}
