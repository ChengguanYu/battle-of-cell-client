import { BattleOfCell } from "../proto/bundle"
import { gameNetwork } from "../network/GameNetwork"
import { OpCode } from "../proto/OpCode"

export type ClientFramePayload = BattleOfCell.Message.client_frame.$Properties
export type FrameOp = BattleOfCell.Message.frame.$Properties

/**
 * 纯发帧：编码并发送 client_frame。
 * 与 Battle 页面 / 输入逻辑解耦，调用方自行决定何时发、发什么。
 *
 * @returns 是否成功发出（未连接时为 false）
 */
export function sendClientFrame(payload: ClientFramePayload): boolean {
  if (!gameNetwork.isConnected) {
    console.warn("[client_frame] skip send: not connected")
    return false
  }

  const body = BattleOfCell.Message.client_frame
    .encode(BattleOfCell.Message.client_frame.create(payload))
    .finish()

  gameNetwork.send(OpCode.client_frame, body)
  console.log(
    "[client_frame] send ok frameNumber=",
    payload.frameNumber,
    "ops=",
    payload.frames?.length ?? 0,
    "bodyBytes=",
    body.length,
  )
  return true
}
