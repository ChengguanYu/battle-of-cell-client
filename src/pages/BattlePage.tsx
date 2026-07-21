import { useRef, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Hero } from "../entities/Hero"
import { useHero } from "../hooks/useHero"
import { useCamera } from "../hooks/useCamera"
import { GameWorld } from "../components/GameWorld"
import { HeroDot } from "../components/HeroDot"
import { BattleHUD } from "../components/BattleHUD"
import { AimLine } from "../components/AimLine"
import { DebugPanel } from "../components/DebugPanel"

const WORLD_SIZE = 10000
const OUT_OF_BOUNDS = "#050805"

export function BattlePage() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const heroRef = useRef(new Hero(WORLD_SIZE, { radius: 20 }))
  const { cameraX, cameraY, zoom, containerRef } = useCamera(heroRef)
  const { state, isAiming, aimTarget, hero, speedCoefficient, setSpeedCoefficient } = useHero(
    heroRef,
    containerRef,
    { x: cameraX, y: cameraY, zoom },
  )
  const [debugVisible, setDebugVisible] = useState(false)

  // F3 toggle debug panel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "F3") {
        e.preventDefault()
        setDebugVisible((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden select-none"
      style={{ background: OUT_OF_BOUNDS }}
    >
      <GameWorld cameraX={cameraX} cameraY={cameraY} zoom={zoom}>
        <HeroDot x={state.x} y={state.y} radius={hero.radius} />
        <AimLine
          fromX={state.x}
          fromY={state.y}
          toX={aimTarget.x}
          toY={aimTarget.y}
          visible={isAiming}
          maxRange={hero.maxLaunchSpeed}
        />
      </GameWorld>

      <BattleHUD
        roomId={roomId}
        playerX={state.x}
        playerY={state.y}
        zoom={zoom}
        onBack={() => navigate("/home")}
      />

      <DebugPanel
        hero={hero}
        speedCoefficient={speedCoefficient}
        onSpeedCoefficientChange={setSpeedCoefficient}
        visible={debugVisible}
        onClose={() => setDebugVisible(false)}
      />
    </div>
  )
}
