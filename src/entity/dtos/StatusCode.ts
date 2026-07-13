// 映射 C# 服务端 StatusCode 枚举（uint）
export const StatusCode = {
  Ok: 0,
  // ===== Gate / 通用 (1-999) =====
  TokenInvalid: 1,
  SessionEntryFailed: 2,

  // ===== Players (1000-1999) =====
  PlayerNotFound: 1000,
  LoadPlayerFailed: 1001,
} as const

export type StatusCode = (typeof StatusCode)[keyof typeof StatusCode]
