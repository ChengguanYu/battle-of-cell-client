import { useEffect, useState } from "react"
import type { BattleWorld } from "../entities/BattleWorld"
import type { Hero } from "../entities/Hero"
import type { ObstacleField } from "../entities/ObstacleField"
import { frameBuffer } from "../services/frameBuffer"
import { stepHero } from "../services/heroSimulation"
import { applyServerFrame } from "../services/serverFrameSimulation"

/**
 * 订阅服务端帧，生成其他玩家 Hero，并在本地 rAF 中推进其运动。
 * 只消费挂载后新到的帧，不做历史帧回放。
 */
export function useRemoteHeroes(
  world: BattleWorld,
  obstacleField: ObstacleField,
): readonly Hero[] {
  const [remoteHeroes, setRemoteHeroes] = useState<readonly Hero[]>([])

  useEffect(() => {
    let unsubscribes: Array<() => void> = []
    let rafId = 0
    let prevTime = 0

    const refresh = () => {
      for (const unsubscribe of unsubscribes) unsubscribe()
      unsubscribes = world.remoteHeroes.map((hero) =>
        hero.onChange(() => {
          setRemoteHeroes([...world.remoteHeroes])
        }),
      )
      setRemoteHeroes([...world.remoteHeroes])
    }

    const tick = (timestamp: number) => {
      if (prevTime === 0) {
        prevTime = timestamp
        rafId = requestAnimationFrame(tick)
        return
      }
      const dt = Math.min((timestamp - prevTime) / 1000, 0.05)
      prevTime = timestamp
      for (const hero of world.remoteHeroes) {
        stepHero(hero, dt, () => {
          obstacleField.resolve(hero)
        })
      }
      rafId = requestAnimationFrame(tick)
    }

    refresh()

    const unsubscribeFrame = frameBuffer.onFrame((_, frame) => {
      applyServerFrame(world, frame)
      refresh()
    })
    rafId = requestAnimationFrame(tick)

    return () => {
      unsubscribeFrame()
      cancelAnimationFrame(rafId)
      for (const unsubscribe of unsubscribes) unsubscribe()
    }
  }, [world, obstacleField])

  return remoteHeroes
}
