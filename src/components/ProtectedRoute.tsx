import { Navigate, type ReactNode } from "react-router-dom"
import { useAuth } from "../hooks/AuthContext"

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
