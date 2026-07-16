import { HEAD_LENGTH, packPacket, unpackPacket } from "./Packet.ts"

export type ConnectionStatus = "disconnected" | "connecting" | "connected"

type MessageHandler = (body: ArrayBuffer, rpcId: number) => void
type StatusCallback = (status: ConnectionStatus) => void

interface PendingRequest {
  resolve: (body: ArrayBuffer) => void
  reject: (reason: Error) => void
  timer: ReturnType<typeof setTimeout>
  respOpcode: number
}

class GameNetwork {
  private ws: WebSocket | null = null
  private status: ConnectionStatus = "disconnected"
  private messageHandlers = new Map<number, MessageHandler>()
  private statusCallbacks = new Set<StatusCallback>()
  private pendingRequests = new Map<number, PendingRequest>()
  private nextRpcId = 1

  private setStatus(newStatus: ConnectionStatus): void {
    this.status = newStatus
    for (const cb of this.statusCallbacks) {
      cb(newStatus)
    }
  }

  get isConnected(): boolean {
    return this.status === "connected"
  }

  onStatusChange(callback: StatusCallback): void {
    this.statusCallbacks.add(callback)
  }

  removeStatusChange(callback: StatusCallback): void {
    this.statusCallbacks.delete(callback)
  }

  connect(address: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.ws) {
        this.disconnect()
      }

      this.setStatus("connecting")

      try {
        this.ws = new WebSocket(address)
      } catch (err) {
        this.setStatus("disconnected")
        reject(err)
        return
      }

      this.ws.binaryType = "arraybuffer"

      this.ws.onopen = () => {
        this.setStatus("connected")
        console.log(`[GameNetwork] connected to ${address}`)
        resolve()
      }

      this.ws.onclose = () => {
        console.log("[GameNetwork] connection closed")
        this.setStatus("disconnected")
        this.ws = null
        this.rejectAllPending(new Error("WebSocket connection closed"))
      }

      this.ws.onerror = () => {
        reject(new Error("WebSocket connection error"))
      }

      this.ws.onmessage = (event: MessageEvent) => {
        const raw = event.data as ArrayBuffer
        if (!raw || raw.byteLength < HEAD_LENGTH) {
          return
        }
        const { opcode, rpcId, body } = unpackPacket(raw)

        console.log(
          `[GameNetwork] receive opcode=${opcode} rpcId=${rpcId} bodyLength=${body.byteLength}`,
        )

        // 1. 按 rpcId 匹配（服务端回显时）
        const pending = this.pendingRequests.get(rpcId)
        if (pending) {
          this.pendingRequests.delete(rpcId)
          clearTimeout(pending.timer)
          pending.resolve(body)
          return
        }

        // 2. 按 opcode 匹配待响应的请求
        for (const [id, p] of this.pendingRequests) {
          if (p.respOpcode === opcode) {
            this.pendingRequests.delete(id)
            clearTimeout(p.timer)
            p.resolve(body)
            return
          }
        }

        // 3. 走注册的 handler
        const handler = this.messageHandlers.get(opcode)
        if (handler) {
          handler(body, rpcId)
        }
      }
    })
  }

  send(opcode: number, body: Uint8Array): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.warn(`GameNetwork: cannot send, not connected (opcode=${opcode})`)
      return
    }
    const buffer = packPacket(opcode, body)
    this.ws.send(buffer)
  }

  /**
   * 发送请求并等待响应
   * 优先按 rpcId 匹配，其次按 respOpcode 匹配（兼容服务端不回显 rpcId）
   */
  request(
    reqOpcode: number,
    reqBody: Uint8Array,
    respOpcode: number,
    timeout = 10000,
  ): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        reject(new Error("GameNetwork: not connected"))
        return
      }

      const rpcId = this.nextRpcId++

      const timer = setTimeout(() => {
        this.pendingRequests.delete(rpcId)
        console.error(
          `[GameNetwork] request timeout opcode=${reqOpcode} rpcId=${rpcId}`,
        )
        reject(new Error(`GameNetwork: request timeout (opcode=${reqOpcode}, rpcId=${rpcId})`))
      }, timeout)

      this.pendingRequests.set(rpcId, { resolve, reject, timer, respOpcode })

      const buffer = packPacket(reqOpcode, reqBody, rpcId)

      console.log(
        `[GameNetwork] request send opcode=${reqOpcode} rpcId=${rpcId} timeout=${timeout}`,
      )

      this.ws.send(buffer)
    })
  }

  onMessage(opcode: number, handler: MessageHandler): void {
    this.messageHandlers.set(opcode, handler)
  }

  removeHandler(opcode: number): void {
    this.messageHandlers.delete(opcode)
  }

  disconnect(): void {
    this.messageHandlers.clear()
    this.rejectAllPending(new Error("GameNetwork: disconnected"))

    if (this.ws) {
      this.ws.onopen = null
      this.ws.onclose = null
      this.ws.onerror = null
      this.ws.onmessage = null
      this.ws.close()
      this.ws = null
    }

    this.setStatus("disconnected")
  }

  private rejectAllPending(reason: Error): void {
    for (const [, pending] of this.pendingRequests) {
      clearTimeout(pending.timer)
      pending.reject(reason)
    }
    this.pendingRequests.clear()
  }
}

export const gameNetwork = new GameNetwork()
