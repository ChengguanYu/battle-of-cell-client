import { EntityConfig } from "./EntityConfig"

/** Hero defaults in real-world units before fixed-point conversion. */
export class HeroConfig extends EntityConfig {
  hp = 100
  maxHp = 100
  /** 发射冷却时间 (ms) */
  launchCooldownMs = 2000
  /** Real units (px/s^2). */
  deceleration = 200
  /** Real units (px). */
  maxLaunchSpeed = 150
  /** Real units (px). */
  radius = 20
  /** Real units 0..1. */
  elasticity = 0.7
}

export type HeroConfigOptions = Partial<HeroConfig>
