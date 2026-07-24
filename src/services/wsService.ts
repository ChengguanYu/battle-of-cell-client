import { gameNetwork } from "../network/GameNetwork"
import type { ConnectionStatus } from "../network/GameNetwork"
import { CONFIG } from "../network/config"
import { OpCode } from "../proto/OpCode"
import { BattleOfCell } from "../proto/bundle"
import { frameBuffer } from "./frameBuffer"

// --- 状态机 ---
type WsState = "disconnected" | "connecting" | "connected" | "authenticated"

// --- 工具函数 ---

/** 将整数编码为无符号 varint */
function encodeVarint(value: number): Uint8Array {
  const bytes: number[] = []
  while (value >= 0x80) {
    bytes.push((value & 0x7F) | 0x80)
    value = Math.floor(value / 128)
  }
  bytes.push(value & 0x7F)
  return new Uint8Array(bytes)
}

/** 手动编码 SessionHeartbeatPing（uint64 timestamp = 1） */
function encodeHeartbeatPing(): Uint8Array {
  const timestamp = Date.now()
  // field 1, wire type varint → tag = (1 << 3) | 0 = 0x08
  const tag = new Uint8Array([0x08])
  const value = encodeVarint(timestamp)
  const result = new Uint8Array(1 + value.length)
  result.set(tag)
  result.set(value, 1)
  return result
}

function registerServerFrameIngest(): void {
  gameNetwork.onMessage(OpCode.ServerFrame, (body) => {
    try {
      const frame = BattleOfCell.Message.ServerFrame.decode(new Uint8Array(body))
      // 无论当前阶段如何，只要有新帧就写入缓冲区（按帧号索引）
      frameBuffer.push(frame)
      const frameObj = BattleOfCell.Message.ServerFrame.toObject(frame, {
        longs: String,
        enums: String,
        bytes: String,
        defaults: true,
        arrays: true,
        objects: true,
      })
      console.log("[ServerFrame] received", frameObj)
    } catch (err) {
      console.error("[ServerFrame] parse failed:", err)
    }
  })
}

// --- WsService ---

class WsService {
  private state: WsState = "disconnected"
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null
  private sessionLostCallbacks = new Set<() => void>()
  private statusChangeHandler: (status: ConnectionStatus) => void
  private serverFrameIngestRegistered = false

  constructor() {
    this.statusChangeHandler = (status) => {
      if (status === "disconnected") {
        const wasAuthenticated = this.state === "authenticated"
        this.state = "disconnected"
        this.stopHeartbeat()
        this.serverFrameIngestRegistered = false
        // WS 意外断开（authenticated→disconnected）触发 sessionLost
        if (wasAuthenticated) {
          this.fireSessionLost()
        }
      }
    }
    this.registerStatusCallback()
  }

  /** 注册 GameNetwork 状态回调（防止被 GameNetwork.disconnect 清掉后丢失） */
  private registerStatusCallback(): void {
    gameNetwork.removeStatusChange(this.statusChangeHandler)
    gameNetwork.onStatusChange(this.statusChangeHandler)
  }

  private ensureServerFrameIngest(): void {
    if (this.serverFrameIngestRegistered) return
    registerServerFrameIngest()
    this.serverFrameIngestRegistered = true
  }

  /** 建立 WS 连接 */
  connect(address: string): Promise<void> {
    this.state = "connecting"
    return gameNetwork.connect(address).then(() => {
      this.state = "connected"
      this.registerStatusCallback()
      // 连接成功即注册收帧，避免匹配后首帧早于 auth 通知丢失
      this.ensureServerFrameIngest()
    })
  }

  /** 通知状态机：EntryHome 认证成功 → 进入 authenticated */
  notifyAuthSuccess(): void {
    this.state = "authenticated"
    this.ensureServerFrameIngest()
  }

  /** 通知状态机：EntryHome 认证失败 */
  notifyAuthFail(): void {
    this.state = "disconnected"
  }

  /** 主动断开连接（不触发 sessionLost） */
  disconnect(): void {
    this.stopHeartbeat()
    this.state = "disconnected"
    this.serverFrameIngestRegistered = false
    gameNetwork.disconnect()
    this.registerStatusCallback()
  }

  // --- Session Lost 回调 ---

  onSessionLost(callback: () => void): void {
    this.sessionLostCallbacks.add(callback)
  }

  removeSessionLostCallback(callback: () => void): void {
    this.sessionLostCallbacks.delete(callback)
  }

  private fireSessionLost(): void {
    for (const cb of this.sessionLostCallbacks) {
      cb()
    }
  }

  // --- 状态查询 ---

  get isConnected(): boolean {
    return this.state === "connected" || this.state === "authenticated"
  }

  get isAuthenticated(): boolean {
    return this.state === "authenticated"
  }

  // --- 心跳 ---

  startHeartbeat(): void {
    this.stopHeartbeat()
    this.ensureServerFrameIngest()
    this.heartbeatTimer = setInterval(() => {
      gameNetwork.send(OpCode.SessionHeartbeatPing, encodeHeartbeatPing())
    }, CONFIG.HEARTBEAT_INTERVAL_MS)
  }

  stopHeartbeat(): void {
    if (this.heartbeatTimer !== null) {
      clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = null
    }
  }
}

export const wsService = new WsService()
