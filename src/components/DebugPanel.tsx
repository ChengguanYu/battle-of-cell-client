import { useState } from "react"
import type { Hero } from "../entities/Hero"
import { fromFixed, fixedHypot } from "../lib/fixed"

interface DebugPanelProps {
  hero: Hero
  speedCoefficient: number
  onSpeedCoefficientChange: (v: number) => void
  visible: boolean
  onClose: () => void
}

export function DebugPanel({
  hero,
  speedCoefficient,
  onSpeedCoefficientChange,
  visible,
  onClose,
}: DebugPanelProps) {
  // Debug inputs stay in real units; hero setters convert to fixed.
  const [editDecel, setEditDecel] = useState(String(fromFixed(hero.deceleration)))
  const [editMaxSpeed, setEditMaxSpeed] = useState(String(fromFixed(hero.maxLaunchSpeed)))
  const [editRadius, setEditRadius] = useState(String(fromFixed(hero.radius)))
  const [editElasticity, setEditElasticity] = useState(String(fromFixed(hero.elasticity)))
  const [editCoeff, setEditCoeff] = useState(String(speedCoefficient))

  if (!visible) return null

  const v = hero.velocity
  const speed = fromFixed(fixedHypot(v.vx, v.vy))
  const d = hero.direction
  const hasLaunched = d.dirX !== 0 || d.dirY !== 0
  const dirAngle = hasLaunched
    ? (Math.atan2(fromFixed(d.dirY), fromFixed(d.dirX)) * 180 / Math.PI).toFixed(1)
    : "—"

  const applyDecel = () => {
    const n = parseFloat(editDecel)
    if (!isNaN(n) && n >= 0) {
      hero.setDeceleration(n)
    }
  }

  const applyMaxSpeed = () => {
    const n = parseFloat(editMaxSpeed)
    if (!isNaN(n) && n >= 0) {
      hero.setMaxLaunchSpeed(n)
    }
  }

  const applyRadius = () => {
    const n = parseFloat(editRadius)
    if (!isNaN(n) && n >= 1) {
      hero.setRadius(n)
    }
  }

  const applyElasticity = () => {
    const n = parseFloat(editElasticity)
    if (!isNaN(n) && n >= 0 && n <= 1) {
      hero.setElasticity(n)
      setEditElasticity(String(fromFixed(hero.elasticity)))
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
        minWidth: 280,
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
        <Row
          label="位置"
          value={`(${Math.round(fromFixed(hero.x))}, ${Math.round(fromFixed(hero.y))})`}
        />
        <Row
          label="发射向(定点)"
          value={hasLaunched ? `(${d.dirX}, ${d.dirY})` : "(—, —)"}
        />
        <Row
          label="发射向(实数)"
          value={
            hasLaunched
              ? `(${fromFixed(d.dirX).toFixed(3)}, ${fromFixed(d.dirY).toFixed(3)})`
              : "(—, —)"
          }
        />
        <Row
          label="初速度"
          value={hasLaunched ? `${fromFixed(hero.initSpeed).toFixed(1)} px/s` : "—"}
        />
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
        <EditRow
          label="半径"
          value={editRadius}
          onChange={setEditRadius}
          onApply={applyRadius}
        />
        <EditRow
          label="弹性(0-1)"
          value={editElasticity}
          onChange={setEditElasticity}
          onApply={applyElasticity}
        />
      </div>

      <div style={{ marginTop: 8, fontSize: 11, color: "#666" }}>
        Enter 确认修改 · F3 关闭 · 业务态为定点×1000
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "2px 0", gap: 8 }}>
      <span style={{ color: "#999" }}>{label}</span>
      <span style={{ color: "#eee", textAlign: "right" }}>{value}</span>
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
