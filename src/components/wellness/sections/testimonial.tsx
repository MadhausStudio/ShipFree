"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

const quotes = [
  {
    quote:
      "I can laugh, sneeze, and jump with my kids without worrying. Dr. Pickard made me feel comfortable from the very first visit.",
    name: "Spruce Ridge Patient",
    location: "Pelvic Health · Bay Roberts",
  },
  {
    quote:
      "After two children I had given up hope of feeling like myself again. A few sessions later, I have my confidence back.",
    name: "Spruce Ridge Patient",
    location: "Postpartum Care · Bay Roberts",
  },
  {
    quote:
      "Compassionate, professional, and grounded in real surgical expertise. This is exactly what Newfoundland needed.",
    name: "Spruce Ridge Patient",
    location: "Medical Aesthetics · St. John's",
  },
  {
    quote:
      "Finally a clinic that treats women's health like real medicine. Clear answers, no judgment, and a plan that actually worked.",
    name: "Spruce Ridge Patient",
    location: "Women's Wellness · St. John's",
  },
]

function Star() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-ridge-gold"
      aria-hidden="true"
    >
      <path d="M12 2l2.95 6.36L22 9.27l-5.5 4.94L18 22l-6-3.27L6 22l1.5-7.79L2 9.27l7.05-.91L12 2z" />
    </svg>
  )
}

type Quote = (typeof quotes)[number]

function PatientCard({ data }: { data: Quote }) {
  return (
    <article className="flex h-full flex-col rounded-[20px] bg-card p-7 shadow-[0_1px_2px_rgba(15,42,31,0.04),0_8px_24px_-12px_rgba(15,42,31,0.08)] sm:p-8">
      <div className="mb-5 flex items-center gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} />
        ))}
      </div>

      <blockquote className="text-[15px] leading-[1.55] text-deep-forest/85 sm:text-[16px]">
        {data.quote}
      </blockquote>

      <div className="mt-auto flex items-center gap-3 pt-8">
        <div
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist"
        >
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={22}
            height={22}
            className="h-5 w-5 object-contain opacity-90"
          />
        </div>
        <div className="leading-tight">
          <div className="text-[13px] font-medium text-deep-forest">
            {data.name}
          </div>
          <div className="mt-0.5 text-[11px] tracking-[0.06em] text-deep-forest/55">
            {data.location}
          </div>
        </div>
      </div>
    </article>
  )
}

export function Testimonial() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const total = quotes.length

  const change = (dir: number) => {
    setDirection(dir)
    setIndex((i) => (i + dir + total) % total)
  }

  const a = quotes[index]
  const b = quotes[(index + 1) % total]

  const arrowBtn =
    "flex h-11 w-11 items-center justify-center rounded-full bg-card text-deep-forest/70 shadow-[0_1px_2px_rgba(15,42,31,0.06)] transition-all hover:text-deep-forest hover:shadow-[0_2px_8px_rgba(15,42,31,0.1)]"

  return (
    <section className="bg-warm-cream pb-20 sm:pb-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-12">
          {/* LEFT — heading + cards */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-6">
              <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.015em] text-deep-forest sm:text-[52px] lg:text-[64px]">
                What our
                <br />
                patients say
              </h2>
              <div className="mt-3 hidden shrink-0 items-center gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() => change(-1)}
                  aria-label="Previous testimonials"
                  className={arrowBtn}
                >
                  <ArrowLeft size={18} strokeWidth={1.6} />
                </button>
                <button
                  type="button"
                  onClick={() => change(1)}
                  aria-label="Next testimonials"
                  className={arrowBtn}
                >
                  <ArrowRight size={18} strokeWidth={1.6} />
                </button>
              </div>
            </div>

            <div className="mt-10 flex-1 sm:mt-12">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: direction * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -24 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="grid h-full gap-5 sm:grid-cols-2 sm:gap-6"
                >
                  <PatientCard data={a} />
                  <PatientCard data={b} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile arrows */}
            <div className="mt-8 flex items-center gap-2 sm:hidden">
              <button
                type="button"
                onClick={() => change(-1)}
                aria-label="Previous testimonials"
                className={arrowBtn}
              >
                <ArrowLeft size={18} strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={() => change(1)}
                aria-label="Next testimonials"
                className={arrowBtn}
              >
                <ArrowRight size={18} strokeWidth={1.6} />
              </button>
            </div>
          </div>

          {/* RIGHT — image + clinics caption */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] lg:aspect-auto lg:flex-1 lg:min-h-[480px]">
              <Image
                src="/images/Patients.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between gap-4 rounded-[16px] bg-card px-5 py-4 shadow-[0_1px_2px_rgba(15,42,31,0.04),0_8px_24px_-12px_rgba(15,42,31,0.08)] sm:px-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-deep-forest/65">
                  Practicing in
                </div>
                <div className="mt-1 font-serif text-[18px] leading-tight tracking-[-0.01em] text-deep-forest sm:text-[20px]">
                  Bay Roberts &middot; St. John&rsquo;s
                </div>
              </div>
              <div className="hidden text-right text-[11px] tracking-[0.04em] text-deep-forest/55 sm:block">
                Two clinics,
                <br />
                one practice
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
