import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { WsGuard } from "./components/WsGuard"
import { Toaster } from "./components/ui/toaster"

function GameWindow() {
  return (
    <div className="game-window">
      {/* 游戏内容将渲染在此 */}
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GameWindow />} />
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <WsGuard />
      <Toaster />
    </>
  )
}

export default App
