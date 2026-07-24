// 镜像 Fantasy.OuterOpcode — 与服务端保持同步
export const OpCode = {
  ClientFrame: 134227729,
  EntryHomeReq: 268445457,
  EntryHomeResp: 402663185,
  EntryRoomReq: 268445458,
  EntryRoomResp: 402663186,
  MetaData: 134227730,
  PlayerLeaveRoomReq: 268445459,
  PlayerLeaveRoomResp: 402663187,
  PlayerMatchReq: 268445460,
  PlayerMatchResp: 402663188,
  RespError: 134227731,
  ServerFrame: 134227732,
  SessionHeartbeatPing: 268445461,
  SessionHeartbeatPong: 402663189,
} as const

export type OpCode = (typeof OpCode)[keyof typeof OpCode]
