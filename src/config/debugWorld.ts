import debugWorldData from "./debugWorld.json"

/**
 * Default world configuration used in debug mode when no server session is
 * available. Structure mirrors the EntryRoom protocol (xSize / ySize /
 * shapes with vertices in real world px). Vite statically imports the JSON
 * at build time, so no runtime fetch is needed.
 */
export const debugWorld = debugWorldData.world
export type DebugWorldData = typeof debugWorldData
export const debugWorldSize = {
  width: debugWorldData.world.xSize,
  height: debugWorldData.world.ySize,
}
export const debugWorldShapes = debugWorldData.world.shapes.map((s) => ({
  vertices: s.vertices.map((v) => ({ x: v.x, y: v.y })),
}))
