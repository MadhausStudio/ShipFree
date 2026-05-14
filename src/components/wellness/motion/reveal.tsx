"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const easeOut = [0.22, 1, 0.36, 1] as const

type Variant = "up" | "down" | "left" | "right" | "fade" | "scale"

interface RevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  variant?: Variant
  amount?: number
  once?: boolean
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  className,
  variant = "up",
  amount = 24,
  once = true,
}: RevealProps) {
  const variants: Record<Variant, Variants> = {
    up: { hidden: { opacity: 0, y: amount }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -amount }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: amount }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -amount }, visible: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    scale: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  staggerDelay = 0.08,
  childDelay = 0,
  once = true,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  childDelay?: number
  once?: boolean
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: childDelay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  amount = 24,
  duration = 0.8,
}: {
  children: ReactNode
  className?: string
  amount?: number
  duration?: number
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: amount },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
