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
import type { WorldShapeData, WorldSize } from "../state/gameSession"

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

/** protobufjs 的 64 位整数可能是 number/Long/bigint，统一取 number */
function toNumber(value: unknown): number {
  if (typeof value === "number") return value
  if (typeof value === "bigint") return Number(value)
  if (value && typeof value === "object" && "toNumber" in value) {
    return (value as { toNumber: () => number }).toNumber()
  }
  return Number(value)
}

function toWorldDimension(value: unknown, fieldName: string): number {
  const dimension = Number(String(value))
  if (!Number.isSafeInteger(dimension) || dimension <= 0) {
    throw new Error(`进入房间成功但世界尺寸 ${fieldName} 无效`)
  }
  return dimension
}

type RespLike = {
  ok?: boolean | null
  meta?: { statusCode?: number | null } | null
  error?: Array<Parameters<typeof formatRespError>[0]> | null
}

function assertRespOk(resp: RespLike, fallbackMessage: string, logPrefix: string): void {
  if (resp.ok && (!resp.meta || resp.meta.statusCode === StatusCode.Ok)) {
    return
  }

  const errors = resp.error ?? []
  for (const err of errors) {
    console.error(`${logPrefix} error:`, formatRespError(err))
  }
  throw new Error(
    errors.length > 0
      ? errors.map(formatRespError).join("; ")
      : fallbackMessage,
  )
}

export type MatchPhase = "idle" | "matching" | "waiting_first_frame"

export interface MatchEnterResult {
  roomId: number
  firstFrameNumber: number
  worldSize: WorldSize
  worldShapes: WorldShapeData[]
  /** 服务端分配的本局出生点（世界坐标 px），无则 fallback 到世界中心 */
  spawnPosition: { x: number; y: number } | null
  /** 服务端分配的本局玩家 entity_id（Hero 绑定），无则 null */
  heroEntityId: number | null
}

interface MatchResolution {
  roomId: number
  worldSize: WorldSize
  worldShapes: WorldShapeData[]
  /** 服务端分配的本局出生点 */
  spawnPosition: { x: number; y: number } | null
  /** 服务端分配的本局玩家 entity_id */
  heroEntityId: number | null
}

/** 可替换匹配策略：产出房间初始化数据后，由共享流水线负责等首帧并入战 */
type MatchStrategy = (timeout: number) => Promise<MatchResolution>

export function useMatch() {
  const { token } = useAuth()
  const [pending, setPending] = useState(false)
  const [phase, setPhase] = useState<MatchPhase>("idle")
  const pendingRef = useRef(false)

  const ensureGameSession = useCallback(async () => {
    if (gameNetwork.isConnected) return
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
  }, [token])

  /** 新逻辑：Match 创建匹配会话，成功后再 EntryRoom，roomId 以 EntryRoomResp 为准 */
  const resolveRoomByMatchThenEntry: MatchStrategy = useCallback(async (timeout) => {
    const matchReqBody = BattleOfCell.Message.MatchReq.encode(
      BattleOfCell.Message.MatchReq.create({
        matchType: BattleOfCell.Message.MatchType.NORMAL,
      }),
    ).finish()

    const matchRespBuffer = await gameNetwork.request(
      OpCode.MatchReq,
      matchReqBody,
      OpCode.MatchResp,
      timeout,
    )

    const matchResp = BattleOfCell.Message.MatchResp.decode(
      new Uint8Array(matchRespBuffer),
    )
    console.log("[Match] MatchResp:", JSON.stringify(matchResp))
    assertRespOk(matchResp, "匹配失败", "[Match]")

    // Match 成功后立刻入房；roomId 以 EntryRoomResp 为准
    const entryReqBody = BattleOfCell.Message.EntryRoomReq.encode(
      BattleOfCell.Message.EntryRoomReq.create({}),
    ).finish()

    const entryRespBuffer = await gameNetwork.request(
      OpCode.EntryRoomReq,
      entryReqBody,
      OpCode.EntryRoomResp,
      timeout,
    )

    const entryResp = BattleOfCell.Message.EntryRoomResp.decode(
      new Uint8Array(entryRespBuffer),
    )
    console.log("[Match] EntryRoomResp:", JSON.stringify(entryResp))
    assertRespOk(entryResp, "进入房间失败", "[Match]")

    const roomId = toRoomId(entryResp.roomId)
    if (!roomId) {
      throw new Error("进入房间成功但房间 ID 无效")
    }
    if (!entryResp.world) {
      throw new Error("进入房间成功但缺少世界信息")
    }

    const worldSize = {
      width: toWorldDimension(entryResp.world.xSize, "x_size"),
      height: toWorldDimension(entryResp.world.ySize, "y_size"),
    }
    console.log("[Match] Map:", worldSize)

    // 顶点与世界尺寸同单位（直接以 int64 透传的原始 world px），仅做数值类型转换
    const worldShapes: WorldShapeData[] = (entryResp.world.shapes ?? []).map(
      (shape) => ({
        vertices: (shape.vertices ?? []).map((v) => ({
          x: toNumber(v.x),
          y: toNumber(v.y),
        })),
      }),
    )

    // 出生点 + entity_id 已由 HeroInit 携带
    const heroInit = entryResp.heroInit
    const spawnPosition =
      heroInit?.position != null
        ? { x: toNumber(heroInit.position.x), y: toNumber(heroInit.position.y) }
        : null
    console.log("[Match] Spawn position:", spawnPosition)

    const heroEntityId = heroInit?.entityId != null ? toNumber(heroInit.entityId) : null
    console.log("[Match] Hero entityId:", heroEntityId)

    return { roomId, worldSize, worldShapes, spawnPosition, heroEntityId }
  }, [])

  /**
   * 共享入战流水线：
   * ensureSession → clear frames → match strategy → wait first frame → enterBattle
   */
  const runEnterBattlePipeline = useCallback(
    async (
      strategy: MatchStrategy,
      timeout: number,
      logPrefix: string,
    ): Promise<MatchEnterResult | null> => {
      if (pendingRef.current) return null
      pendingRef.current = true
      setPending(true)
      setPhase("matching")
      gameSession.enterMatching()

      try {
        await ensureGameSession()

        // 新一局匹配：清空旧帧，避免误把上一局首帧当成本局
        frameBuffer.clear()

        const resolved = await strategy(timeout)
        const { roomId, worldSize, worldShapes, spawnPosition, heroEntityId } = resolved

        setPhase("waiting_first_frame")
        gameSession.enterWaitingFirstFrame(roomId, worldSize, worldShapes, spawnPosition ?? undefined, heroEntityId)

        const firstFrameNumber = await frameBuffer.waitForFirstFrame(timeout)
        console.log(`${logPrefix} first server_frame received, frameNumber=`,
          firstFrameNumber,
          "roomId=",
          roomId,
        )

        gameSession.enterBattle(roomId, firstFrameNumber, worldSize, worldShapes, spawnPosition ?? undefined, heroEntityId)
        return { roomId, firstFrameNumber, worldSize, worldShapes, spawnPosition, heroEntityId }
      } catch (err) {
        gameSession.enterLobby()
        throw err
      } finally {
        pendingRef.current = false
        setPending(false)
        setPhase("idle")
      }
    },
    [ensureGameSession],
  )

  const startMatch = useCallback(
    async (timeout = 30000) => {
      return runEnterBattlePipeline(
        resolveRoomByMatchThenEntry,
        timeout,
        "[Match]",
      )
    },
    [runEnterBattlePipeline, resolveRoomByMatchThenEntry],
  )

  return { startMatch, pending, phase }
}