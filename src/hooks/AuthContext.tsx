import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import type { ReactNode } from "react"
import { authApi } from "../services/auth"
import type { RegisterRequest } from "../types/auth"
import { gameNetwork } from "../network/GameNetwork"
import { BattleOfCell } from "../proto/bundle"
import { CONFIG } from "../network/config"
import { OpCode } from "../proto/OpCode"
import { StatusCode } from "../entity/dtos"

interface User {
  uuid: string
  username: string
  email: string
  createdAt: string
}

interface AuthContextValue {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (account: string, password: string) => Promise<void>
  register: (data: RegisterRequest) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

function loadSession(): { user: User | null; token: string | null } {
  const token = sessionStorage.getItem("token")
  const userJson = sessionStorage.getItem("user")
  if (token && userJson) {
    try {
      return { token, user: JSON.parse(userJson) as User }
    } catch {
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("user")
    }
  }
  return { token: null, user: null }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState(loadSession)

  const login = useCallback(async (account: string, password: string) => {
    // 1. HTTP 登录认证
    const data = await authApi.login(account, password)

    // 2. 连接 WebSocket（如果尚未连接）
    if (!gameNetwork.isConnected) {
      const wsAddress = `ws://${CONFIG.WS_HOST}:${CONFIG.WS_PORT}`
      await gameNetwork.connect(wsAddress)
    }

    // 3. 编码 EntryHomeReq（携带 token）并发送
    const reqBody = BattleOfCell.Message.EntryHomeReq.encode(
      BattleOfCell.Message.EntryHomeReq.create({
        token: data.token,
      }),
    ).finish()

    // 4. 等待 EntryHomeRes（确认游戏会话已建立）
    const respBuffer = await gameNetwork.request(
      OpCode.EntryHomeReq,
      reqBody,
      OpCode.EntryHomeRes,
    )

    // 解码并检查响应
    const entryRes = BattleOfCell.Message.EntryHomeRes.decode(
      new Uint8Array(respBuffer),
    )
    console.log("[Login] EntryHomeRes:", JSON.stringify(entryRes))

    if (entryRes.status !== StatusCode.Ok) {
      throw new Error("进入游戏失败")
    }

    // 5. 保存会话
    sessionStorage.setItem("token", data.token)
    sessionStorage.setItem("user", JSON.stringify(data.user))
    setSession({ token: data.token, user: data.user })
  }, [])

  const register = useCallback(async (data: RegisterRequest) => {
    await authApi.register(data)
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
    setSession({ token: null, user: null })
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user: session.user,
      token: session.token,
      isAuthenticated: session.token !== null,
      login,
      register,
      logout,
    }),
    [session, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
