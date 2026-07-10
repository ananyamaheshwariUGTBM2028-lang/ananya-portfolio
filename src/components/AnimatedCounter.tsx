import { useEffect, useRef, type CSSProperties } from 'react'
import { useInView, animate } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  style?: CSSProperties
}

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1.6,
  className,
  style,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView || !ref.current) return
    const node = ref.current
    const controls = animate(0, value, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(latest) {
        node.textContent = `${prefix}${Math.round(latest).toLocaleString('en-IN')}${suffix}`
      },
    })
    return () => controls.stop()
  }, [isInView, value, duration, prefix, suffix])

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}0{suffix}
    </span>
  )
}
