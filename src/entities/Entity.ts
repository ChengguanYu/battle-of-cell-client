import type { Position, Velocity, Direction, AABB, EntityOptions } from "./types"
import type { IEntityView } from "./view"
import type { IEntityDetection } from "./detection"
import {
  aabbIntersects,
  circleContainsPoint,
  circleToAABB,
} from "./detection"
import { velocitySpeed } from "./entityUtils"
import {
  FIXED_SCALE,
  type Fixed,
  toFixed,
  fixedClamp,
  fromFixed,
} from "../lib/fixed"

/**
 * World entity base.
 * Owns position / direction / velocity / radius and implements view + detection.
 * Subclasses keep domain logic (HP, launch, bounce, events, etc.).
 */
export abstract class Entity implements IEntityView, IEntityDetection {
  protected _x: Fixed
  protected _y: Fixed
  protected _vx: Fixed = 0
  protected _vy: Fixed = 0
  protected _dirX: Fixed = 0
  protected _dirY: Fixed = 0
  protected _radius: Fixed
  protected worldSize: Fixed

  /**
   * @param worldSize Real world size in px (converted to fixed).
   * @param opts Real-valued options (converted to fixed).
   */
  constructor(worldSize: number, opts?: EntityOptions) {
    this.worldSize = toFixed(worldSize)
    this._radius = toFixed(opts?.radius ?? 20)
    this._x = toFixed(opts?.x ?? worldSize / 2)
    this._y = toFixed(opts?.y ?? worldSize / 2)
    this.clampPositionToBounds()
  }

  /** Fixed-point X */
  get x(): Fixed {
    return this._x
  }

  /** Fixed-point Y */
  get y(): Fixed {
    return this._y
  }

  get position(): Position {
    return { x: this._x, y: this._y }
  }

  /** Fixed-point velocity */
  get velocity(): Velocity {
    return { vx: this._vx, vy: this._vy }
  }

  /** Fixed-point unit direction */
  get direction(): Direction {
    return { dirX: this._dirX, dirY: this._dirY }
  }

  /** Fixed-point radius */
  get radius(): Fixed {
    return this._radius
  }

  /** Current speed magnitude (fixed-point). */
  get speed(): Fixed {
    return velocitySpeed(this.velocity)
  }

  /** Real-world center in px for rendering. */
  getViewPosition(): { x: number; y: number } {
    return { x: fromFixed(this._x), y: fromFixed(this._y) }
  }

  /** Real-world radius in px for rendering. */
  getViewRadius(): number {
    return fromFixed(this._radius)
  }

  /** Circle bounds as an AABB around the entity center. */
  getAABB(): AABB {
    return circleToAABB(this._x, this._y, this._radius)
  }

  /** True if fixed-point world point is inside the entity circle. */
  containsWorldPoint(worldX: Fixed, worldY: Fixed): boolean {
    return circleContainsPoint(this._x, this._y, this._radius, worldX, worldY)
  }

  /** True if this entity's AABB overlaps the given box. */
  intersectsAABB(other: AABB): boolean {
    return aabbIntersects(this.getAABB(), other)
  }

  /** True if two detection bodies' AABBs overlap. */
  intersectsEntity(other: IEntityDetection): boolean {
    return this.intersectsAABB(other.getAABB())
  }

  /**
   * Screen-space hit test. Inputs are real screen/world floats from UI.
   * Behavior matches the previous Hero.hitTest implementation exactly.
   */
  hitTest(worldX: number, worldY: number, cameraX: number, cameraY: number, zoom: number): boolean {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const hx = this._x / FIXED_SCALE
    const hy = this._y / FIXED_SCALE
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

  /** @param x Real world X */
  /** @param y Real world Y */
  setPosition(x: number, y: number): void {
    const { min, max } = this.bounds
    this._x = fixedClamp(toFixed(x), min, max)
    this._y = fixedClamp(toFixed(y), min, max)
  }

  /** @param value Real px */
  setRadius(value: number): void {
    this._radius = toFixed(Math.max(1, value))
    this.clampPositionToBounds()
  }

  protected get bounds(): { min: Fixed; max: Fixed } {
    const min = this._radius
    const max = Math.max(min, this.worldSize - this._radius)
    return { min, max }
  }

  protected clampPositionToBounds(): void {
    const { min, max } = this.bounds
    this._x = fixedClamp(this._x, min, max)
    this._y = fixedClamp(this._y, min, max)
  }
}
