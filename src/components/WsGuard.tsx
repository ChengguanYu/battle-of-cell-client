import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useAuth } from "../hooks/AuthContext"
import { wsService } from "../services/wsService"
import { frameBuffer } from "../services/frameBuffer"
import { gameSession } from "../state/gameSession"

/**
 * WS 断开守卫组件
 * 监听 authenticated → disconnected 转换，自动清登录态并跳转 login 页
 */
export function WsGuard() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const onLost = () => {
      frameBuffer.clear()
      gameSession.enterLobby()
      toast.error("连接已断开，请重新登录")
      logout()
      navigate("/login", { replace: true })
    }
    wsService.onSessionLost(onLost)
    return () => wsService.removeSessionLostCallback(onLost)
  }, [logout, navigate])

  return null
}
