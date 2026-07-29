import { Hero } from "./Hero"
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
  readonly hero: Hero
  /** 世界中的静态形状（障碍物），由进房数据初始化 */
  readonly shapes: Shape[]

  constructor(width: number, height: number, shapeVertices: WorldShapeVertices = []) {
    this.width = width
    this.height = height
    this.shapes = BattleWorld.buildShapes(shapeVertices)
    this.hero = new Hero(width, height, {
      x: width / 2,
      y: height / 2,
    })
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
    return this.hero.isSpawned
  }

  create(): void {
    this.hero.spawn()
  }

  destroy(): void {
    this.hero.kill()
  }
}
