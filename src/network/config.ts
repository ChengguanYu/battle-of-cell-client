export const CONFIG = {
  WS_HOST: import.meta.env.VITE_WS_HOST ?? "127.0.0.1",
  WS_PORT: Number(import.meta.env.VITE_WS_PORT) || 20000,
  HEARTBEAT_INTERVAL_MS: Number(import.meta.env.VITE_HEARTBEAT_INTERVAL_MS) || 3000,
  /** 逻辑帧率（帧/秒），来自 VITE_TICK */
  TICK: Number(import.meta.env.VITE_TICK) || 20,
  /**
   * 客户端操作发送延迟帧数 n。
   * 发射帧号 = 当前 tick + SEND_DELAY_FRAMES。
   * 当前默认 0（立刻归属当前逻辑帧）；后续可调大以对齐服务端缓冲/延迟广播。
   */
  SEND_DELAY_FRAMES: Number(import.meta.env.VITE_SEND_DELAY_FRAMES) || 0,
} as const