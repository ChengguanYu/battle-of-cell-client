import { HEAD_LENGTH, packPacket, unpackPacket } from "./Packet.ts"

export type ConnectionStatus = "disconnected" | "connecting" | "connected"

type MessageHandler = (body: ArrayBuffer, rpcId: number) => void
type StatusCallback = (status: ConnectionStatus) => void

export class GameConnection {
  private ws: WebSocket | null = null
  private status: ConnectionStatus = "disconnected"
  private messageHandlers = new Map<number, MessageHandler>()
  private statusCallbacks = new Set<StatusCallback>()

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
        resolve()
      }

      this.ws.onclose = () => {
        this.setStatus("disconnected")
        this.ws = null
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
        const handler = this.messageHandlers.get(opcode)
        if (handler) {
          handler(body, rpcId)
        }
      }
    })
  }

  send(opcode: number, body: Uint8Array): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.warn(`GameConnection: cannot send, not connected (opcode=${opcode})`)
      return
    }
    const buffer = packPacket(opcode, body)
    this.ws.send(buffer)
  }

  onMessage(opcode: number, handler: MessageHandler): void {
    this.messageHandlers.set(opcode, handler)
  }

  removeHandler(opcode: number): void {
    this.messageHandlers.delete(opcode)
  }

  disconnect(): void {
    this.messageHandlers.clear()
    this.statusCallbacks.clear()

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
}

// 文件末尾 — 全局单例实例
export const gameConnection = new GameConnection()
