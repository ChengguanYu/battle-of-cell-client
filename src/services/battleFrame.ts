import { BattleOfCell } from "../proto/bundle"
import { sendClientFrame } from "./clientFrameSender"
import { frameBuffer } from "./frameBuffer"
import { gameSession } from "../state/gameSession"
import { battleTick } from "./battleTick"

const Op = BattleOfCell.Message.Op

export interface MoveFrameInput {
  /** fixed-point unit direction x */
  dirX: number
  /** fixed-point unit direction y */
  dirY: number
  /** fixed-point speed */
  speed: number
  /** entity id；测试阶段可先 0 */
  eid?: number
  /** 显式帧号；不传则由模块推算 */
  frameNumber?: number
}

export interface SpawnFrameInput {
  x: number
  y: number
  eid?: number
  frameNumber?: number
}

/** 本地发出的帧号游标（相对服务端最新帧推进） */
let outboundCursor: number | null = null

function resolveBaseFrameNumber(): number {
  const session = gameSession.getState()
  const candidates = [
    session.firstFrameNumber,
    frameBuffer.latest,
    frameBuffer.first,
    outboundCursor,
  ].filter((n): n is number => n != null && Number.isFinite(n))

  if (candidates.length === 0) return 0
  return Math.max(...candidates)
}

function allocateFrameNumber(explicit?: number): number {
  if (explicit != null && Number.isFinite(explicit)) {
    outboundCursor = explicit
    return explicit
  }
  const next = resolveBaseFrameNumber() + 1
  outboundCursor = next
  return next
}

/** 新对局开始时重置发出游标（匹配清缓冲后可调） */
export function resetBattleFrameCursor(startFrom?: number | null): void {
  outboundCursor = startFrom ?? null
}

/**
 * 组装并发送 MOVE 操作帧。
 * 按协议：速度与方向有值时 position 视为无效，不带 position。
 */
export function sendMoveFrame(input: MoveFrameInput): boolean {
  const frameNumber = allocateFrameNumber(input.frameNumber)
  const ok = sendClientFrame({
    frameNumber,
    frames: [
      {
        op: Op.MOVE,
        data: {
          eid: input.eid ?? 0,
          speed: input.speed,
          direction: { x: input.dirX, y: input.dirY },
        },
      },
    ],
  })

  if (ok) {
    console.log("[battleFrame] MOVE", {
      frameNumber,
      eid: input.eid ?? 0,
      speed: input.speed,
      direction: { x: input.dirX, y: input.dirY },
    })
  }
  return ok
}

/**
 * 组装并发送 SPAWN 操作帧（初始化位置）。
 */
export function sendSpawnFrame(input: SpawnFrameInput): boolean {
  const frameNumber = allocateFrameNumber(input.frameNumber)
  const ok = sendClientFrame({
    frameNumber,
    frames: [
      {
        op: Op.SPAWN,
        data: {
          eid: input.eid ?? 0,
          speed: 0,
          position: { x: Math.trunc(input.x), y: Math.trunc(input.y) },
        },
      },
    ],
  })

  if (ok) {
    console.log("[battleFrame] SPAWN", {
      frameNumber,
      eid: input.eid ?? 0,
      position: { x: input.x, y: input.y },
    })
  }
  return ok
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 测试用：随机构建一帧 client_frame 发送。
 * 帧号固定使用 battleTick 当前逻辑帧号。
 */
export function sendRandomBattleFrame(reason = "input"): boolean {
  const frameNumber = battleTick.frameNumber
  const op = Math.random() < 0.5 ? Op.SPAWN : Op.MOVE
  const dirX = randInt(-1000, 1000)
  const dirY = randInt(-1000, 1000)
  const speed = randInt(0, 150_000)
  const posX = randInt(0, 10_000)
  const posY = randInt(0, 10_000)
  const eid = randInt(1, 10_000)

  const ok = sendClientFrame({
    frameNumber,
    frames: [
      {
        op,
        data:
          op === Op.MOVE
            ? {
                eid,
                speed,
                direction: { x: dirX, y: dirY },
              }
            : {
                eid,
                speed: 0,
                position: { x: posX, y: posY },
              },
      },
    ],
  })

  if (ok) {
    console.log("[battleFrame] random send", {
      reason,
      frameNumber,
      op: op === Op.SPAWN ? "SPAWN" : "MOVE",
      eid,
      speed,
      direction: { x: dirX, y: dirY },
      position: { x: posX, y: posY },
    })
  }
  return ok
}

