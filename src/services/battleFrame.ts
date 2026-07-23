import { BattleOfCell } from "../proto/bundle"
import { sendClientFrame } from "./clientFrameSender"
import { frameBuffer } from "./frameBuffer"
import { gameSession } from "../state/gameSession"
import { battleTick } from "./battleTick"
import { CONFIG } from "../network/config"

const Op = BattleOfCell.Message.Op

export interface LaunchFrameInput {
  /** fixed-point unit direction x */
  dirX: number
  /** fixed-point unit direction y */
  dirY: number
  /** fixed-point speed */
  speed: number
  /** entity id；测试阶段可先 0 */
  eid?: number
  /**
   * 显式帧号；不传则按 当前 tick + SEND_DELAY_FRAMES 计算。
   * 玩家操作后立刻发送时，用当前 tick 决定归属帧，再叠加发送延迟 n。
   */
  frameNumber?: number
}

export interface SpawnFrameInput {
  x: number
  y: number
  eid?: number
  frameNumber?: number
}

/** 本地发出的帧号游标（仅作兜底；正式发帧优先用 battleTick.frameNumber + n） */
let outboundCursor: number | null = null

/** 发送延迟帧数 n：frameNumber = tick + n。当前默认 0。 */
function sendDelayFrames(): number {
  const n = CONFIG.SEND_DELAY_FRAMES
  return Number.isFinite(n) && n > 0 ? Math.trunc(n) : 0
}

function resolveBaseFrameNumber(): number {
  const session = gameSession.getState()
  const candidates = [
    battleTick.frameNumber,
    session.firstFrameNumber,
    frameBuffer.latest,
    frameBuffer.first,
    outboundCursor,
  ].filter((n): n is number => n != null && Number.isFinite(n))

  if (candidates.length === 0) return 0
  return Math.max(...candidates)
}

/**
 * 解析发送帧号：
 * - 显式传入优先
 * - 否则：当前逻辑 tick + 发送延迟 n（SEND_DELAY_FRAMES）
 * - tick 未启动时再回退到缓冲/会话基准，同样叠加 n
 */
function resolveSendFrameNumber(explicit?: number): number {
  if (explicit != null && Number.isFinite(explicit)) {
    const value = Math.trunc(explicit)
    outboundCursor = value
    return value
  }

  const n = sendDelayFrames()
  const tick = battleTick.isRunning ? battleTick.frameNumber : resolveBaseFrameNumber()
  const frameNumber = tick + n
  outboundCursor = frameNumber
  return frameNumber
}

/** 新对局开始时重置发出游标（匹配清缓冲后可调） */
export function resetBattleFrameCursor(startFrom?: number | null): void {
  outboundCursor = startFrom ?? null
}

/**
 * 组装并发送 LAUNCH 操作帧。
 * 内容应为玩家当前真实发射状态（定点方向 + 定点速度）。
 * 按协议：速度与方向有值时 position 视为无效，不带 position。
 * 帧号默认 = 当前 battleTick.frameNumber + SEND_DELAY_FRAMES。
 */
export function sendLaunchFrame(input: LaunchFrameInput): boolean {
  const frameNumber = resolveSendFrameNumber(input.frameNumber)
  const ok = sendClientFrame({
    frameNumber,
    frames: [
      {
        op: Op.LAUNCH,
        data: {
          eid: input.eid ?? 0,
          speed: input.speed,
          direction: { x: input.dirX, y: input.dirY },
        },
      },
    ],
  })

  if (ok) {
    console.log("[battleFrame] LAUNCH", {
      frameNumber,
      tick: battleTick.frameNumber,
      sendDelayFrames: sendDelayFrames(),
      eid: input.eid ?? 0,
      speed: input.speed,
      direction: { x: input.dirX, y: input.dirY },
    })
  }
  return ok
}

/**
 * @deprecated 使用 sendLaunchFrame。保留别名避免旧调用瞬时断掉。
 */
export function sendMoveFrame(input: LaunchFrameInput): boolean {
  return sendLaunchFrame(input)
}

/**
 * 组装并发送 SPAWN 操作帧（初始化位置）。
 */
export function sendSpawnFrame(input: SpawnFrameInput): boolean {
  const frameNumber = resolveSendFrameNumber(input.frameNumber)
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
      tick: battleTick.frameNumber,
      sendDelayFrames: sendDelayFrames(),
      eid: input.eid ?? 0,
      position: { x: input.x, y: input.y },
    })
  }
  return ok
}