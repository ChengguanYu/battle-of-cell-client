import { CONFIG } from "../network/config"
import { frameBuffer } from "./frameBuffer"
import { gameSession } from "../state/gameSession"

type TickListener = (frameNumber: number) => void

/**
 * 战斗逻辑 tick：
 * - start 时以当前缓冲最新服务端帧号为起点（无则回退 session.firstFrameNumber / 0）
 * - 每 1000/TICK ms 将内部 counter +1，作为本地逻辑帧号
 */
class BattleTick {
  private counter = 0
  private startFrame = 0
  private timer: ReturnType<typeof setInterval> | null = null
  private listeners = new Set<TickListener>()

  /** 当前逻辑帧号 */
  get frameNumber(): number {
    return this.counter
  }

  /** start 时锁定的服务端最新帧 */
  get originFrameNumber(): number {
    return this.startFrame
  }

  get isRunning(): boolean {
    return this.timer !== null
  }

  /** 间隔 ms = 1000 / TICK */
  get intervalMs(): number {
    const tick = CONFIG.TICK > 0 ? CONFIG.TICK : 20
    return 1000 / tick
  }

  get tickRate(): number {
    return CONFIG.TICK > 0 ? CONFIG.TICK : 20
  }

  /**
   * 解析起始帧：优先 frameBuffer.latest，其次 session.firstFrameNumber，最后 0。
   */
  resolveStartFrame(): number {
    if (frameBuffer.latest != null) return frameBuffer.latest
    const session = gameSession.getState()
    if (session.firstFrameNumber != null) return session.firstFrameNumber
    return 0
  }

  /**
   * 记住当前最新服务端帧并启动计时器。
   * 若已在跑则先 stop 再 start。
   */
  start(startFrame?: number): number {
    this.stop()

    this.startFrame =
      startFrame != null && Number.isFinite(startFrame)
        ? startFrame
        : this.resolveStartFrame()
    this.counter = this.startFrame

    const interval = this.intervalMs
    this.timer = setInterval(() => {
      this.counter += 1
      for (const cb of this.listeners) {
        cb(this.counter)
      }
    }, interval)

    console.log(
      "[BattleTick] start origin=",
      this.startFrame,
      "intervalMs=",
      interval,
      "tick=",
      this.tickRate,
    )
    return this.counter
  }

  stop(): void {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
      console.log("[BattleTick] stop at frame=", this.counter)
    }
  }

  onTick(listener: TickListener): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }
}

export const battleTick = new BattleTick()
