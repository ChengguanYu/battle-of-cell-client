import { useEffect, useRef, useState } from "react"

interface ChatMessage {
  id: number
  name?: string
  content: string
  isSelf?: boolean
  isSystem?: boolean
}

// TODO: 对接真实聊天协议后移除 mock 数据
const MOCK_MESSAGES: ChatMessage[] = [
  { id: 1, content: "欢迎来到大厅聊天室，请文明发言～", isSystem: true },
  { id: 2, name: "细胞之王", content: "有没有人一起双排？" },
  { id: 3, name: "膜法使", content: "我刚上王者，求带飞" },
  {
    id: 4,
    name: "细胞之主",
    content: "等我一下，马上来",
    isSelf: true,
  },
  { id: 5, name: "分裂大师", content: "新版本细胞分裂太爽了" },
]

const SELF_NAME = "细胞之主"

export function ChatRoom() {
  const [messages, setMessages] = useState<ChatMessage[]>(MOCK_MESSAGES)
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  const handleSend = () => {
    const text = input.trim()
    if (!text) return
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, name: SELF_NAME, content: text, isSelf: true },
    ])
    setInput("")
  }

  return (
    <div className="flex h-56 w-72 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-md">
      {/* 消息列表 */}
      <div
        ref={scrollRef}
        className="scrollbar-theme flex-1 space-y-2 overflow-y-auto px-3 py-2"
      >
        {messages.map((msg) =>
          msg.isSystem ? (
            <div key={msg.id} className="flex justify-center">
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                {msg.content}
              </span>
            </div>
          ) : (
            <div
              key={msg.id}
              className={`flex flex-col gap-0.5 ${
                msg.isSelf ? "items-end" : "items-start"
              }`}
            >
              {!msg.isSelf && (
                <span className="px-1 text-[10px] text-muted-foreground">
                  {msg.name}
                </span>
              )}
              <div
                className={`max-w-[80%] rounded-lg px-2.5 py-1 text-xs ${
                  msg.isSelf
                    ? "bg-emerald-500 text-white"
                    : "bg-muted text-foreground"
                }`}
              >
                {msg.content}
              </div>
            </div>
          )
        )}
      </div>

      {/* 输入区 */}
      <div className="flex shrink-0 items-center gap-1.5 border-t border-border/50 p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend()
          }}
          placeholder="输入消息…"
          className="h-7 flex-1 rounded-md border border-input bg-transparent px-2 text-xs text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={!input.trim()}
          className="h-7 cursor-pointer rounded-md bg-emerald-500 px-2.5 text-xs font-medium text-white transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          发送
        </button>
      </div>
    </div>
  )
}
