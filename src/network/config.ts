export const CONFIG = {
  WS_HOST: import.meta.env.VITE_WS_HOST ?? "127.0.0.1",
  WS_PORT: Number(import.meta.env.VITE_WS_PORT) || 20000,
} as const
