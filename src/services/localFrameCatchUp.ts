import { BattleOfCell } from "../proto/bundle"
import type { ClientFramePayload } from "./clientFrameSender"
import type { BattleWorld } from "../entities/BattleWorld"
import type { ObstacleField } from "../entities/ObstacleField"
import type { Hero } from "../entities/Hero"
import { frameBuffer } from "./frameBuffer"
import { stepHero } from "./heroSimulation"
import { CONFIG } from "../network/config"
import debugFramesData from "../config/debugFrames.json"

const Op = BattleOfCell.Message.Op

export interface LocalFrameOperation {
  op: string | number
  data?: {
    eid?: number
    speed?: number
    direction?: { x: number; y: number }
    position?: { x: number; y: number }
  }
}

export interface LocalFrameCatchUpFrame {
  frameNumber: number
  frames?: LocalFrameOperation[]
}

export interface LocalFrameCatchUpConfig {
  /** 追帧起点帧号；默认 0。 */
  startFrame?: number
  /** 从 startFrame 开始总共追帧的帧数，至少覆盖到帧序列末尾。 */
  catchUpFrames?: number
  frameSequence?: LocalFrameCatchUpFrame[]
  /** @deprecated 单帧输入，优先使用 frameSequence */
  frameNumber?: number
  /** @deprecated 单帧输入，优先使用 frameSequence */
  frames?: LocalFrameOperation[]
}

export interface LocalFrameCatchUpResult {
  /** 追帧完成后作为 battleTick 起点的最新帧号 */
  latestFrameNumber: number
  appliedOpCount: number
  simulatedFrameCount: number
}

function normalizeFrameNumber(value: unknown): number {
  const n = Number(value)
  return Number.isFinite(n) && n >= 0 ? Math.trunc(n) : 0
}

function normalizeOp(op: LocalFrameOperation["op"]): number {
  if (typeof op === "number") return op
  return op === "LAUNCH" ? Op.LAUNCH : Op.SPAWN
}

function resolveFrameSequence(
  config: LocalFrameCatchUpConfig,
): LocalFrameCatchUpFrame[] {
  if (config.frameSequence && config.frameSequence.length > 0) {
    return [...config.frameSequence].sort(
      (a, b) =>
        normalizeFrameNumber(a.frameNumber) -
        normalizeFrameNumber(b.frameNumber),
    )
  }

  const frameNumber = normalizeFrameNumber(config.frameNumber)
  const operations = config.frames ?? []
  return operations.length > 0 ? [{ frameNumber, frames: operations }] : []
}

function toProtoFrames(operations: LocalFrameOperation[]) {
  return operations.map((op) => ({
    op: normalizeOp(op.op),
    data: op.data,
  }))
}

/** 服务器关闭时的本地“发送”：只编码、不入网，随后由追帧直接计算。 */
function sendLocalClientFrame(payload: ClientFramePayload): void {
  const body = BattleOfCell.Message.ClientFrame.encode(
    BattleOfCell.Message.ClientFrame.create(payload),
  ).finish()

  console.log(
    "[LocalFrameCatchUp] send client_frame frameNumber=",
    payload.frameNumber,
    "ops=",
    payload.frames?.length ?? 0,
    "bodyBytes=",
    body.length,
  )
}

function applyOperation(hero: Hero, operation: LocalFrameOperation): boolean {
  const data = operation.data
  if (!data) return false

  const eid = data.eid ?? 0
  if (hero.entityId != null && eid !== 0 && eid !== hero.entityId) {
    return false
  }

  const op = normalizeOp(operation.op)
  if (op === Op.LAUNCH) {
    if (data.direction == null || data.speed == null) return false
    return hero.launch(data.direction.x, data.direction.y, data.speed)
  }

  if (op === Op.SPAWN) {
    if (data.position == null) return false
    hero.setPosition(data.position.x, data.position.y)
    return true
  }

  return false
}

/**
 * 本地追帧：把配置里的客户端操作按协议编码“发送”，同时作为服务端帧写入
 * frameBuffer，并在 battleTick 启动前直接模拟到最新帧。结果最终通过
 * Hero 的事件通知同步到 React 展示。
 */
export function runLocalFrameCatchUp(
  world: BattleWorld,
  obstacleField: ObstacleField,
  config: LocalFrameCatchUpConfig = debugFramesData,
): LocalFrameCatchUpResult {
  const frameSequence = resolveFrameSequence(config)
  const startFrame = normalizeFrameNumber(config.startFrame)
  const catchUpFrames = normalizeFrameNumber(config.catchUpFrames)
  const sequenceEnd = frameSequence.reduce(
    (max, frame) =>
      Math.max(max, normalizeFrameNumber(frame.frameNumber)),
    startFrame,
  )
  const latestFrameNumber = Math.max(
    startFrame + catchUpFrames,
    sequenceEnd,
  )

  // 本地追帧必须基于确定的帧窗口，清掉上一次调试/失败流水线残留。
  frameBuffer.clear()

  const hero = world.hero
  let appliedOpCount = 0

  // 按帧号顺序“发送”序列中的每一帧客户端操作。
  for (const frame of frameSequence) {
    const operations = frame.frames ?? []
    if (operations.length === 0) continue
    const protoFrames = toProtoFrames(operations)
    sendLocalClientFrame({
      frameNumber: normalizeFrameNumber(frame.frameNumber),
      frames: protoFrames,
    })
  }

  const applyFrameOps = (targetFrameNumber: number): LocalFrameOperation[] => {
    const operations = frameSequence
      .filter(
        (frame) => normalizeFrameNumber(frame.frameNumber) === targetFrameNumber,
      )
      .flatMap((frame) => frame.frames ?? [])
    for (const operation of operations) {
      if (applyOperation(hero, operation)) {
        appliedOpCount += 1
      }
    }
    return operations
  }

  const startOps = applyFrameOps(startFrame)
  frameBuffer.push(
    BattleOfCell.Message.ServerFrame.create({
      frameNumber: startFrame,
      frames: toProtoFrames(startOps),
    }),
  )

  // 追帧按真实 rAF 节奏推进：每次 1/60s，和 useHero 的实时模拟结果保持一致。
  const tickSeconds = 1 / Math.max(1, CONFIG.TICK)
  const RAF_STEP = 1 / 60
  const frameSteps = Math.max(1, Math.round(tickSeconds / RAF_STEP))
  for (
    let currentFrame = startFrame + 1;
    currentFrame <= latestFrameNumber;
    currentFrame += 1
  ) {
    const currentOps = applyFrameOps(currentFrame)
    for (let step = 0; step < frameSteps; step += 1) {
      stepHero(hero, RAF_STEP, () => {
        obstacleField.resolve(hero)
      })
    }
    frameBuffer.push(
      BattleOfCell.Message.ServerFrame.create({
        frameNumber: currentFrame,
        frames: toProtoFrames(currentOps),
      }),
    )
  }

  console.log("[LocalFrameCatchUp] done", {
    latestFrameNumber,
    appliedOpCount,
    simulatedFrameCount: Math.max(0, latestFrameNumber - startFrame),
    sequenceFrameCount: frameSequence.length,
    heroX: hero.x,
    heroY: hero.y,
  })

  return {
    latestFrameNumber,
    appliedOpCount,
    simulatedFrameCount: Math.max(0, latestFrameNumber - startFrame),
  }
}
