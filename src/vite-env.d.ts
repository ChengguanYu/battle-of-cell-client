/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WS_HOST: string
  readonly VITE_WS_PORT: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_TICK: string
  readonly VITE_HEARTBEAT_INTERVAL_MS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
