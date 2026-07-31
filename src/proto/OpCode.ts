// 镜像 Fantasy.OuterOpcode — 与服务端保持同步
export const OpCode = {
  ClientFrame: 134227729,
  EntryHomeReq: 268445457,
  EntryHomeResp: 402663185,
  EntryRoomReq: 268445458,
  EntryRoomResp: 402663186,
  HeroInit: 134227730,
  MatchReq: 268445459,
  MatchResp: 402663187,
  MetaData: 134227731,
  PlayerLeaveRoomReq: 268445460,
  PlayerLeaveRoomResp: 402663188,
  RespError: 134227732,
  ServerFrame: 134227733,
  SessionHeartbeatPing: 268445461,
  SessionHeartbeatPong: 402663189,
  ShapeData: 134227734,
  ShapeVertex: 134227735,
  WorldInit: 134227736,
} as const

export type OpCode = (typeof OpCode)[keyof typeof OpCode]
