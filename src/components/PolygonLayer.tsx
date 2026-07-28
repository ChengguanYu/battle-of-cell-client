import type { Shape } from "../entities/geometry/Shape"
import { PolygonShape } from "../entities/geometry/PolygonShape"
import { PolygonView } from "./PolygonView"

export interface PolygonLayerProps {
  shapes: Shape[]
  width: number
  height: number
}

/**
 * One SVG canvas covering the whole world, sized in world px. Parent GameWorld
 * applies the camera transform; polygons are z-ordered below the hero when
 * this layer is rendered before HeroView. Only polygonal obstacle shapes are
 * drawn here; circle shapes (e.g. the hero) are rendered by their own view.
 */
export function PolygonLayer({ shapes, width, height }: PolygonLayerProps) {
  return (
    <svg
      width={width}
      height={height}
      className="absolute left-0 top-0 pointer-events-none"
      style={{ overflow: "visible" }}
    >
      {shapes.map((s, i) =>
        s instanceof PolygonShape ? (
          <PolygonView key={i} points={s.polygon.worldVertices()} />
        ) : null,
      )}
    </svg>
  )
}