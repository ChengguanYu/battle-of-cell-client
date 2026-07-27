import { Entity } from "./Entity"
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
 *
 * Spatial fields (position / direction / velocity / radius / hitTest)
 * live on {@link Entity}; Hero only owns hero-domain state and motion rules.
 */
export class Hero extends Entity {
  private _hp: number
  private _maxHp: number
  private _initSpeed: Fixed = 0
  private _deceleration: Fixed
  private _maxLaunchSpeed: Fixed
  /** 0 = fully inelastic, FIXED_SCALE = perfectly elastic. */
  private _elasticity: Fixed
  private listeners = new Map<HeroEvent, Set<(state: HeroState) => void>>()

  /**
   * @param worldSize Real world size in px (converted to fixed).
   * @param opts Real-valued options (converted to fixed).
   */
  constructor(worldSize: number, opts?: HeroOptions) {
    super(worldSize, {
      x: opts?.x,
      y: opts?.y,
      radius: opts?.radius,
    })
    this._deceleration = toFixed(opts?.deceleration ?? 200)
    this._maxLaunchSpeed = toFixed(opts?.maxLaunchSpeed ?? 150)
    this._elasticity = fixedClamp(toFixed(opts?.elasticity ?? 0.7), 0, FIXED_SCALE)
    this._hp = opts?.hp ?? 100
    this._maxHp = opts?.maxHp ?? 100
  }

  get state(): HeroState {
    return {
      x: this._x,
      y: this._y,
      hp: this._hp,
      maxHp: this._maxHp,
    }
  }

  get hp(): number {
    return this._hp
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
    super.setRadius(value)
    this.emit("move")
    this.emit("change")
  }

  /** @param value Real 0..1 */
  setElasticity(value: number): void {
    this._elasticity = fixedClamp(toFixed(value), 0, FIXED_SCALE)
  }

  /**
   * Launch with fixed-point unit direction and fixed-point speed.
   * If the hero already has velocity, the new impulse is orthogonally composed
   * with the current velocity (vector sum in fixed-point, no float path):
   *   v' = dir_cur * |v| + dir_op * speed_op
   * Then direction / initSpeed are refreshed from v'.
   * Callers that receive API floats must convert first via toFixed / fixedDiv.
   */
  launch(dirX: Fixed, dirY: Fixed, initialSpeed: Fixed): void {
    const impulseX = fixedMul(dirX, initialSpeed)
    const impulseY = fixedMul(dirY, initialSpeed)

    // Orthogonal composition: existing velocity + new launch impulse.
    // When at rest this degenerates to a plain overwrite.
    this._vx = this._vx + impulseX
    this._vy = this._vy + impulseY

    const composedSpeed = fixedHypot(this._vx, this._vy)
    if (composedSpeed === 0) {
      this._dirX = 0
      this._dirY = 0
      this._initSpeed = 0
      this._vx = 0
      this._vy = 0
    } else {
      // Re-normalize from the composed velocity (unit direction, fixed-point).
      this._dirX = fixedDiv(this._vx, composedSpeed)
      this._dirY = fixedDiv(this._vy, composedSpeed)
      this._initSpeed = composedSpeed
    }

    this.emit("move")
    this.emit("change")
  }

  /**
   * @param dtSeconds Real delta time in seconds (converted to fixed on entry).
   */
  update(dtSeconds: number): void {
    if (this._vx === 0 && this._vy === 0) return

    const dt = toFixed(dtSeconds)
    let nextX = this._x + fixedMul(this._vx, dt)
    let nextY = this._y + fixedMul(this._vy, dt)
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

    this._x = nextX
    this._y = nextY

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
    super.setPosition(x, y)
    this.emit("move")
    this.emit("change")
  }

  takeDamage(amount: number): void {
    if (this._hp <= 0) return
    this._hp = Math.max(0, this._hp - amount)
    this.emit("damage")
    if (this._hp <= 0) this.emit("death")
    this.emit("change")
  }

  heal(amount: number): void {
    this._hp = Math.min(this._maxHp, this._hp + amount)
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
}
