import './App.css'

/**
 * GameWindow — 游戏视口容器
 *
 * 占满 100vw × 100vh，内部 overflow-y: auto 处理滚动。
 * 所有游戏内容都应挂在此组件下。
 */
function GameWindow() {
  return (
    <div className="game-window">
      {/* 游戏内容将渲染在此 */}
    </div>
  )
}

function App() {
  return <GameWindow />
}

export default App
