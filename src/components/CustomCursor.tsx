import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ACCENT_GRADIENT } from '../data/theme'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"]'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.5 })
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.5 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement
      setHovering(Boolean(target.closest(INTERACTIVE_SELECTOR)))
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full flex items-center justify-center font-black select-none"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        width: hovering ? 34 : 22,
        height: hovering ? 34 : 22,
        fontSize: hovering ? 16 : 11,
        lineHeight: 1,
        color: '#0C0C0C',
        background: ACCENT_GRADIENT,
        transition: 'width 0.2s ease-out, height 0.2s ease-out, font-size 0.2s ease-out',
      }}
    >
      A
    </motion.div>
  )
}
