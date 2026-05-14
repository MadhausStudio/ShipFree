"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

/**
 * Scroll-linked vertical parallax. The child translates between
 * `from` and `to` (in px) as the wrapper crosses the viewport.
 * Honors prefers-reduced-motion.
 */
export function Parallax({
  children,
  from = 60,
  to = -60,
  className,
}: {
  children: ReactNode
  from?: number
  to?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [from, to])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="relative h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}

/**
 * Scroll-linked scale + translate, useful for hero images that gently
 * "settle" as they enter the viewport.
 */
export function ParallaxScale({
  children,
  className,
  fromY = 40,
  toY = -40,
  fromScale = 1.06,
  toScale = 1,
}: {
  children: ReactNode
  className?: string
  fromY?: number
  toY?: number
  fromScale?: number
  toScale?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [fromY, toY])
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduce ? [1, 1, 1] : [fromScale, toScale, fromScale],
  )

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ y, scale }}
        className="relative h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}
