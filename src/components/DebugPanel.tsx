import { useState } from "react"
import type { Player } from "../entities/Player"

interface DebugPanelProps {
  player: Player
  speedCoefficient: number
  onSpeedCoefficientChange: (v: number) => void
  visible: boolean
  onClose: () => void
}

export function DebugPanel({
  player,
  speedCoefficient,
  onSpeedCoefficientChange,
  visible,
  onClose,
}: DebugPanelProps) {
  const [editDecel, setEditDecel] = useState(String(player.deceleration))
  const [editMaxSpeed, setEditMaxSpeed] = useState(String(player.maxLaunchSpeed))
  const [editCoeff, setEditCoeff] = useState(String(speedCoefficient))

  if (!visible) return null

  const v = player.velocity
  const speed = Math.sqrt(v.vx * v.vx + v.vy * v.vy)
  const d = player.direction
  const hasLaunched = d.dirX !== 0 || d.dirY !== 0
  const dirAngle = hasLaunched
    ? (Math.atan2(d.dirY, d.dirX) * 180 / Math.PI).toFixed(1)
    : "—"

  const applyDecel = () => {
    const n = parseFloat(editDecel)
    if (!isNaN(n) && n >= 0) {
      player.setDeceleration(n)
    }
  }

  const applyMaxSpeed = () => {
    const n = parseFloat(editMaxSpeed)
    if (!isNaN(n) && n >= 0) {
      player.setMaxLaunchSpeed(n)
    }
  }

  const applyCoeff = () => {
    const n = parseFloat(editCoeff)
    if (!isNaN(n) && n >= 0) {
      onSpeedCoefficientChange(n)
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        left: 16,
        top: 16,
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.85)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: 8,
        padding: "12px 16px",
        minWidth: 260,
        fontFamily: "monospace",
        fontSize: 13,
        color: "#ccc",
        userSelect: "none",
      }}
    >
      {/* header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
          paddingBottom: 8,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <span style={{ color: "#4ade80", fontWeight: "bold", fontSize: 14 }}>
          ■ 调试菜单
        </span>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "#888",
            cursor: "pointer",
            fontSize: 16,
            padding: "0 4px",
          }}
          type="button"
        >
          ✕
        </button>
      </div>

      {/* 变量参数 */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ color: "#60a5fa", fontSize: 12, marginBottom: 4 }}>─ 变量参数 ─</div>
        <Row label="位置" value={`(${Math.round(player.x)}, ${Math.round(player.y)})`} />
        <Row label="发射向" value={hasLaunched ? `(${d.dirX.toFixed(4)}, ${d.dirY.toFixed(4)})` : "(—, —)"} />
        <Row label="初速度" value={hasLaunched ? `${player.initSpeed.toFixed(1)} px/s` : "—"} />
        <Row label="当前速率" value={`${speed.toFixed(1)} px/s`} />
        <Row label="方向角" value={`${dirAngle}°`} />
      </div>

      {/* 恒定参数 */}
      <div>
        <div style={{ color: "#f59e0b", fontSize: 12, marginBottom: 4 }}>─ 恒定参数 ─</div>

        <EditRow
          label="速度系数"
          value={editCoeff}
          onChange={setEditCoeff}
          onApply={applyCoeff}
        />
        <EditRow
          label="减速度"
          value={editDecel}
          onChange={setEditDecel}
          onApply={applyDecel}
        />
        <EditRow
          label="最大蓄力距"
          value={editMaxSpeed}
          onChange={setEditMaxSpeed}
          onApply={applyMaxSpeed}
        />
      </div>

      <div style={{ marginTop: 8, fontSize: 11, color: "#666" }}>
        Enter 确认修改 · F3 关闭
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "2px 0" }}>
      <span style={{ color: "#999" }}>{label}</span>
      <span style={{ color: "#eee" }}>{value}</span>
    </div>
  )
}

function EditRow({
  label,
  value,
  onChange,
  onApply,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  onApply: () => void
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "2px 0" }}>
      <span style={{ color: "#999", flex: 1 }}>{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onApply()
        }}
        onBlur={onApply}
        type="text"
        style={{
          width: 72,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 3,
          color: "#eee",
          padding: "2px 6px",
          fontSize: 13,
          fontFamily: "monospace",
          textAlign: "right",
        }}
      />
    </div>
  )
}
