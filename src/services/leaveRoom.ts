import { BattleOfCell } from "../proto/bundle"
import { gameNetwork } from "../network/GameNetwork"
import { OpCode } from "../proto/OpCode"
import { StatusCode } from "../entity/dtos"
import { formatRespError } from "../proto/utils"

function toRoomId(value: unknown): number {
  if (value == null) return 0
  if (typeof value === "number") return value
  if (typeof value === "string") return Number(value)
  if (typeof value === "object" && value !== null && "toNumber" in value) {
    const maybe = value as { toNumber?: () => number }
    if (typeof maybe.toNumber === "function") {
      return maybe.toNumber()
    }
  }
  return Number(value)
}

export interface LeaveRoomResult {
  roomId: number
}

/**
 * 发送 PlayerLeaveRoomReq，等待 PlayerLeaveRoomResp。
 * 请求体为空（与服务端 proto 一致）。
 */
export async function leaveRoom(timeout = 10000): Promise<LeaveRoomResult> {
  if (!gameNetwork.isConnected) {
    throw new Error("未连接服务器，无法退出房间")
  }

  const reqBody = BattleOfCell.Message.PlayerLeaveRoomReq.encode(
    BattleOfCell.Message.PlayerLeaveRoomReq.create({}),
  ).finish()

  const respBuffer = await gameNetwork.request(
    OpCode.PlayerLeaveRoomReq,
    reqBody,
    OpCode.PlayerLeaveRoomResp,
    timeout,
  )

  const resp = BattleOfCell.Message.PlayerLeaveRoomResp.decode(
    new Uint8Array(respBuffer),
  )
  console.log("[LeaveRoom] PlayerLeaveRoomResp:", JSON.stringify(resp))

  if (!(resp.ok && (!resp.meta || resp.meta.statusCode === StatusCode.Ok))) {
    const errors = resp.error ?? []
    for (const err of errors) {
      console.error("[LeaveRoom] error:", formatRespError(err))
    }
    throw new Error(
      errors.length > 0
        ? errors.map(formatRespError).join("; ")
        : "退出房间失败",
    )
  }

  return { roomId: toRoomId(resp.roomId) }
}
