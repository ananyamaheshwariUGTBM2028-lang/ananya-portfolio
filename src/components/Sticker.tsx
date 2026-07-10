import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface StickerProps {
  label: string
  color: string
  story: string
  className?: string
  duration?: number
  rotate?: number
}

export default function Sticker({ label, color, story, className = '', duration = 5, rotate = -6 }: StickerProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className={`absolute rounded-full font-black uppercase text-center items-center justify-center ${className}`}
        style={{
          background: color,
          color: '#0C0C0C',
          padding: '1.1rem 1.3rem',
          fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
          lineHeight: 1.15,
          boxShadow: '0 10px 28px rgba(0,0,0,0.4)',
        }}
        initial={{ rotate }}
        animate={{ y: [0, -14, 0], rotate: [rotate - 4, rotate + 4, rotate - 4] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.12 }}
      >
        {label}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/70 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="max-w-md rounded-[32px] p-8 text-center"
              style={{ background: color, color: '#0C0C0C' }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-black uppercase tracking-wide mb-4 text-sm">{label}</p>
              <p className="font-medium leading-relaxed">{story}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-6 text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
              >
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
