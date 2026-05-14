"use client"

import { motion } from "framer-motion"

const easeOut = [0.22, 1, 0.36, 1] as const

export function WordReveal({
  children,
  delay = 0,
  duration = 0.8,
  stagger = 0.07,
  className,
}: {
  children: string
  delay?: number
  duration?: number
  stagger?: number
  className?: string
}) {
  const words = children.split(" ")
  return (
    <span aria-label={children} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration,
            delay: delay + i * stagger,
            ease: easeOut,
          }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  )
}
