import { useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useAuth } from "../hooks/AuthContext"
import { wsService } from "../services/wsService"
import { frameBuffer } from "../services/frameBuffer"
import { gameSession } from "../state/gameSession"

const AUTH_FREE_PATHS = new Set(["/login", "/register"])

function isAuthFreePath(pathname: string): boolean {
  return AUTH_FREE_PATHS.has(pathname)
}

/**
 * 全局 WS 守卫
 * - WS 是全局状态：断开后底层统一置 null
 * - 除 login/register 外：
 *   1) 运行时断开事件 → 连接丢失
 *   2) 已登录但发现 ws=null/未连接 → 复用同一套连接丢失逻辑
 */
export function WsGuard() {
  const { logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const handlingRef = useRef(false)

  useEffect(() => {
    const handleConnectionLost = (reason: "event" | "null-check") => {
      if (handlingRef.current) return
      if (isAuthFreePath(location.pathname)) return

      handlingRef.current = true
      console.warn(`[WsGuard] connection lost via ${reason}`)

      frameBuffer.clear()
      gameSession.enterLobby()
      toast.error("连接已断开，请重新登录")
      logout()
      navigate("/login", { replace: true })

      // 下一轮事件循环再放开，避免同一次断开连打多次
      queueMicrotask(() => {
        handlingRef.current = false
      })
    }

    const onLost = () => handleConnectionLost("event")
    wsService.onSessionLost(onLost)

    // 仅在“已登录态 + 非 login/register + socket 已丢”时主动复用丢失逻辑
    // 避免未登录访问受保护页时误弹“连接已断开”
    if (
      isAuthenticated &&
      !isAuthFreePath(location.pathname) &&
      (!wsService.hasSocket || !wsService.isConnected)
    ) {
      handleConnectionLost("null-check")
    }

    return () => wsService.removeSessionLostCallback(onLost)
  }, [logout, navigate, location.pathname, isAuthenticated])

  return null
}
