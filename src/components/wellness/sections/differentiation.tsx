"use client"

import Image from "next/image"
import Link from "next/link"
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { useRef } from "react"
import {
  ArrowUpRight,
  BadgeCheck,
  FlaskConical,
  HeartHandshake,
  MapPin,
  Stethoscope,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Pillar = {
  number: string
  title: string
  body: string
  icon: LucideIcon
  image: string
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Surgeon-Led",
    body: "Real surgical training, applied with the patience of a private practice. The rigor of a hospital, without the rush.",
    icon: Stethoscope,
    image: "/images/surgeon-led.png",
  },
  {
    number: "02",
    title: "Locally Rooted",
    body: "World-class technology, right here in Newfoundland. Care that was previously only available in major urban centres.",
    icon: MapPin,
    image: "/images/nature.jpg",
  },
  {
    number: "03",
    title: "Science-First",
    body: "Evidence-based recommendations only. Health Canada approved technology over trends. Research over hype.",
    icon: FlaskConical,
    image: "/images/science.png",
  },
  {
    number: "04",
    title: "Stigma-Free",
    body: "A safe, judgment-free space for open conversation. No question is too small. No concern is too personal.",
    icon: HeartHandshake,
    image: "/images/stigma.png",
  },
]

// Scroll budget — pillars enter sequentially, then exit together, then the
// Meet Dr. Pickard slide rises into the same stage.
const PILLAR_ENTRY_WIDTH = 0.13
const PILLAR_ENTRY_OFFSET = 0.04
const PILLARS_EXIT_START = 0.66
const PILLARS_EXIT_END = 0.76
const DOCTOR_START = 0.74
const DOCTOR_SETTLE = 0.88

type PillarCardProps = {
  pillar: Pillar
  index: number
  progress: MotionValue<number>
}

function PillarCard({ pillar, index, progress }: PillarCardProps) {
  const enterStart = PILLAR_ENTRY_OFFSET + index * PILLAR_ENTRY_WIDTH
  const enterEnd = enterStart + PILLAR_ENTRY_WIDTH

  // Card slides up from below into its slot, holds, then exits up + fades.
  const opacity = useTransform(
    progress,
    [enterStart, enterEnd, PILLARS_EXIT_START, PILLARS_EXIT_END],
    [0, 1, 1, 0],
  )
  const y = useTransform(
    progress,
    [enterStart, enterEnd, PILLARS_EXIT_START, PILLARS_EXIT_END],
    [60, 0, 0, -40],
  )
  const scale = useTransform(
    progress,
    [enterStart, enterEnd, PILLARS_EXIT_START, PILLARS_EXIT_END],
    [0.92, 1, 1, 0.96],
  )

  const Icon = pillar.icon

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="relative flex h-[440px] w-[240px] shrink-0 flex-col overflow-hidden rounded-[26px] border border-frost bg-warm-cream shadow-[0_30px_60px_-30px_rgba(15,42,31,0.2)] sm:h-[480px] sm:w-[260px] lg:h-[500px] lg:w-[280px]"
    >
      {/* Hero image */}
      <div className="relative h-[55%] w-full overflow-hidden">
        <Image
          src={pillar.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 260px, 280px"
          className="object-cover"
        />
        <span className="absolute right-4 top-4 font-serif text-[14px] tracking-[-0.01em] text-warm-cream/90 mix-blend-difference">
          {pillar.number}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <Icon
          size={24}
          strokeWidth={1.1}
          className="text-sage"
          aria-hidden
        />
        <div>
          <h3 className="font-serif text-[24px] leading-[1.05] tracking-[-0.005em] text-deep-forest sm:text-[26px] lg:text-[28px]">
            {pillar.title}
          </h3>
          <p className="mt-3 text-[12.5px] leading-[1.55] text-deep-forest/65 sm:text-[13px]">
            {pillar.body}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

type MeetDoctorSlideProps = {
  progress: MotionValue<number>
}

function MeetDoctorSlide({ progress }: MeetDoctorSlideProps) {
  // Enters from below the viewport, settles, then layered sub-elements fade in.
  const y = useTransform(
    progress,
    [DOCTOR_START, DOCTOR_SETTLE, 1],
    ["80vh", "0vh", "0vh"],
  )
  const opacity = useTransform(
    progress,
    [DOCTOR_START, DOCTOR_START + 0.04, 1],
    [0, 1, 1],
  )

  const eyebrowOpacity = useTransform(
    progress,
    [DOCTOR_SETTLE - 0.02, DOCTOR_SETTLE + 0.02],
    [0, 1],
  )
  const headingOpacity = useTransform(
    progress,
    [DOCTOR_SETTLE, DOCTOR_SETTLE + 0.04],
    [0, 1],
  )
  const headingY = useTransform(
    progress,
    [DOCTOR_SETTLE, DOCTOR_SETTLE + 0.04],
    [16, 0],
  )
  const bodyOpacity = useTransform(
    progress,
    [DOCTOR_SETTLE + 0.02, DOCTOR_SETTLE + 0.06],
    [0, 1],
  )
  const bulletsOpacity = useTransform(
    progress,
    [DOCTOR_SETTLE + 0.04, DOCTOR_SETTLE + 0.08],
    [0, 1],
  )
  const ctaOpacity = useTransform(
    progress,
    [DOCTOR_SETTLE + 0.06, DOCTOR_SETTLE + 0.1],
    [0, 1],
  )
  const credentialOpacity = useTransform(
    progress,
    [DOCTOR_SETTLE + 0.03, DOCTOR_SETTLE + 0.07],
    [0, 1],
  )

  const bullets = [
    { icon: BadgeCheck, text: "FRCSC-certified general surgeon" },
    { icon: Stethoscope, text: "Surgical-grade clinical assessment" },
    { icon: HeartHandshake, text: "Care at the pace of conversation" },
  ]

  return (
    <motion.div
      style={{ y, opacity }}
      className="absolute inset-0 flex items-center"
    >
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Portrait card with name overlay */}
        <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[32px] bg-soft-stone">
          <Image
            src="/images/dr-felicia.png"
            alt="Dr. Felicia Pickard, founder of Spruce Ridge Wellness"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-top"
            priority
          />
          <motion.div
            style={{ opacity: credentialOpacity }}
            className="absolute inset-x-5 bottom-5 rounded-2xl bg-deep-forest/55 p-5 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6"
          >
            <h4 className="font-serif text-[22px] leading-[1.05] text-warm-cream sm:text-[26px]">
              Dr. Felicia Pickard
            </h4>
            <p className="mt-1.5 text-[10.5px] uppercase tracking-[0.22em] text-warm-cream/75">
              FRCSC General Surgeon
            </p>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          {/* Eyebrow pill */}
          <motion.div
            style={{ opacity: eyebrowOpacity }}
            className="inline-flex items-center gap-2 self-start rounded-full bg-soft-stone px-4 py-2"
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-forest"
            />
            <span className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-deep-forest">
              Meet Dr. Pickard
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h3
            style={{ opacity: headingOpacity, y: headingY }}
            className="mt-6 max-w-[560px] font-serif text-[36px] leading-[1.02] tracking-[-0.01em] text-deep-forest sm:text-[48px] lg:text-[60px]"
          >
            A surgeon committed{" "}
            <span className="italic">to listening.</span>
          </motion.h3>

          {/* Body */}
          <motion.p
            style={{ opacity: bodyOpacity }}
            className="mt-6 max-w-[520px] text-[14.5px] leading-[1.65] text-deep-forest/70 sm:text-[15.5px]"
          >
            Dr. Felicia Pickard is a practicing general surgeon with firsthand
            experience treating pelvic floor conditions. She built Spruce
            Ridge Wellness to bring surgical expertise and wellness-first
            care to women across Newfoundland.
          </motion.p>

          {/* Bullet list with icon badges */}
          <motion.ul
            style={{ opacity: bulletsOpacity }}
            className="mt-8 space-y-3"
          >
            {bullets.map((b) => {
              const Icon = b.icon
              return (
                <li key={b.text} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-warm-cream shadow-[0_6px_18px_-8px_rgba(15,42,31,0.22)]">
                    <Icon
                      size={18}
                      strokeWidth={1.4}
                      className="text-forest"
                      aria-hidden
                    />
                  </span>
                  <span className="text-[14px] text-deep-forest sm:text-[15px]">
                    {b.text}
                  </span>
                </li>
              )
            })}
          </motion.ul>

          {/* CTA */}
          <motion.div style={{ opacity: ctaOpacity }} className="mt-10">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-full bg-deep-forest py-3 pl-3 pr-6 text-[14px] tracking-tight text-warm-cream transition-all hover:bg-forest"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-cream/15 transition-colors group-hover:bg-warm-cream/25">
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
              More about Dr. Pickard
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function Differentiation() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  return (
    <section
      id="approach"
      ref={ref}
      className="relative bg-mist/30"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Topographic background lines */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          {[160, 280, 400, 520, 640, 760].map((yLine, i) => (
            <path
              key={yLine}
              d={`M0 ${yLine} Q360 ${yLine - 50} 720 ${yLine} T1440 ${yLine}`}
              stroke="var(--frost)"
              strokeWidth="1"
              opacity={0.85 - i * 0.1}
            />
          ))}
        </svg>

        {/* Header — pinned at top */}
        <div className="relative mx-auto max-w-[1400px] px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[640px]"
          >
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-forest">
                What Sets Us Apart
              </span>
              <span aria-hidden className="h-px w-10 bg-ridge-gold/70" />
            </div>
            <h2 className="mt-5 font-serif text-[36px] leading-[1.04] tracking-[-0.01em] text-deep-forest sm:text-[48px] lg:text-[58px]">
              The pieces,{" "}
              <span className="italic">brought together.</span>
            </h2>
          </motion.div>
        </div>

        {/* Card stack — 4 pillars slide in one by one and sit side by side */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-6">
            {pillars.map((pillar, i) => (
              <PillarCard
                key={pillar.title}
                pillar={pillar}
                index={i}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Doctor takeover slide */}
        <MeetDoctorSlide progress={scrollYProgress} />
      </div>
    </section>
  )
}
