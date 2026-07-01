import { Link } from "react-router-dom"

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
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3 transition-colors hover:bg-accent">
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
  return (
    <div className="game-window">
      <div className="flex h-full">
        {/* 左侧排行榜 */}
        <aside className="flex w-1/3 flex-col border-r border-border bg-card/30">
          <div className="border-b border-border px-5 py-4">
            <h2 className="text-lg font-bold text-foreground">🏆 排行榜</h2>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto px-4 py-3">
            {MOCK_LEADERBOARD.map((entry) => (
              <LeaderboardCard key={entry.rank} entry={entry} />
            ))}
          </div>
        </aside>

        {/* 右侧主区域 */}
        <main className="relative flex flex-1 flex-col">
          {/* 右上角头像 */}
          <div className="flex justify-end px-6 pt-5">
            <Link
              to="/user"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-lg text-emerald-400 ring-1 ring-emerald-500/30 transition-colors hover:bg-emerald-500/30"
            >
              😎
            </Link>
          </div>

          {/* 中间弹性区 */}
          <div className="flex flex-1 items-center justify-center">
            {/* 后续内容占位 */}
          </div>

          {/* 右下角开始匹配按钮 */}
          <div className="flex justify-end px-6 pb-8">
            <button
              type="button"
              className="cursor-pointer rounded-xl bg-emerald-500 px-10 py-3 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/40 active:scale-[0.97]"
            >
              开始匹配
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
