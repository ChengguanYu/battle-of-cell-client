// 镜像 Fantasy.OuterOpcode — 与服务端保持同步
export const OpCode = {
  // EntryHome
  EntryHomeReq: 268445457,
  EntryHomeResp: 402663185,
  MetaData:134227729,
  PlayerMatchReq:268445458,
  PlayerMatchResp:402663186,
  RespError:134227730,
  SessionHeartbeatPing:268445459,
  SessionHeartbeatPong:402663187,
  client_frame: 134227731,
  server_frame: 134227732,
} as const

export type OpCode = (typeof OpCode)[keyof typeof OpCode]
