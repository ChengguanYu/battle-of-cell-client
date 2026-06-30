import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"

function GameWindow() {
  return (
    <div className="game-window">
      {/* 游戏内容将渲染在此 */}
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<GameWindow />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
