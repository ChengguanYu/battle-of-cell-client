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
  /** id ↔ entity 注册表，世界层面统一管理 entity_id 绑定 */
  private readonly _entityById = new Map<number, Entity>()
 /** 世界中的静态形状（障碍物），由进房数据初始化 */
 readonly shapes: Shape[]

  constructor(
    width: number,
    height: number,
    shapeVertices: WorldShapeVertices = [],
    spawnPosition?: { x: number; y: number },
    heroEntityId?: number | null,
  ) {
  this.width = width
  this.height = height
  this.shapes = BattleWorld.buildShapes(shapeVertices)
  this._hero = new Hero(width, height, {
    x: spawnPosition?.x ?? width / 2,
    y: spawnPosition?.y ?? height / 2,
  })
  this.addEntity(this._hero)
    if (heroEntityId != null) this.bindHeroEntityId(heroEntityId)
}

  /** 默认玩家的 Hero 引用（类型保留 Hero，不降级为 Entity）。 */
  get hero(): Hero {
    return this._hero
  }

  /** 当前已生成的其他玩家 Hero，不含本机受控 Hero。 */
  get remoteHeroes(): readonly Hero[] {
    return this._entities.filter(
      (entity): entity is Hero =>
        entity instanceof Hero && entity !== this._hero && entity.isSpawned,
    )
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

  /** 设置 Hero 的 entity_id 并登记到世界注册表（进房绑定）。 */
  bindHeroEntityId(id: number): void {
    this._hero.setEntityId(id)
    this._entityById.set(id, this._hero)
  }

  /** 任意 entity 的绑定写入注册表。同一 id 旧引用会被覆盖。 */
  bindEntityId(entity: Entity, id: number): void {
    entity.setEntityId(id)
    this._entityById.set(id, entity)
  }

  /** 按服务端 eid 生成并生成一个不受本机控制的其他玩家 Hero。 */
  spawnRemoteHero(eid: number, position: { x: number; y: number }): Hero | null {
    if (this.getEntityById(eid) != null) return null

    const hero = new Hero(this.width, this.height, {
      x: position.x,
      y: position.y,
    })
    this.addEntity(hero)
    this.bindEntityId(hero, eid)
    hero.spawn()
    return hero
  }

  /** 按 id 查注册表，未绑定返回 undefined。 */
  getEntityById(id: number): Entity | undefined {
    return this._entityById.get(id)
  }

  /** 解绑：按 entity 当前 id 移除注册表项。 */
  unbindEntity(entity: Entity): void {
    const id = entity.entityId
    if (id != null) this._entityById.delete(id)
    entity.setEntityId(null)
  }

  /** 本局玩家 Hero 的 entity_id，未绑定为 null。 */
  get heroEntityId(): number | null {
    return this._hero.entityId
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
