export const CONFIG = {
  WS_HOST: import.meta.env.VITE_WS_HOST ?? "127.0.0.1",
  WS_PORT: Number(import.meta.env.VITE_WS_PORT) || 20000,
  HEARTBEAT_INTERVAL_MS: Number(import.meta.env.VITE_HEARTBEAT_INTERVAL_MS) || 3000,
  /** 逻辑帧率（帧/秒），来自 VITE_TICK */
  TICK: Number(import.meta.env.VITE_TICK) || 20,
} as const
