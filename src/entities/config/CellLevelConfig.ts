/**
 * 细胞等级常量表 —— 按真实生物尺寸（直径）从小到大排列。
 * 数据来源: docs/Hero.csv
 *
 * 用 const object + type 代替 enum，兼容 erasableSyntaxOnly。
 */
export const CellLevel = {
  /** 血小板 —— 直径 2~4 µm，最小 */
  Platelet: 1,
  /** 红细胞 —— 直径 6~8 µm */
  RedBloodCell: 2,
  /** 淋巴细胞 —— 直径 6~12 µm */
  Lymphocyte: 3,
  /** 中性粒细胞 —— 直径 10~12 µm */
  Neutrophil: 4,
  /** NK细胞 —— 直径 10~15 µm */
  NaturalKiller: 5,
  /** 单核细胞 —— 直径 12~20 µm */
  Monocyte: 6,
  /** 巨噬细胞 —— 直径 15~50 µm，最大 */
  Macrophage: 7,
} as const

export type CellLevel = (typeof CellLevel)[keyof typeof CellLevel]

/** 每个等级对应的生物名称（中文）。 */
export const CELL_LEVEL_NAMES: Record<CellLevel, string> = {
  [CellLevel.Platelet]: "血小板",
  [CellLevel.RedBloodCell]: "红细胞",
  [CellLevel.Lymphocyte]: "淋巴细胞",
  [CellLevel.Neutrophil]: "中性粒细胞",
  [CellLevel.NaturalKiller]: "NK细胞",
  [CellLevel.Monocyte]: "单核细胞",
  [CellLevel.Macrophage]: "巨噬细胞",
}

/** 单个等级的全部配置项。 */
export interface CellLevelEntry {
  /** 生物中文名称 */
  name: string
  /** 碰撞半径 (px)，对应 CSV「碰撞半径（px）」 */
  radius: number
  /** 速度系数，对应 CSV「速度系数」。用于将拖拽距离换算为初速度：speed = dist * speedCoefficient */
  speedCoefficient: number
  /** 减速度 (px/s²)，对应 CSV「减速度」 */
  deceleration: number
  /** 发射冷却 (ms)，对应 CSV「发射冷却（ms）」 */
  launchCooldownMs: number
  /** 弹性系数 0~1，对应 CSV「弹性」 */
  elasticity: number

  // ---- 以下字段未在 CSV 中定义，使用与 HeroConfig 一致的默认值 ----
  /** 初始/最大生命值 */
  hp: number
  maxHp: number
  /** 最大拖拽距离 (px)，超过后截断 */
  maxLaunchSpeed: number
}

/**
 * 各等级预设值 —— 封装自 docs/Hero.csv 的常量数据。
 * 所有数值均为实时单位（未定点化）。
 *
 * 用法：切换等级时直接 CELL_LEVEL_PRESETS[CellLevel.XXX] 取整组配置，
 * 然后用对应的 setter/apply 写入 hero 实例。
 */
export const CELL_LEVEL_PRESETS: Record<CellLevel, CellLevelEntry> = {
  [CellLevel.Platelet]: {
    name: "血小板",
    radius: 10,
    speedCoefficient: 15,
    deceleration: 200,
    launchCooldownMs: 1800,
    elasticity: 0.9,
    hp: 100,
    maxHp: 100,
    maxLaunchSpeed: 150,
  },
  [CellLevel.RedBloodCell]: {
    name: "红细胞",
    radius: 20,
    speedCoefficient: 13,
    deceleration: 210,
    launchCooldownMs: 2000,
    elasticity: 0.8,
    hp: 100,
    maxHp: 100,
    maxLaunchSpeed: 150,
  },
  [CellLevel.Lymphocyte]: {
    name: "淋巴细胞",
    radius: 30,
    speedCoefficient: 10,
    deceleration: 220,
    launchCooldownMs: 2500,
    elasticity: 0.7,
    hp: 100,
    maxHp: 100,
    maxLaunchSpeed: 150,
  },
  [CellLevel.Neutrophil]: {
    name: "中性粒细胞",
    radius: 40,
    speedCoefficient: 7,
    deceleration: 250,
    launchCooldownMs: 2500,
    elasticity: 0.7,
    hp: 100,
    maxHp: 100,
    maxLaunchSpeed: 150,
  },
  [CellLevel.NaturalKiller]: {
    name: "NK细胞",
    radius: 50,
    speedCoefficient: 5,
    deceleration: 260,
    launchCooldownMs: 2500,
    elasticity: 0.4,
    hp: 100,
    maxHp: 100,
    maxLaunchSpeed: 150,
  },
  [CellLevel.Monocyte]: {
    name: "单核细胞",
    radius: 60,
    speedCoefficient: 4,
    deceleration: 285,
    launchCooldownMs: 2500,
    elasticity: 0.4,
    hp: 100,
    maxHp: 100,
    maxLaunchSpeed: 150,
  },
  [CellLevel.Macrophage]: {
    name: "巨噬细胞",
    radius: 70,
    speedCoefficient: 3,
    deceleration: 300,
    launchCooldownMs: 3000,
    elasticity: 0.3,
    hp: 100,
    maxHp: 100,
    maxLaunchSpeed: 150,
  },
}
