// 镜像 Fantasy.OuterOpcode — 与服务端保持同步
export const OpCode = {
  ClientFrame: 134227729,
  EntryHomeReq: 268445457,
  EntryHomeResp: 402663185,
  EntryRoomReq: 268445458,
  EntryRoomResp: 402663186,
  MatchReq: 268445459,
  MatchResp: 402663187,
  MetaData: 134227730,
  PlayerLeaveRoomReq: 268445460,
  PlayerLeaveRoomResp: 402663188,
  PlayerMatchReq: 268445461,
  PlayerMatchResp: 402663189,
  RespError: 134227731,
  ServerFrame: 134227732,
  SessionHeartbeatPing: 268445462,
  SessionHeartbeatPong: 402663190,
} as const

export type OpCode = (typeof OpCode)[keyof typeof OpCode]
