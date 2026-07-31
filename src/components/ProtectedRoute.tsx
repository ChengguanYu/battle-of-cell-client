import { Navigate } from "react-router-dom"
import type { ReactNode } from "react"
import { useAuth } from "../hooks/AuthContext"
import { CONFIG } from "../network/config"

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()

  if (CONFIG.DEBUG_MODE) {
    return <>{children}</>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
