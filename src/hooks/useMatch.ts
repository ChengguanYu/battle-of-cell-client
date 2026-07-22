import { useCallback, useRef, useState } from "react"
import { BattleOfCell } from "../proto/bundle"
import { gameNetwork } from "../network/GameNetwork"
import { OpCode } from "../proto/OpCode"
import { CONFIG } from "../network/config"
import { StatusCode } from "../entity/dtos"
import { formatRespError } from "../proto/utils"
import { useAuth } from "./AuthContext"
import { wsService } from "../services/wsService"
import { frameBuffer } from "../services/frameBuffer"
import { gameSession } from "../state/gameSession"

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

export type MatchPhase = "idle" | "matching" | "waiting_first_frame"

export function useMatch() {
  const { token } = useAuth()
  const [pending, setPending] = useState(false)
  const [phase, setPhase] = useState<MatchPhase>("idle")
  const pendingRef = useRef(false)

  const startMatch = useCallback(async (timeout = 30000) => {
    if (pendingRef.current) return null
    pendingRef.current = true
    setPending(true)
    setPhase("matching")
    gameSession.enterMatching()

    try {
      if (!gameNetwork.isConnected) {
        if (!token) throw new Error("未登录")

        const wsAddress = `ws://${CONFIG.WS_HOST}:${CONFIG.WS_PORT}`
        await wsService.connect(wsAddress)

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

        wsService.notifyAuthSuccess()
        wsService.startHeartbeat()
      }

      // 新一局匹配：清空旧帧，避免误把上一局首帧当成本局
      frameBuffer.clear()

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

      // 匹配成功：等待服务端首帧后再进入战斗
      setPhase("waiting_first_frame")
      gameSession.enterWaitingFirstFrame(roomId)

      const firstFrameNumber = await frameBuffer.waitForFirstFrame(timeout)
      console.log(
        "[Match] first server_frame received, frameNumber=",
        firstFrameNumber,
        "roomId=",
        roomId,
      )

      gameSession.enterBattle(roomId, firstFrameNumber)
      return { roomId, firstFrameNumber }
    } catch (err) {
      gameSession.enterLobby()
      throw err
    } finally {
      pendingRef.current = false
      setPending(false)
      setPhase("idle")
    }
  }, [token])

  return { startMatch, pending, phase }
}
