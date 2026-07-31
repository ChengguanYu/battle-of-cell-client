import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { CONFIG } from "../network/config"
import { useAuth } from "./AuthContext"
import { wsService } from "../services/wsService"
import { BattleOfCell } from "../proto/bundle"
import { gameNetwork } from "../network/GameNetwork"
import { OpCode } from "../proto/OpCode"
import { StatusCode } from "../entity/dtos"
import { gameSession } from "../state/gameSession"
import { frameBuffer } from "../services/frameBuffer"

function toNumber(value: unknown): number {
  if (typeof value === "number") return value
  if (typeof value === "bigint") return Number(value)
  if (value && typeof value === "object" && "toNumber" in value) {
    return (value as { toNumber: () => number }).toNumber()
  }
  return Number(value)
}

function toRoomId(value: unknown): number {
  if (value == null) return 0
  if (typeof value === "number") return value
  if (typeof value === "string") return Number(value)
  if (typeof value === "object" && value !== null && "toNumber" in value) {
    return (value as { toNumber: () => number }).toNumber()
  }
  return Number(value)
}

function toWorldDimension(value: unknown, fieldName: string): number {
  const dimension = Number(String(value))
  if (!Number.isSafeInteger(dimension) || dimension <= 0) {
    throw new Error("世界尺寸 " + fieldName + " 无效: " + String(value))
  }
  return dimension
}

/**
 * 调试战斗自动流水线 hook。
 *
 * 当 CONFIG.DEBUG_MODE === true 且 CONFIG.IS_DEBUG_BATTLE === true 时，
 * 在 BattlePage 内自动执行静默登录 → 匹配 → 入房 → 等首帧 → 跳转分配的房间。
 *
 * 仅在当前页生命周期内最多跑一次，返回 isRunning 供调用方展示加载态。
 */
export function useDebugBattle(): { isRunning: boolean; worldKey: number } {
  const navigate = useNavigate()
  const { login, isAuthenticated, token } = useAuth()
  const startedRef = useRef(false)
  const [worldKey, setWorldKey] = useState(0)

  const shouldRun = CONFIG.DEBUG_MODE && CONFIG.IS_DEBUG_BATTLE && !gameSession.isBattleReady()
  const [isRunning, setIsRunning] = useState(shouldRun)

  useEffect(() => {
    if (!shouldRun) return

    const account = CONFIG.DEBUG_ACCOUNT
    const password = CONFIG.DEBUG_PASSWORD
    if (!account || !password) {
      console.warn(
        "[DebugBattle] VITE_DEBUG_ACCOUNT / VITE_DEBUG_PASSWORD 未设置，跳过自动流水线",
      )
      return
    }


    if (startedRef.current) return
    startedRef.current = true

    const pipeline = async () => {
      try {
        console.log("[DebugBattle] 启动调试战斗自动流水线", {
          account,
          isAuthenticated,
        })

        // 2 — 静默登录
        if (!isAuthenticated) {
          console.log("[DebugBattle] 未登录，执行静默登录...")
          await login(account, password)
          console.log("[DebugBattle] 登录完成")
        }

        // 3 — 确保 WS 连接和游戏会话
        if (!wsService.isConnected) {
          if (!token) {
            console.error("[DebugBattle] 无 token，无法重建 WS 会话")
            setIsRunning(false)
            return
          }

          console.log("[DebugBattle] 重建 WS 连接...")
          const wsUrl = "ws://" + CONFIG.WS_HOST + ":" + CONFIG.WS_PORT
          await wsService.connect(wsUrl)

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
          if (!(decoded.ok && decoded.meta?.statusCode === StatusCode.Ok)) {
            throw new Error("恢复游戏会话失败")
          }
          wsService.notifyAuthSuccess()
          wsService.startHeartbeat()
          console.log("[DebugBattle] WS 会话恢复完成")
        }

        // 4 — 匹配流水线
        frameBuffer.clear()
        gameSession.enterMatching()

        console.log("[DebugBattle] 发送 MatchReq...")
        const matchReqBody = BattleOfCell.Message.MatchReq.encode(
          BattleOfCell.Message.MatchReq.create({
            matchType: BattleOfCell.Message.MatchType.NORMAL,
          }),
        ).finish()
        const matchRespBuffer = await gameNetwork.request(
          OpCode.MatchReq,
          matchReqBody,
          OpCode.MatchResp,
          30000,
        )
        const matchResp = BattleOfCell.Message.MatchResp.decode(
          new Uint8Array(matchRespBuffer),
        )
        console.log("[DebugBattle] MatchResp:", JSON.stringify(matchResp))

        if (!(matchResp.ok && matchResp.meta?.statusCode === StatusCode.Ok)) {
          throw new Error("匹配失败")
        }

        console.log("[DebugBattle] 发送 EntryRoomReq...")
        const entryReqBody = BattleOfCell.Message.EntryRoomReq.encode(
          BattleOfCell.Message.EntryRoomReq.create({}),
        ).finish()
        const entryRespBuffer = await gameNetwork.request(
          OpCode.EntryRoomReq,
          entryReqBody,
          OpCode.EntryRoomResp,
          30000,
        )
        const entryResp = BattleOfCell.Message.EntryRoomResp.decode(
          new Uint8Array(entryRespBuffer),
        )
        console.log("[DebugBattle] EntryRoomResp:", JSON.stringify(entryResp))

        if (!(entryResp.ok && entryResp.meta?.statusCode === StatusCode.Ok)) {
          throw new Error("进入房间失败")
        }

        const roomId = toRoomId(entryResp.roomId)
        if (!roomId) throw new Error("房间 ID 无效")
        if (!entryResp.world) throw new Error("缺少世界信息")

        const worldSize = {
          width: toWorldDimension(entryResp.world.xSize, "xSize"),
          height: toWorldDimension(entryResp.world.ySize, "ySize"),
        }

        const worldShapes = (entryResp.world.shapes ?? []).map(
          (shape: any) => ({
            vertices: (shape.vertices ?? []).map(
              (v: any) => ({
                x: toNumber(v.x),
                y: toNumber(v.y),
              }),
            ),
          }),
        )

        const heroInit = entryResp.heroInit
        const spawnPosition =
          heroInit?.position != null
            ? {
                x: toNumber(heroInit.position.x),
                y: toNumber(heroInit.position.y),
              }
            : null

        gameSession.enterWaitingFirstFrame(
          roomId,
          worldSize,
          worldShapes,
          spawnPosition ?? undefined,
        )
        console.log("[DebugBattle] 等待服务端首帧...")

        const firstFrameNumber = await frameBuffer.waitForFirstFrame(30000)
        console.log("[DebugBattle] 收到首帧编号:", firstFrameNumber)

        gameSession.enterBattle(
          roomId,
          firstFrameNumber,
          worldSize,
          worldShapes,
          spawnPosition ?? undefined,
        )
        console.log("[DebugBattle] 流水线完成，跳转到房间", roomId)
        setIsRunning(false)
        setWorldKey(k => k + 1)
        navigate("/battle/" + roomId, { replace: true })
      } catch (e) {
        console.error("[DebugBattle] 流水线异常:", e)
        gameSession.enterLobby()
        setIsRunning(false)
      }
    }

    pipeline()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isRunning,
    worldKey,
  }
}



