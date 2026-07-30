import { Navigate, Routes, Route } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { BattlePage } from "./pages/BattlePage"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { WsGuard } from "./components/WsGuard"
import { useDebugBattle } from "./hooks/useDebugBattle"
import { Toaster } from "./components/ui/toaster"

function GameWindow() {
  return (
    <div className="game-window">
      {/* 游戏内容将渲染在此 */}
    </div>
  )
}

function App() {
  useDebugBattle()
  const location = useLocation()

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/game/:id"
          element={
            <ProtectedRoute>
              <GameWindow />
            </ProtectedRoute>
          }
        />
        <Route
          path="/battle/:roomId"
          element={<BattlePage key={location.pathname + location.search + location.key} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <WsGuard />
      <Toaster />
    </>
  )
}

export default App
