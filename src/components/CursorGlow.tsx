import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-9999)
  const y = useMotionValue(-9999)
  const springX = useSpring(x, { damping: 40, stiffness: 120, mass: 0.8 })
  const springY = useSpring(y, { damping: 40, stiffness: 120, mass: 0.8 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-0 pointer-events-none rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        width: 500,
        height: 500,
        background:
          'radial-gradient(circle, rgba(255,159,69,0.10) 0%, rgba(255,95,77,0.05) 45%, rgba(255,214,92,0) 75%)',
        mixBlendMode: 'screen',
      }}
    />
  )
}
