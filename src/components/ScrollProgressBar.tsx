import { motion, useScroll, useSpring } from 'framer-motion'
import { ACCENT_GRADIENT } from '../data/theme'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { damping: 30, stiffness: 200, mass: 0.3 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[90] origin-left"
      style={{ scaleX, background: ACCENT_GRADIENT }}
    />
  )
}
