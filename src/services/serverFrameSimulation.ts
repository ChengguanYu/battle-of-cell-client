import { BattleOfCell } from "../proto/bundle"
import type { BattleWorld } from "../entities/BattleWorld"
import { Hero } from "../entities/Hero"
import type { ServerFrameMessage } from "./frameBuffer"

const Op = BattleOfCell.Message.Op

function toNumber(value: unknown): number {
  if (typeof value === "number") return value
  if (typeof value === "string") return Number(value)
  if (value != null && typeof value === "object" && "toNumber" in value) {
    const long = value as { toNumber?: () => number }
    if (typeof long.toNumber === "function") return long.toNumber()
  }
  return Number(value)
}

/**
 * 应用一帧服务端帧里的实体操作：SPAWN 生成其他玩家，LAUNCH 驱动其移动。
 * 本机 Hero 的 eid 始终跳过，避免重复生成或重复执行本地操作。
 */
export function applyServerFrame(
  world: BattleWorld,
  frame: ServerFrameMessage,
): void {
  for (const operation of frame.frames) {
    const data = operation.data
    if (data == null || data.eid == null) continue

    const eid = data.eid
    if (eid === 0 || world.hero.entityId === eid) continue

    if (operation.op === Op.SPAWN) {
      if (data.position == null) continue
      if (data.position.x == null || data.position.y == null) continue
      if (world.getEntityById(eid) != null) continue

      world.spawnRemoteHero(eid, {
        x: data.position.x,
        y: data.position.y,
      })
      console.log("[ServerFrame] spawn remote hero", {
        eid,
        x: data.position.x,
        y: data.position.y,
        frameNumber: toNumber(frame.frameNumber),
      })
      continue
    }

    if (operation.op === Op.LAUNCH) {
      if (data.direction == null || data.speed == null) continue
      if (data.direction.x == null || data.direction.y == null) continue

      const entity = world.getEntityById(eid)
      if (!(entity instanceof Hero) || entity === world.hero) continue

      entity.launch(
        toNumber(data.direction.x),
        toNumber(data.direction.y),
        toNumber(data.speed),
      )
      console.log("[ServerFrame] launch remote hero eid=", eid)
    }
  }
}
