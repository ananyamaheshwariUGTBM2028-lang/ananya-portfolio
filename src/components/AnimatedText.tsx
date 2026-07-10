import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

function Char({ char, progress, index, total }: { char: string; progress: ReturnType<typeof useScroll>['scrollYProgress']; index: number; total: number }) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')
  const total = text.length
  let runningIndex = 0

  return (
    <p ref={ref} className={className}>
      {words.map((word, wi) => {
        const chars = word.split('')
        const startIndex = runningIndex
        runningIndex += word.length + 1

        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {chars.map((char, ci) => (
              <Char key={ci} char={char} progress={scrollYProgress} index={startIndex + ci} total={total} />
            ))}
            {wi < words.length - 1 && <span style={{ whiteSpace: 'pre' }}> </span>}
          </span>
        )
      })}
    </p>
  )
}
