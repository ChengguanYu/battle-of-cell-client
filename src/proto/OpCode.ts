// 镜像 Fantasy.OuterOpcode — 与服务端保持同步
export const OpCode = {
  // EntryHome
  EntryHomeReq: 268445457,
  EntryHomeRes: 402663185,
} as const

export type OpCode = (typeof OpCode)[keyof typeof OpCode]
