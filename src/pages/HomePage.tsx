import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useAuth } from "../hooks/AuthContext"
import { useMatch } from "../hooks/useMatch"
import { ChatRoom } from "../components/ChatRoom"

interface LeaderboardEntry {
  rank: number
  name: string
  avatar: string
  score: number
  winRate: number
}

const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: "细胞之王", avatar: "🧬", score: 2850, winRate: 82 },
  { rank: 2, name: "基因猎人", avatar: "🔬", score: 2640, winRate: 76 },
  { rank: 3, name: "分裂大师", avatar: "🧫", score: 2510, winRate: 71 },
  { rank: 4, name: "核糖战士", avatar: "⚡", score: 2330, winRate: 68 },
  { rank: 5, name: "膜法使", avatar: "🛡️", score: 2200, winRate: 65 },
  { rank: 6, name: "线粒体", avatar: "🔥", score: 2080, winRate: 61 },
  { rank: 7, name: "突变更", avatar: "🌀", score: 1950, winRate: 57 },
  { rank: 8, name: "酶速递", avatar: "🧪", score: 1820, winRate: 54 },
  { rank: 9, name: "蛋白质", avatar: "🧩", score: 1710, winRate: 50 },
  { rank: 10, name: "细胞质", avatar: "💧", score: 1580, winRate: 46 },
]

function LeaderboardCard({ entry }: { entry: LeaderboardEntry }) {
  const isTopThree = entry.rank <= 3
  const rankColors = ["text-yellow-400", "text-slate-300", "text-amber-600"]

  return (
    <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3 last:border-b-0">
      <span
        className={`w-6 text-center text-sm font-bold ${
          isTopThree ? rankColors[entry.rank - 1] : "text-muted-foreground"
        }`}
      >
        {entry.rank}
      </span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-base">
        {entry.avatar}
      </span>
      <div className="flex-1 truncate text-sm font-medium text-foreground">
        {entry.name}
      </div>
      <div className="text-right text-sm">
        <div className="font-semibold text-emerald-400">{entry.score}</div>
        <div className="text-xs text-muted-foreground">{entry.winRate}%</div>
      </div>
    </div>
  )
}

export function HomePage() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const { startMatch, pending } = useMatch()

  const handleMatch = async () => {
    try {
      await startMatch()
      toast.success("匹配成功")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "匹配失败")
    }
  }

  const handleLogout = () => {
    logout()
    navigate("/login", { replace: true })
  }

  return (
    <div className="game-window">
      <div className="flex h-full">
        {/* 左侧：退出按钮 + 排行榜 */}
        <div className="flex w-1/3 flex-col p-5">
          {/* 左上角退出按钮 */}
          <div className="flex items-center pb-3">
            <button
              type="button"
              onClick={handleLogout}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-red-500/40 hover:text-red-400"
            >
              &lt;
            </button>
          </div>
          <aside className="flex flex-1 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg">
            <div className="shrink-0 px-5 py-4">
              <h2 className="text-lg font-bold text-foreground">🏆 排行榜</h2>
            </div>
            <div className="scrollbar-theme flex-1 overflow-y-auto">
              {MOCK_LEADERBOARD.map((entry) => (
                <LeaderboardCard key={entry.rank} entry={entry} />
              ))}
            </div>
          </aside>
        </div>

        {/* 右侧主区域 */}
        <main className="relative flex flex-1 flex-col p-5">
          {/* 右上角玩家卡片 */}
          <div className="flex items-start justify-end gap-3">
            <Link
              to="/user"
              className="group flex w-72 items-center gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:border-emerald-500/40 hover:bg-accent"
            >
              {/* 头像 */}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-lg ring-1 ring-emerald-500/25">
                🧬
              </span>

              {/* 信息 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-medium text-emerald-400">
                    Lv.15
                  </span>
                  <span className="truncate text-sm font-medium text-foreground">
                    细胞之主
                  </span>
                </div>

                {/* 经验进度条 */}
                <div className="mt-1.5 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all"
                      style={{ width: "65%" }}
                    />
                  </div>
                  <span className="text-[11px] text-muted-foreground">
                    65%
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* 中间弹性区 — 聊天室 */}
          <div className="flex flex-1 items-end justify-end pb-4">
            <ChatRoom />
          </div>

          {/* 右下角开始匹配按钮 */}
          <div className="flex justify-end">
            <button
              type="button"
              disabled={pending}
              onClick={handleMatch}
              className="h-14 w-72 cursor-pointer rounded-2xl bg-emerald-500 text-lg font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/40 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="flex items-center justify-center gap-3">
                <span>⚔️</span>
                {pending ? "匹配中..." : "开始匹配"}
              </span>
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
