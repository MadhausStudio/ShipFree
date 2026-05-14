"use client"

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { useEffect, useRef } from "react"

export function Counter({
  from = 0,
  to,
  duration = 1.6,
  className,
}: {
  from?: number
  to: number
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const value = useMotionValue(from)
  const rounded = useTransform(value, (v) => Math.round(v).toLocaleString())

  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      })
      return () => controls.stop()
    }
  }, [inView, value, to, duration])

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  )
}
