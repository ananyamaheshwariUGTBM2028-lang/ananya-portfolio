import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ACCENT_CORAL, ACCENT_YELLOW } from '../data/theme'

const MESSAGE = "hey — you found me. let's get into it."

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false)
  const words = MESSAGE.split(' ')
  const total = MESSAGE.length
  let runningIndex = 0

  useEffect(() => {
    const showTimer = setTimeout(() => setExiting(true), 2200)
    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!exiting) return
    const hideTimer = setTimeout(onComplete, 600)
    return () => clearTimeout(hideTimer)
  }, [exiting, onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-[#0C0C0C]"
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <p
        className="text-[#D7E2EA] font-medium lowercase text-center px-8"
        style={{ fontSize: 'clamp(1rem, 3vw, 1.6rem)' }}
      >
        {words.map((word, wi) => {
          const chars = word.split('')
          const startIndex = runningIndex
          runningIndex += word.length + 1

          return (
            <span key={wi} className="inline-block whitespace-nowrap">
              {chars.map((char, ci) => (
                <motion.span
                  key={ci}
                  className="inline-block"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + (startIndex + ci) * 0.025,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
              {wi < words.length - 1 && <span style={{ whiteSpace: 'pre' }}> </span>}
            </span>
          )
        })}
      </p>
      <motion.div
        className="rounded-full"
        style={{
          width: 34,
          height: 34,
          background: `conic-gradient(from 0deg, transparent, ${ACCENT_CORAL}, ${ACCENT_YELLOW}, transparent)`,
          WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
        }}
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          opacity: { delay: 0.3 + total * 0.025, duration: 0.4 },
          rotate: { delay: 0.3 + total * 0.025, duration: 1, repeat: Infinity, ease: 'linear' },
        }}
      />
    </motion.div>
  )
}
