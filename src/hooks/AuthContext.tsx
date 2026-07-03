import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import type { ReactNode } from "react"
import type { LoginResponseData } from "../types/api"
import { authApi } from "../services/auth"
import type { RegisterRequest } from "../types/auth"

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
    const data = await authApi.login(account, password)
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
