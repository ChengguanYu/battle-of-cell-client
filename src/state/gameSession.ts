import { useSyncExternalStore } from "react"

/** 客户端游戏阶段（与路由解耦的全局会话态） */
export type GamePhase =
  | "lobby" // 大厅
  | "matching" // 匹配请求中
  | "waiting_first_frame" // 匹配成功，等待服务端首帧
  | "in_battle" // 已收到首帧，战斗会话有效

export interface WorldSize {
  width: number
  height: number
}

/** 世界中的一个形状顶点（真实 world px） */
export interface WorldVertex {
  x: number
  y: number
}

/** 服务端进房下发的形状（凸多边形顶点环，真实 world px） */
export interface WorldShapeData {
  vertices: WorldVertex[]
}

export interface GameSessionState {
  phase: GamePhase
  roomId: number | null
  worldSize: WorldSize | null
  /** 服务端分配的本局出生点（世界坐标 px），进房后非空 */
  spawnPosition: { x: number; y: number } | null
  /** 进房下发的世界形状（顶点为真实 world px），无则 null */
  worldShapes: WorldShapeData[] | null
  /** 进入战斗时锁定的首帧帧号；无则 null */
  firstFrameNumber: number | null
}

const INITIAL_STATE: GameSessionState = {
  phase: "lobby",
  roomId: null,
  worldSize: null,
  spawnPosition: null,
  worldShapes: null,
  firstFrameNumber: null,
}

type Listener = () => void

class GameSessionStore {
  private state: GameSessionState = { ...INITIAL_STATE }
  private listeners = new Set<Listener>()

  getState(): GameSessionState {
    return this.state
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  private set(partial: Partial<GameSessionState>): void {
    this.state = { ...this.state, ...partial }
    for (const cb of this.listeners) {
      cb()
    }
  }

  /** 回到大厅态（登录成功 / 回大厅 / 登出） */
  enterLobby(): void {
    this.set({
      phase: "lobby",
      roomId: null,
      worldSize: null,
      spawnPosition: null,
      firstFrameNumber: null,
    })
  }

  /** 开始匹配 */
  enterMatching(): void {
    this.set({
      phase: "matching",
      roomId: null,
      worldSize: null,
      spawnPosition: null,
      worldShapes: null,
      firstFrameNumber: null,
    })
  }

  /** 匹配响应成功，等待首帧 */
  enterWaitingFirstFrame(roomId: number, worldSize: WorldSize, worldShapes: WorldShapeData[], spawnPosition?: { x: number; y: number }): void {
    this.set({
      phase: "waiting_first_frame",
      roomId,
      worldSize,
      worldShapes,
      spawnPosition: spawnPosition ?? null,
      firstFrameNumber: null,
    })
  }

  /** 收到首帧后进入战斗态 */
  enterBattle(
    roomId: number,
    firstFrameNumber: number,
    worldSize: WorldSize,
    worldShapes: WorldShapeData[],
    spawnPosition?: { x: number; y: number },
  ): void {
    this.set({
      phase: "in_battle",
      roomId,
      worldSize,
      worldShapes,
      spawnPosition: spawnPosition ?? null,
      firstFrameNumber,
    })
  }

  /** 是否具备进入 Battle 页所需的有效全局态 */
  isBattleReady(): boolean {
    return (
      this.state.phase === "in_battle" &&
      this.state.roomId != null &&
      this.state.worldSize != null &&
      this.state.worldShapes != null &&
      this.state.firstFrameNumber != null
    )
  }
}

export const gameSession = new GameSessionStore()

export function useGameSession(): GameSessionState {
  return useSyncExternalStore(
    (onStoreChange) => gameSession.subscribe(onStoreChange),
    () => gameSession.getState(),
    () => gameSession.getState(),
  )
}
