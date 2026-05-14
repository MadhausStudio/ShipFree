"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { WordReveal } from "@/components/wellness/motion/word-reveal"

export interface Offer {
  eyebrow: string
  label: string
  body: string
  image: string
  alt: string
  href: string
}

const easeOut = [0.22, 1, 0.36, 1] as const

export function PromotionsAccordion({ offers }: { offers: Offer[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
      {/* Left — page hero */}
      <div className="flex flex-col justify-center lg:col-span-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="flex items-center gap-3"
        >
          <Link
            href="/"
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-deep-forest/55 transition-colors hover:text-deep-forest"
          >
            Spruce Ridge
          </Link>
          <span aria-hidden="true" className="h-px w-5 bg-deep-forest/30" />
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-forest">
            Promotions
          </span>
        </motion.div>

        <h1 className="mt-7 font-serif text-[44px] leading-[1.02] tracking-[-0.012em] text-deep-forest sm:text-[58px] lg:text-[68px]">
          <WordReveal delay={0.1}>Booking</WordReveal>{" "}
          <WordReveal delay={0.4} className="italic">
            is open.
          </WordReveal>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.7, ease: easeOut }}
          className="mt-7 max-w-[420px] text-[15.5px] leading-[1.7] text-deep-forest/75 sm:text-[17px]"
        >
          Two promotions, both currently live at Spruce Ridge. Pick the one that
          fits and book at whichever clinic is closer to home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.85, ease: easeOut }}
          className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"
        >
          <a
            href="https://spruceridgewellness.janeapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-ridge-gold px-7 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-warm-cream transition-all hover:gap-4 hover:bg-ridge-gold/90"
          >
            Book a Consultation
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.95, ease: easeOut }}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10.5px] uppercase tracking-[0.22em] text-deep-forest/65"
        >
          {[
            "Physician-Led",
            "Bay Roberts · St. John's",
            "Currently Live",
          ].map((chip) => (
            <li key={chip} className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ridge-gold" />
              {chip}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Right — accordion */}
      <div className="lg:col-span-8">
        {/* Mobile: stacked cards (each fully visible) */}
        <div className="grid gap-4 lg:hidden">
          {offers.map((offer, i) => (
            <article
              key={i}
              className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-deep-forest"
            >
              <Image
                src={offer.image}
                alt={offer.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-deep-forest/30 via-deep-forest/15 to-deep-forest/85"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-7 top-3 h-px bg-ridge-gold/45"
              />
              <div className="absolute left-7 top-7">
                <span className="text-[10.5px] font-medium uppercase tracking-[0.24em] text-ridge-gold">
                  {offer.eyebrow}
                </span>
              </div>
              <div className="absolute inset-x-7 bottom-7">
                <h3 className="font-serif text-[28px] leading-[1.08] text-warm-cream">
                  {offer.label}
                </h3>
                <p className="mt-3 max-w-[420px] text-[13.5px] leading-[1.65] text-warm-cream/85">
                  {offer.body}
                </p>
                <a
                  href={offer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-ridge-gold px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-warm-cream transition-all hover:gap-3 hover:bg-ridge-gold/90"
                >
                  Book this
                  <ArrowUpRight size={13} strokeWidth={1.6} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: horizontal accordion */}
        <div className="hidden h-[620px] gap-3 lg:flex">
          {offers.map((offer, i) => {
            const isActive = i === active
            return (
              <motion.button
                key={i}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                aria-label={`${offer.eyebrow} — ${offer.label}`}
                animate={{ flexGrow: isActive ? 6 : 1 }}
                transition={{ duration: 0.7, ease: easeOut }}
                style={{ flexBasis: 0 }}
                className="group relative h-full min-w-0 cursor-pointer overflow-hidden rounded-[24px] bg-deep-forest text-left outline-none ring-ridge-gold/60 ring-offset-2 ring-offset-warm-cream focus-visible:ring-2"
              >
                <Image
                  src={offer.image}
                  alt={offer.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Layered scrim — lighter on the active card so the photo breathes */}
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0"
                  animate={{
                    background: isActive
                      ? "linear-gradient(to bottom, rgba(15,42,31,0.20) 0%, rgba(15,42,31,0.10) 35%, rgba(15,42,31,0.85) 100%)"
                      : "linear-gradient(to bottom, rgba(15,42,31,0.70) 0%, rgba(15,42,31,0.70) 50%, rgba(15,42,31,0.92) 100%)",
                  }}
                  transition={{ duration: 0.6, ease: easeOut }}
                />

                {/* Hairline accent at top of every card */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 top-3 h-px bg-ridge-gold/45"
                />

                {/* INACTIVE state: only the rotated vertical label */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      key="vertical"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: easeOut, delay: 0.1 }}
                      className="pointer-events-none absolute inset-y-12 left-1/2 flex -translate-x-1/2 items-center justify-center"
                    >
                      <span
                        className="whitespace-nowrap font-serif text-[26px] tracking-tight text-warm-cream sm:text-[28px]"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {offer.label}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ACTIVE state: eyebrow top + content bottom */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="eyebrow"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35, ease: easeOut, delay: 0.2 }}
                      className="absolute left-8 top-8"
                    >
                      <span className="text-[10.5px] font-medium uppercase tracking-[0.24em] text-ridge-gold">
                        {offer.eyebrow}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 14 }}
                      transition={{ duration: 0.45, ease: easeOut, delay: 0.2 }}
                      className="absolute inset-x-8 bottom-8"
                    >
                      <h3 className="font-serif text-[32px] leading-[1.06] tracking-[-0.005em] text-warm-cream sm:text-[40px] lg:text-[44px]">
                        {offer.label}
                      </h3>
                      <p className="mt-4 max-w-[480px] text-[14px] leading-[1.65] text-warm-cream/85 sm:text-[15px]">
                        {offer.body}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-ridge-gold px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-warm-cream transition-all group-hover:gap-3 group-hover:bg-ridge-gold/90">
                        Book this
                        <ArrowUpRight size={13} strokeWidth={1.6} />
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Booking link covers the active card */}
                {isActive && (
                  <a
                    href={offer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${offer.label}`}
                    className="absolute inset-0 z-10"
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
