/** Base entity configuration. It intentionally provides no default values. */
export class EntityConfig {
  x?: number
  y?: number
  /** Real units (px). */
  radius?: number
}

export type EntityConfigOptions = Partial<EntityConfig>
