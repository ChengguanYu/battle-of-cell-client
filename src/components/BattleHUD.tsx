// 8方向网格: 几何方向符号
const DIR_GRID: readonly (readonly [number, number, string])[] = [
  [-1, -1, "◸"], [0, -1, "▲"], [1, -1, "◹"],
  [-1,  0, "◀"], [0,  0, "●"], [1,  0, "▶"],
  [-1,  1, "◺"], [0,  1, "▼"], [1,  1, "◿"],
]

interface BattleHUDProps {
  roomId: string | undefined
  playerX: number
  playerY: number
  zoom: number
  onBack: () => void
  /** 测试：8 方向模拟发射, dx/dy 为原始方向向量 (未归一化) */
  onSimulateLaunch?: (dx: number, dy: number) => void
}

export function BattleHUD({ roomId, playerX, playerY, zoom, onBack, onSimulateLaunch }: BattleHUDProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {/* 左上角：退出 + 房间号 */}
      <div className="pointer-events-auto absolute left-4 top-4 flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-red-500/40 hover:text-red-400"
        >
          &lt;
        </button>
        <span className="rounded-md bg-card/80 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          房间: {roomId}
        </span>
      </div>

      {/* 8 方向模拟发射 */}
      {onSimulateLaunch && (
        <div className="pointer-events-auto absolute right-4 top-4">
          <div className="grid grid-cols-3 gap-0.5 rounded-lg border border-border bg-card/60 p-1 backdrop-blur-sm">
            {DIR_GRID.map(([dx, dy, label]) => {
              const isCenter = dx === 0 && dy === 0
              return (
                <button
                  key={`${dx},${dy}`}
                  type="button"
                  disabled={isCenter}
                  onClick={() => onSimulateLaunch(dx, dy)}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded text-xs text-muted-foreground transition-colors hover:border hover:border-yellow-500/40 hover:text-yellow-400 disabled:cursor-default disabled:opacity-20 disabled:hover:border-transparent disabled:hover:text-muted-foreground"
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* 右下角：玩家坐标 + 缩放 */}
      <div className="pointer-events-auto absolute bottom-4 right-4 flex items-center gap-2 rounded-md bg-card/80 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
        <span>
          玩家: ({Math.round(playerX)}, {Math.round(playerY)})
        </span>
        <span className="text-border">|</span>
        <span>缩放: {zoom.toFixed(1)}x</span>
      </div>

      {/* 操作提示 */}
      <div className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur-sm">
        鼠标点击拖拽弹射 · Ctrl+滚轮缩放
      </div>
    </div>
  )
}
