"use client"

import { useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Sparkles,
  Clock,
  Leaf,
  Stethoscope,
  Syringe,
  Droplet,
  HeartPulse,
} from "lucide-react"
import { useInView } from "framer-motion"

const iconMap = {
  calendar: Calendar,
  sparkles: Sparkles,
  clock: Clock,
  leaf: Leaf,
  stethoscope: Stethoscope,
  syringe: Syringe,
  droplet: Droplet,
  heartPulse: HeartPulse,
} as const

export type IconKey = keyof typeof iconMap

interface MetaItem {
  icon?: IconKey
  label: string
}

const TRANSITION_CLASSES = ["transition-all", "duration-700", "ease-out"]

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  title,
  meta = [],
  initial = 100,
  resting = 50,
  className,
}: {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  title?: string
  meta?: MetaItem[]
  initial?: number
  resting?: number
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const clipRef = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const draggingRef = useRef(false)
  const animatedInRef = useRef(false)
  const inView = useInView(containerRef, { once: true, margin: "-100px" })

  const applyPosition = useCallback((pct: number) => {
    const clamped = Math.max(0, Math.min(100, pct))
    if (clipRef.current) {
      clipRef.current.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`
    }
    if (dividerRef.current) {
      dividerRef.current.style.left = `calc(${clamped}% - 1px)`
    }
    if (handleRef.current) {
      handleRef.current.style.left = `${clamped}%`
    }
  }, [])

  const setTransitionEnabled = useCallback((on: boolean) => {
    const apply = (el: HTMLElement | null) => {
      if (!el) return
      for (const c of TRANSITION_CLASSES) {
        if (on) el.classList.add(c)
        else el.classList.remove(c)
      }
    }
    apply(clipRef.current)
    apply(dividerRef.current)
    apply(handleRef.current)
  }, [])

  // Initial position (no transition)
  useEffect(() => {
    applyPosition(initial)
  }, [initial, applyPosition])

  // First-reveal animation, then drop transitions so drag feels instant
  useEffect(() => {
    if (!inView || animatedInRef.current) return
    let endTimer: ReturnType<typeof setTimeout> | null = null
    const startTimer = setTimeout(() => {
      setTransitionEnabled(true)
      applyPosition(resting)
      animatedInRef.current = true
      endTimer = setTimeout(() => setTransitionEnabled(false), 800)
    }, 400)
    return () => {
      clearTimeout(startTimer)
      if (endTimer) clearTimeout(endTimer)
    }
  }, [inView, resting, applyPosition, setTransitionEnabled])

  const updateFromClient = useCallback(
    (clientX: number) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const pct = ((clientX - rect.left) / rect.width) * 100
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => applyPosition(pct))
    },
    [applyPosition],
  )

  // Global pointer listeners while dragging — survives the cursor leaving the box
  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!draggingRef.current) return
      e.preventDefault()
      updateFromClient(e.clientX)
    }
    const handleUp = () => {
      draggingRef.current = false
    }
    window.addEventListener("pointermove", handleMove, { passive: false })
    window.addEventListener("pointerup", handleUp)
    window.addEventListener("pointercancel", handleUp)
    return () => {
      window.removeEventListener("pointermove", handleMove)
      window.removeEventListener("pointerup", handleUp)
      window.removeEventListener("pointercancel", handleUp)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [updateFromClient])

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/5] cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[24px] bg-soft-stone ${className ?? ""}`}
      onPointerDown={(e) => {
        draggingRef.current = true
        setTransitionEnabled(false)
        updateFromClient(e.clientX)
      }}
    >
      {/* Before (background, full) */}
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="pointer-events-none object-cover"
        draggable={false}
        priority
      />

      {/* After (clipped from left to position) */}
      <div
        ref={clipRef}
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - initial}% 0 0)` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Before label */}
      <span className="pointer-events-none absolute left-5 top-5 rounded-full bg-warm-cream/95 px-4 py-2 text-[12px] font-medium text-deep-forest shadow-[0_4px_12px_rgba(0,0,0,0.08)] sm:left-6 sm:top-6 sm:text-[13px]">
        Before
      </span>
      {/* After label */}
      <span className="pointer-events-none absolute right-5 top-5 rounded-full bg-warm-cream/95 px-4 py-2 text-[12px] font-medium text-deep-forest shadow-[0_4px_12px_rgba(0,0,0,0.08)] sm:right-6 sm:top-6 sm:text-[13px]">
        After
      </span>

      {/* Vertical divider */}
      <div
        ref={dividerRef}
        className="pointer-events-none absolute inset-y-0 w-[2px] bg-warm-cream shadow-[0_0_24px_rgba(245,242,237,0.6)]"
        style={{ left: `calc(${initial}% - 1px)` }}
      />

      {/* Handle */}
      <div
        ref={handleRef}
        className="pointer-events-none absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full bg-warm-cream/95 text-deep-forest shadow-[0_6px_24px_rgba(0,0,0,0.2)] sm:h-14 sm:w-14"
        style={{ left: `${initial}%` }}
      >
        <ChevronLeft size={14} strokeWidth={2.2} />
        <ChevronRight size={14} strokeWidth={2.2} />
      </div>

      {/* Bottom caption card */}
      {(title || meta.length > 0) && (
        <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl bg-deep-forest/35 px-5 py-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:px-7 sm:py-5">
          {title && (
            <div className="font-serif text-[20px] leading-tight text-warm-cream sm:text-[24px]">
              {title}
            </div>
          )}
          {meta.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-warm-cream/90 sm:mt-3 sm:text-[14px]">
              {meta.map(({ icon, label }, i) => {
                const Icon = icon ? iconMap[icon] : null
                return (
                  <span key={i} className="flex items-center gap-2">
                    {Icon && <Icon size={14} strokeWidth={1.6} />}
                    {label}
                  </span>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
