import type { Position, Velocity, Direction, AABB } from "./types"
import type { IEntityView } from "./view"
import type { IEntityDetection } from "./detection"
import { EntityConfig } from "./config/EntityConfig"
import {
  aabbIntersects,
  circleContainsPoint,
  circleToAABB,
} from "./detection"
import { velocitySpeed } from "./entityUtils"
import {
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
export abstract class Entity<TConfig extends EntityConfig = EntityConfig>
 implements IEntityView, IEntityDetection {
 private _isSpawned = false
  /** 服务端分配的实体 ID，未绑定为 null。 */
  private _entityId: number | null = null
  protected _x: Fixed
  protected _y: Fixed
  protected _vx: Fixed = 0
  protected _vy: Fixed = 0
  protected _dirX: Fixed = 0
  protected _dirY: Fixed = 0
  protected _radius: Fixed
  protected worldSizeX: Fixed
  protected worldSizeY: Fixed
  protected readonly config: TConfig

  /**
   * @param worldSizeX Real world width in px (converted to fixed).
   * @param worldSizeY Real world height in px (converted to fixed).
   * @param config Real-valued entity configuration (converted to fixed).
   */
  constructor(worldSizeX: number, worldSizeY: number, config: TConfig) {
    this.config = config
    this.worldSizeX = toFixed(worldSizeX)
    this.worldSizeY = toFixed(worldSizeY)
    this._radius = toFixed(config.radius ?? 0)
    this._x = toFixed(config.x ?? worldSizeX / 2)
    this._y = toFixed(config.y ?? worldSizeY / 2)
    this.clampPositionToBounds()
  }

  /** Whether this entity currently belongs to the world lifecycle. */
 get isSpawned(): boolean {
   return this._isSpawned
 }

  /** 服务端分配的实体 ID，未绑定为 null。 */
  get entityId(): number | null {
    return this._entityId
  }

  /** 绑定/解绑服务端分配的实体 ID（由 BattleWorld 统一管理）。 */
  setEntityId(id: number | null): void {
    this._entityId = id
  }

  /**
   * Add this entity to the world lifecycle.
   * Concrete entities customize generation through onSpawn().
   */
  spawn(): void {
    if (this._isSpawned) return

    this._isSpawned = true
    try {
      this.onSpawn()
    } catch (error) {
      this._isSpawned = false
      throw error
    }
  }

  /**
   * Remove this entity from the world lifecycle.
   * Actual world-detachment behavior is intentionally left to onKill().
   */
  kill(): void {
    if (!this._isSpawned) return

    this.onKill()
    this._isSpawned = false
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

  /** @param x Real world X */
  /** @param y Real world Y */
  setPosition(x: number, y: number): void {
    const { minX, maxX, minY, maxY } = this.bounds
    this._x = fixedClamp(toFixed(x), minX, maxX)
    this._y = fixedClamp(toFixed(y), minY, maxY)
  }

  /** @param value Real px */
  setRadius(value: number): void {
    this._radius = toFixed(Math.max(1, value))
    this.clampPositionToBounds()
  }

  protected get bounds(): { minX: Fixed; maxX: Fixed; minY: Fixed; maxY: Fixed } {
    const minX = this._radius
    const maxX = Math.max(minX, this.worldSizeX - this._radius)
    const minY = this._radius
    const maxY = Math.max(minY, this.worldSizeY - this._radius)
    return { minX, maxX, minY, maxY }
  }

  protected clampPositionToBounds(): void {
    const { minX, maxX, minY, maxY } = this.bounds
    this._x = fixedClamp(this._x, minX, maxX)
    this._y = fixedClamp(this._y, minY, maxY)
  }

  /** Entity-specific generation hook invoked by spawn(). */
  protected abstract onSpawn(): void

  /** Entity-specific removal hook. Reserved for future world detachment. */
  protected onKill(): void {}
}
