/**
 * 20 字节固定头打包/解包
 *
 * 匹配 Fantasy 框架 OuterPacketHeadLength 格式：
 * Offset  Size  Field                Description
 * 0       4     MessagePacketLength   body 长度（-1 表示空消息体）
 * 4       4     ProtocolCode          OpCode
 * 8       4     RpcId                 请求响应匹配用
 * 12      8     [padding]             占位（填 0）
 * 20                                ← HEAD_LENGTH
 */

export const HEAD_LENGTH = 20

/**
 * 将 opcode + body 打包为完整二进制帧
 * 小端序匹配 C# 默认端序
 */
export function packPacket(opcode: number, body: Uint8Array, rpcId = 0): ArrayBuffer {
  const bodyLength = body.byteLength
  const buffer = new ArrayBuffer(HEAD_LENGTH + bodyLength)
  const view = new DataView(buffer)

  // MessagePacketLength: body 长度，-1 表示空消息体
  view.setInt32(0, bodyLength === 0 ? -1 : bodyLength, true)

  // ProtocolCode: OpCode
  view.setUint32(4, opcode, true)

  // RpcId: 用于请求-响应关联
  view.setUint32(8, rpcId, true)

  // [padding]: 8 字节占位，初始化后默认为 0

  // 复制 body 到头部之后
  if (bodyLength > 0) {
    new Uint8Array(buffer, HEAD_LENGTH).set(body)
  }

  return buffer
}

/**
 * 解析收到的二进制帧，返回 opcode、rpcId、body
 */
export function unpackPacket(data: ArrayBuffer): { opcode: number; rpcId: number; body: ArrayBuffer } {
  const view = new DataView(data)

  // MessagePacketLength
  const bodyLength = view.getInt32(0, true)

  // ProtocolCode
  const opcode = view.getUint32(4, true)

  // RpcId
  const rpcId = view.getUint32(8, true)

  // body（可能为 -1，表示空 body）
  let body: ArrayBuffer
  if (bodyLength <= 0) {
    body = new ArrayBuffer(0)
  } else {
    body = data.slice(HEAD_LENGTH, HEAD_LENGTH + bodyLength)
  }

  return { opcode, rpcId, body }
}
