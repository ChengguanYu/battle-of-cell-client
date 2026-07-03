import { gameConnection } from "./GameConnection.ts"
import { OpCode } from "./OpCode.ts"
import { CONFIG } from "./config.ts"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — 由 pbjs/pbts 生成
import { Fantasy } from "../proto/bundle.js"

export async function sendTestMessage(tag = "测试消息") {
  await gameConnection.connect(`ws://${CONFIG.WS_HOST}:${CONFIG.WS_PORT}`)
  const msg = Fantasy.Network.Message.C2G_TestMessage.encode({ Tag: tag })
  gameConnection.send(OpCode.C2G_TestMessage, msg.finish())
}
