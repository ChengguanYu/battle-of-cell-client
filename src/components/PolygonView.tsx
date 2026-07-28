import type { Vec2 } from "../../entities/geometry/collision"

export interface PolygonViewProps {
  /** World-space vertices (closed ring; last != first). */
  points: Vec2[]
  fill?: string
  stroke?: string
  strokeWidth?: number
}

/**
 * Single SVG polygon in world coordinates. Rendered inside a transformed
 * GameWorld container, so vertex values are plain world px.
 */
export function PolygonView({
  points,
  fill = "rgba(140, 220, 140, 0.30)",
  stroke = "rgba(160, 255, 160, 0.9)",
  strokeWidth = 3,
}: PolygonViewProps) {
  const pts = points.map((p) => `${p.x},${p.y}`).join(" ")
  return <polygon points={pts} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
}
