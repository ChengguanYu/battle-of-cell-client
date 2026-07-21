import { BattleOfCell } from "../proto/bundle"

export type ServerFrameMessage = BattleOfCell.Message.server_frame

export interface BattleBootstrapState {
  roomId: number
  frame: ServerFrameMessage
  receivedAt: number
}

let bootstrap: BattleBootstrapState | null = null
const listeners = new Set<(state: BattleBootstrapState | null) => void>()

function notify() {
  for (const listener of listeners) {
    listener(bootstrap)
  }
}

export const battleState = {
  getBootstrap(): BattleBootstrapState | null {
    return bootstrap
  },

  setBootstrap(roomId: number, frame: ServerFrameMessage): BattleBootstrapState {
    bootstrap = {
      roomId,
      frame,
      receivedAt: Date.now(),
    }
    notify()
    return bootstrap
  },

  clearBootstrap(): void {
    if (bootstrap === null) return
    bootstrap = null
    notify()
  },

  subscribe(listener: (state: BattleBootstrapState | null) => void): () => void {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  },
}
