// 映射 C# 服务端 Entity.DTOs.ResponseCode 枚举
export const ResponseCode = {
  Success: 0,
  AccountNotFound: 1001,
  InvalidPassword: 1002,
} as const

export type ResponseCode = (typeof ResponseCode)[keyof typeof ResponseCode]
