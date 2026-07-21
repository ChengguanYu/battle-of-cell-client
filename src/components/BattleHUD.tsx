interface BattleHUDProps {
  roomId: string | undefined
  playerX: number
  playerY: number
  zoom: number
  onBack: () => void
}

export function BattleHUD({ roomId, playerX, playerY, zoom, onBack }: BattleHUDProps) {
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
