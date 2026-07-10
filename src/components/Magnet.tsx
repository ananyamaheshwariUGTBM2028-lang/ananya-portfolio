import { useEffect, useRef, useState, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  maxOffset?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  maxOffset = 70,
  activeTransition = 'transform 0.2s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  // measureRef never receives a transform, so its getBoundingClientRect always
  // reflects the true resting layout position -- the transform is applied to
  // an inner element instead, avoiding a self-referential feedback loop where
  // the "center" used for the pull calculation would otherwise drift along
  // with the element as it moves.
  const measureRef = useRef<HTMLDivElement>(null)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const el = measureRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const withinX = e.clientX > rect.left - padding && e.clientX < rect.right + padding
      const withinY = e.clientY > rect.top - padding && e.clientY < rect.bottom + padding

      if (withinX && withinY) {
        setActive(true)
        let x = (e.clientX - centerX) / strength
        let y = (e.clientY - centerY) / strength
        // Clamp to a bounded "orbit" radius so the mascot drifts toward the
        // cursor within a comfortable diameter instead of tracking it
        // indefinitely -- preserves direction, just caps the distance.
        const magnitude = Math.hypot(x, y)
        if (magnitude > maxOffset) {
          const scale = maxOffset / magnitude
          x *= scale
          y *= scale
        }
        setTranslate({ x, y })
      } else {
        setActive(false)
        setTranslate({ x: 0, y: 0 })
      }
    }

    const handleScroll = () => {
      setActive(false)
      setTranslate({ x: 0, y: 0 })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [padding, strength, maxOffset])

  return (
    <div ref={measureRef} className={className}>
      <div
        style={{
          transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
