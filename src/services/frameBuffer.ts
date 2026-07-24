import { BattleOfCell } from "../proto/bundle"

export type ServerFrameMessage = BattleOfCell.Message.ServerFrame

/** 默认保留的最近帧数（滑动窗口） */
export const FRAME_BUFFER_CAPACITY = 100

function toFrameNumber(value: unknown): number {
  if (value == null) return NaN
  if (typeof value === "number") return value
  if (typeof value === "string") return Number(value)
  if (typeof value === "object" && value !== null && "toNumber" in value) {
    const maybe = value as { toNumber?: () => number }
    if (typeof maybe.toNumber === "function") {
      return maybe.toNumber()
    }
  }
  return Number(value)
}

type FrameListener = (frameNumber: number, frame: ServerFrameMessage) => void

/**
 * 服务端帧缓冲区：按 frameNumber 索引。
 * 与游戏阶段无关，只要收到新帧就写入。
 * 容量约 FRAME_BUFFER_CAPACITY 帧，超出时从最旧帧开始丢弃。
 */
class FrameBuffer {
  private frames = new Map<number, ServerFrameMessage>()
  private firstFrameNumber: number | null = null
  private latestFrameNumber: number | null = null
  private capacity: number
  private listeners = new Set<FrameListener>()
  private firstFrameWaiters = new Set<{
    resolve: (frameNumber: number) => void
    reject: (err: Error) => void
    timer: ReturnType<typeof setTimeout> | null
  }>()

  constructor(capacity = FRAME_BUFFER_CAPACITY) {
    this.capacity = Math.max(1, capacity)
  }

  /** 写入一帧；同帧号覆盖。始终可调用，不依赖全局状态。 */
  push(frame: ServerFrameMessage): number | null {
    const frameNumber = toFrameNumber(frame.frameNumber)
    if (!Number.isFinite(frameNumber)) {
      console.warn("[FrameBuffer] invalid frameNumber:", frame.frameNumber)
      return null
    }

    const isNew = !this.frames.has(frameNumber)
    this.frames.set(frameNumber, frame)

    if (this.firstFrameNumber === null || frameNumber < this.firstFrameNumber) {
      this.firstFrameNumber = frameNumber
    }
    if (this.latestFrameNumber === null || frameNumber > this.latestFrameNumber) {
      this.latestFrameNumber = frameNumber
    }

    this.evictOverflow()

    for (const cb of this.listeners) {
      cb(frameNumber, frame)
    }

    if (isNew || this.firstFrameWaiters.size > 0) {
      this.resolveFirstFrameWaiters()
    }

    return frameNumber
  }

  get(frameNumber: number): ServerFrameMessage | undefined {
    return this.frames.get(frameNumber)
  }

  get size(): number {
    return this.frames.size
  }

  get capacityLimit(): number {
    return this.capacity
  }

  get first(): number | null {
    return this.firstFrameNumber
  }

  get latest(): number | null {
    return this.latestFrameNumber
  }

  has(frameNumber: number): boolean {
    return this.frames.has(frameNumber)
  }

  onFrame(listener: FrameListener): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  /**
   * 等待首帧写入。若缓冲区内已有帧，立即 resolve 当前最小帧号。
   */
  waitForFirstFrame(timeoutMs = 30000): Promise<number> {
    if (this.firstFrameNumber !== null) {
      return Promise.resolve(this.firstFrameNumber)
    }

    return new Promise<number>((resolve, reject) => {
      const waiter: {
        resolve: (frameNumber: number) => void
        reject: (err: Error) => void
        timer: ReturnType<typeof setTimeout> | null
      } = {
        resolve,
        reject,
        timer: null,
      }

      waiter.timer = setTimeout(() => {
        this.firstFrameWaiters.delete(waiter)
        reject(new Error("等待服务端首帧超时"))
      }, timeoutMs)

      this.firstFrameWaiters.add(waiter)
    })
  }

  clear(): void {
    this.frames.clear()
    this.firstFrameNumber = null
    this.latestFrameNumber = null

    for (const waiter of this.firstFrameWaiters) {
      if (waiter.timer !== null) clearTimeout(waiter.timer)
      waiter.reject(new Error("帧缓冲区已清空"))
    }
    this.firstFrameWaiters.clear()
  }

  /** 超出容量时丢弃最旧帧，优先保留较新帧 */
  private evictOverflow(): void {
    if (this.frames.size <= this.capacity) return
    if (this.latestFrameNumber === null) return

    // 以最新帧为右边界，只保留 [latest - capacity + 1, latest]
    const minKeep = this.latestFrameNumber - this.capacity + 1
    for (const key of [...this.frames.keys()]) {
      if (key < minKeep) {
        this.frames.delete(key)
      }
    }

    // 若中间有空洞导致仍超容量，按帧号从小到大再裁
    if (this.frames.size > this.capacity) {
      const sorted = [...this.frames.keys()].sort((a, b) => a - b)
      const dropCount = sorted.length - this.capacity
      for (let i = 0; i < dropCount; i++) {
        this.frames.delete(sorted[i]!)
      }
    }

    this.recomputeBounds()
  }

  private recomputeBounds(): void {
    if (this.frames.size === 0) {
      this.firstFrameNumber = null
      this.latestFrameNumber = null
      return
    }
    let min = Infinity
    let max = -Infinity
    for (const key of this.frames.keys()) {
      if (key < min) min = key
      if (key > max) max = key
    }
    this.firstFrameNumber = min
    this.latestFrameNumber = max
  }

  private resolveFirstFrameWaiters(): void {
    if (this.firstFrameNumber === null) return
    const n = this.firstFrameNumber
    for (const waiter of this.firstFrameWaiters) {
      if (waiter.timer !== null) clearTimeout(waiter.timer)
      waiter.resolve(n)
    }
    this.firstFrameWaiters.clear()
  }
}

export const frameBuffer = new FrameBuffer(FRAME_BUFFER_CAPACITY)
