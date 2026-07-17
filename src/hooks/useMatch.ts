import { useCallback, useRef, useState } from "react"
import { BattleOfCell } from "../proto/bundle"
import { gameNetwork } from "../network/GameNetwork"
import { OpCode } from "../proto/OpCode"
import { CONFIG } from "../network/config"
import { StatusCode } from "../entity/dtos"
import { formatRespError } from "../proto/utils"
import { useAuth } from "./AuthContext"

export function useMatch() {
  const { token } = useAuth()
  const [pending, setPending] = useState(false)
  const pendingRef = useRef(false)

  const startMatch = useCallback(async (timeout = 30000) => {
    if (pendingRef.current) return
    pendingRef.current = true
    setPending(true)

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

      if (resp.ok && (!resp.meta || resp.meta.statusCode === StatusCode.Ok)) {
        return
      }

      const errors = resp.error ?? []
      for (const err of errors) {
        console.error("[Match] error:", formatRespError(err))
      }
      throw new Error(
        errors.length > 0
          ? errors.map(formatRespError).join("; ")
          : "匹配失败",
      )
    } finally {
      pendingRef.current = false
      setPending(false)
    }
  }, [token])

  return { startMatch, pending }
}
