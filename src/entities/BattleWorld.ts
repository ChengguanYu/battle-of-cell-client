import { Hero } from "./Hero"
import type { Entity } from "./Entity"
import { PolygonShape } from "./geometry/PolygonShape"
import type { Shape } from "./geometry/Shape"
import type { Vec2 } from "./geometry/collision"

/** 世界形状的原始顶点数据（每个元素是一个多边形的顶点环，真实 world px） */
export type WorldShapeVertices = Vec2[][]

/**
 * Battle world lifecycle and the entities owned by it.
 */
export class BattleWorld {
  readonly width: number
  readonly height: number
  private readonly _hero: Hero
  private readonly _entities: Entity[] = []
  /** 世界中的静态形状（障碍物），由进房数据初始化 */
  readonly shapes: Shape[]

  constructor(width: number, height: number, shapeVertices: WorldShapeVertices = []) {
    this.width = width
    this.height = height
    this.shapes = BattleWorld.buildShapes(shapeVertices)
    this._hero = new Hero(width, height, {
      x: width / 2,
      y: height / 2,
    })
    this.addEntity(this._hero)
  }

  /** 默认玩家的 Hero 引用（类型保留 Hero，不降级为 Entity）。 */
  get hero(): Hero {
    return this._hero
  }

  /** 仿真世界中的所有动态实体，不含静态 shapes。 */
  get entities(): readonly Entity[] {
    return this._entities
  }

  /** 向世界注册一个动态实体（不 spawn，生命周期由 create/destroy 驱动）。 */
  addEntity(entity: Entity): void {
    this._entities.push(entity)
  }

  /** 从世界移除一个动态实体（不 kill，调用方自行结束生命周期）。 */
  removeEntity(entity: Entity): void {
    const i = this._entities.indexOf(entity)
    if (i >= 0) this._entities.splice(i, 1)
  }

  /** 用现有多边形创建类把顶点环转成 PolygonShape；非法形状跳过而不抛出 */
  private static buildShapes(shapeVertices: WorldShapeVertices): Shape[] {
    const shapes: Shape[] = []
    for (const vertices of shapeVertices) {
      try {
        shapes.push(PolygonShape.fromVertices(vertices))
      } catch (err) {
        console.warn("[BattleWorld] 跳过非法形状数据:", vertices, err)
      }
    }
    return shapes
  }

  get isCreated(): boolean {
    return this._entities.some((e) => e.isSpawned)
  }

  create(): void {
    for (const e of this._entities) e.spawn()
  }

  destroy(): void {
    for (const e of this._entities) e.kill()
  }
}
