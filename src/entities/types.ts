export interface Position {
  /** Fixed-point world coordinates (scale = 1000). */
  x: number
  y: number
}

export interface Velocity {
  /** Fixed-point velocity X */
  vx: number
  /** Fixed-point velocity Y */
  vy: number
}

export interface Direction {
  /** Fixed-point unit direction X */
  dirX: number
  /** Fixed-point unit direction Y */
  dirY: number
}

/** Axis-aligned bounding box in fixed-point world space. */
export interface AABB {
  minX: number
  minY: number
  maxX: number
  maxY: number
}

/** Real-valued options shared by all world entities. */
export interface EntityOptions {
  x?: number
  y?: number
  /** Real units (px). Converted to fixed on entry. */
  radius?: number
}
