# 重构文档：碰撞分派 / Entity 职责 / 实体注册表

> 讨论结论：不为 Shape 挂 Entity 基类，走"分层 + 引用"路线。
> 本文档记录三项当前值得做的结构优化，附改动理由与范围。

## 1. 碰撞分派：instanceof 分支 -> 分派表查表（已落地）

### 现状
`PolygonShape.collide` / `CircleShape.collide` 内部用 `instanceof` 判断对方类型后
分派到对应的私有判定方法：

```ts
// src/entities/geometry/PolygonShape.ts
collide(other: Shape): Collision {
  if (!aabbOverlap(this.aabb, other.aabb)) return NO_HIT
  if (other instanceof CircleShape) return this.collideWithCircle(other)
  if (other instanceof PolygonShape) return NO_HIT
  return NO_HIT
}
```

`CircleShape.collide` 同理。每新增一种形状（椭圆、胶囊体等），所有现存形状的
`collide` 方法都要追加 `instanceof` 分支——改的是别人已经稳定的文件。

### 问题
- 违反开闭原则：扩展形状类型时被迫修改存量形状类。
- 形状之间存在隐式双向依赖，加形状的改动面随形状数量线性增长。
> **已落地**：Shape 加 `type` 标签，碰撞判定集中到
> `collisionDispatch.ts` 的扁平查表。`CircleShape` / `PolygonShape` 删掉
> `instanceof` 分支与兄弟形状 import，`collide` 退化为对 dispatch 的一行委托。
> 加新形状只需新建类 + `registerCollision`，老形状一行不改。

### 目标
- 新形状只往分派表注册自己的判定函数，老形状一行不改。
- `Shape` 基类只声明"我是什么类型"，不认识任何兄弟形状。

### 方案概要
- 给 `Shape` 加一个只读 `type` 标签（枚举或字符串字面量）。
- 新增一个扁平分派表，键为有序类型对（如 `circle|polygon`），值为
  `(a, b) => Collision` 的判定函数；查表时处理对称调用。
- 子类 `collide` 委托给 `collideDispatch(this, other)`（基类 collide 保持
  abstract，避免 Shape.ts顶层 import dispatch 造成模块循环）。
- 现有 `circleVsPolygon` 等函数式判定原封不动填进表里即可，无需把判
  定逻辑塞回类里。

### 不做的事
- 不引入 Visitor / Double Dispatch。当前形状种类少，表查足够，Visitor 属于
  过度设计。

---

## 2. hitTest 从 Entity 基类剥离（已解决）

### 现状
`Entity` 基类带着屏幕拾取逻辑：

```ts
// src/entities/Entity.ts
hitTest(worldX, worldY, cameraX, cameraY, zoom): boolean {
  const cx = window.innerWidth / 2
  // ... 屏幕距离判定 ...
}
```
> **已直接删除**：全仓零调用点，hitTest 是死代码，无迁移必要。
> 将来真需要屏幕拾取时，按下方方案在交互层按需新建即可。

### 问题
- camera、zoom、`window.innerWidth` 都是渲染/交互层概念，跟仿真状态无关。
- 一个不上屏的纯逻辑实体（将来可能出现）也会被迫继承这段代码。
- Entity 基类本应是纯世界空间的仿真核心，却耦合了 UI 输入处理。

### 目标
- `Entity` 基类只管世界空间：position / velocity / bounds / 世界空间碰撞查询。
- 屏幕拾取归渲染/交互层负责。

### 方案概要
- 删掉 `Entity.hitTest`。
- 新增交互层的 `pickEntityAtScreenPoint(entities, camera, screenPoint)`，
  内部把屏幕点反推回世界点，再走 `IEntityDetection` / `getAABB` 做世界空间命中。
- 现有调用点（渲染层、拖拽起点判定等）改调这个工具函数。
- 纯重定位，不改判定算法本身。
> 注：以上方案为未实现预案。当前全仓无 hitTest 调用点，故已直接删除，
> 未新建交互层工具函数，等真有拾取需求再建。

### 不做的事
- 不给 Shape 也加屏幕拾取——拾取是交互层概念，不属于几何层。

---

## 3. BattleWorld 引入 entities 注册表（第一步已落地）

### 现状
`BattleWorld` 直接硬挂 `hero: Hero`，世界形状走 `shapes: Shape[]`，
两条路径互不相关：

```ts
// src/entities/BattleWorld.ts
readonly hero: Hero
  readonly shapes: Shape[]
```
> **第一步已落地**：hero 已进入 `entities: Entity[]`，
> `create`/`destroy` 改为遍历数组。`world.hero` getter 保留 `Hero` 类型，
> 外部控制路径（useHero 的 hero.update/hero.launch）零改动。

### 问题
- 加第二个会动的实体（动障碍 / 子弹 / food）就得改 `BattleWorld` 签名。
- tick / 碰撞查询没有统一入口，扩展时每个新实体都要在 World 里开新字段。

### 目标
- 仿真 tick 走 entities 列表，碰撞查询走 shapes 列表，路径清晰。
- 将来动态实体直接 `push` 进数组，不动 World 结构。

### 方案概要
- `BattleWorld` 新增 `entities: Entity[]`，hero 进数组。
- 保留 `shapes: Shape[]` 不变，静态障碍继续走这条；
  hero 碰撞查询继续对 shapes 跑，不混入 entities 互相碰撞逻辑。
- tick 遍历 `entities` 调 `update`，碰撞遍历 `shapes` 做候选筛选。
  **暂缓**：当前唯一动态实体是 hero，rAF 在 useHero 里直接 `hero.update(dt)`
  跑得好好的，硬提一层 world.update 纯属为单实体加间接，可能动到客户端预测手感。
  等出现第二个动态体或服务端帧需要对账多个实体时再动。
- 暂不抽 `IWorldObject` 统一接口——只有静态 shapes + 单个 hero，抽接口
  属于过度设计；等出现多类可遍历/可渲染对象再补。

### 与"Shape 挂 Entity"的边界
- 静态 shapes 仍是纯几何对象，不进 `entities`。
- 将来障碍要动了，加 `ObstacleEntity extends Entity`，内部 owns 一个
  `PolygonShape` 并 `sync`，复刻 Hero owns CircleShape 的模式。
- 这条改动给"未来动态实体"留口子，但不强行统一静态几何体。

---

## 暂不做（等规模到再说）

- **宽相位空间索引**（uniform grid / 四叉树）：当前全量扫描十几个障碍无压力，
  障碍数百或出现动态互相碰撞时再上。
- **fixed / float 双真值源统一**：Entity 定点、Shape 浮点靠 `syncShape` 桥接，
  小规模能跑；碰撞逻辑复杂到桥接易漏时再选边（全定点物理 或 物理浮点+快照保险）。
- **`Shape.aabb` 缓存**：静态多边形顶点不变，现算不贵但顺手缓存零成本，归入
  微优化。
- **ECS 化**：当前 OOP 规模小且跑通，强行拆组件是为架构而架构。

---

## 改动范围预估

| 项 | 触及文件 | 量级 |
|----|----------|------|
| 分派表 | `Shape.ts` / `PolygonShape.ts` / `CircleShape.ts` + 新增 `collisionDispatch.ts` / `collision.ts`（已完成） | — |
| hitTest 剥离 | `Entity.ts` + `detection.ts`（已完成，直接删除） | — |
| entities 注册表 | `BattleWorld.ts`（第一步已完成） | 小 |

三条改动互相独立，可分别提交。
