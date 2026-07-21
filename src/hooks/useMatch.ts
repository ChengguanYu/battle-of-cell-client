import { useCallback, useRef, useState } from "react"
import { BattleOfCell } from "../proto/bundle"
import { gameNetwork } from "../network/GameNetwork"
import { OpCode } from "../proto/OpCode"
import { CONFIG } from "../network/config"
import { StatusCode } from "../entity/dtos"
import { formatRespError } from "../proto/utils"
import { useAuth } from "./AuthContext"
import { battleState } from "../state/battleState"

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

export function useMatch() {
  const { token } = useAuth()
  const [pending, setPending] = useState(false)
  const pendingRef = useRef(false)

  const startMatch = useCallback(async (timeout = 30000) => {
    if (pendingRef.current) return null
    pendingRef.current = true
    setPending(true)

    let frameTimer: ReturnType<typeof setTimeout> | null = null
    let listeningFrame = false
    let settled = false

    try {
      if (!gameNetwork.isConnected) {
        if (!token) throw new Error("未登录")

        const wsAddress = `ws://${CONFIG.WS_HOST}:${CONFIG.WS_PORT}`
        await gameNetwork.connect(wsAddress)

        const homeReq = BattleOfCell.Message.EntryHomeReq.encode(
          BattleOfCell.Message.EntryHomeReq.create({ token }),
        ).finish()

        const homeResp = await gameNetwork.request(
          OpCode.EntryHomeReq,
          homeReq,
          OpCode.EntryHomeResp,
        )

        const decoded = BattleOfCell.Message.EntryHomeResp.decode(
          new Uint8Array(homeResp),
        )
        if (!(decoded.ok && (!decoded.meta || decoded.meta.statusCode === StatusCode.Ok))) {
          throw new Error("重新建立游戏会话失败")
        }
      }

      // 先挂上 server_frame 监听，避免匹配成功后推送早到丢失
      const framePromise = new Promise<BattleOfCell.Message.server_frame>((resolve, reject) => {
        frameTimer = setTimeout(() => {
          if (settled) return
          settled = true
          reject(new Error("等待服务器帧超时"))
        }, timeout)

        gameNetwork.onMessage(OpCode.server_frame, (body) => {
          if (settled) return
          try {
            const frame = BattleOfCell.Message.server_frame.decode(new Uint8Array(body))
            settled = true
            if (frameTimer) clearTimeout(frameTimer)
            resolve(frame)
          } catch (err) {
            settled = true
            if (frameTimer) clearTimeout(frameTimer)
            reject(err instanceof Error ? err : new Error("解析 server_frame 失败"))
          }
        })
        listeningFrame = true
      })

      const reqBody = BattleOfCell.Message.PlayerMatchReq.encode(
        BattleOfCell.Message.PlayerMatchReq.create({}),
      ).finish()

      const respBuffer = await gameNetwork.request(
        OpCode.PlayerMatchReq,
        reqBody,
        OpCode.PlayerMatchResp,
        timeout,
      )

      const resp = BattleOfCell.Message.PlayerMatchResp.decode(
        new Uint8Array(respBuffer),
      )
      console.log("[Match] PlayerMatchResp:", JSON.stringify(resp))

      if (!(resp.ok && (!resp.meta || resp.meta.statusCode === StatusCode.Ok))) {
        const errors = resp.error ?? []
        for (const err of errors) {
          console.error("[Match] error:", formatRespError(err))
        }
        throw new Error(
          errors.length > 0
            ? errors.map(formatRespError).join("; ")
            : "匹配失败",
        )
      }

      const roomId = toRoomId(resp.roomId)
      if (!roomId) {
        throw new Error("匹配成功但房间 ID 无效")
      }

      // 匹配成功后保持加载态，等待服务端主动推送 server_frame
      const frame = await framePromise
      console.log("[Match] server_frame:", JSON.stringify(frame))
      battleState.setBootstrap(roomId, frame)
      return roomId
    } finally {
      if (frameTimer) clearTimeout(frameTimer)
      if (listeningFrame) {
        gameNetwork.removeHandler(OpCode.server_frame)
      }
      pendingRef.current = false
      setPending(false)
    }
  }, [token])

  return { startMatch, pending }
}
