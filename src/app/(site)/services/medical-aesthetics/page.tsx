import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowUpRight,
  ArrowDown,
  Check,
  Plus,
  Sparkles,
  ClipboardList,
  Stethoscope,
  HeartHandshake,
  MessageCircle,
  Wand2,
  Clock,
  Calendar,
  Syringe,
  Droplet,
  Zap,
  Leaf,
} from "lucide-react"
import { SiteHeader } from "@/components/wellness/layout/site-header"
import { SiteFooter } from "@/components/wellness/layout/site-footer"
import { ScrollProgress } from "@/components/wellness/motion/scroll-progress"
import { SectionNav } from "@/components/wellness/motion/section-nav"
import { Reveal } from "@/components/wellness/motion/reveal"
import { WordReveal } from "@/components/wellness/motion/word-reveal"
import { Counter } from "@/components/wellness/motion/counter"
import { BeforeAfter } from "@/components/wellness/motion/before-after"
import { Parallax, ParallaxScale } from "@/components/wellness/motion/parallax"

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://spruceridgewellness.ca"

export const metadata: Metadata = {
  title: "Botox, Fillers & Plexr in Newfoundland | Spruce Ridge Wellness",
  description:
    "Physician-led medical aesthetics in Bay Roberts and St. John's, Newfoundland. Subtle Botox, dermal fillers, Plexr skin tightening, and personalized skin care from Dr. Felicia Pickard, FRCSC. Refreshed results that still look like you.",
  keywords: [
    "medical aesthetics Newfoundland",
    "medical aesthetics St. John's",
    "medical aesthetics Bay Roberts",
    "Botox Newfoundland",
    "Botox Bay Roberts",
    "Botox St. John's",
    "dermal fillers Newfoundland",
    "dermal fillers Bay Roberts",
    "lip fillers Newfoundland",
    "Plexr skin tightening",
    "Plexr Newfoundland",
    "non-surgical eyelid lift Newfoundland",
    "skin tightening St. John's",
    "skin rejuvenation Newfoundland",
    "preventative aesthetics",
    "preventative Botox Newfoundland",
    "anti-aging treatment NL",
    "personalized skin care Newfoundland",
    "FRCSC physician-led aesthetics",
    "Dr. Felicia Pickard medical aesthetics",
    "subtle Botox results",
    "natural-looking aesthetics",
    "Bense Clinic aesthetics",
    "non-surgical lift Newfoundland",
    "neuromodulators Newfoundland",
  ],
  alternates: { canonical: `${SITE_URL}/services/medical-aesthetics` },
  openGraph: {
    title: "Botox, Fillers & Plexr in Newfoundland — Spruce Ridge Wellness",
    description:
      "Physician-led Botox, dermal fillers, Plexr skin tightening, and personalized skin care in Bay Roberts and St. John's, Newfoundland. Refreshed results that still look like you.",
    url: `${SITE_URL}/services/medical-aesthetics`,
    siteName: "Spruce Ridge Wellness",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/images/medical-aesthetics.png",
        width: 1200,
        height: 630,
        alt: "Physician-led medical aesthetics treatment at Spruce Ridge Wellness in Newfoundland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Botox, Fillers & Plexr in Newfoundland — Spruce Ridge Wellness",
    description:
      "Physician-led medical aesthetics in Bay Roberts and St. John's, Newfoundland. Subtle, considered, refined.",
    images: ["/images/medical-aesthetics.png"],
  },
}

const heroChips = [
  "Physician-Led",
  "Health Canada Approved",
  "Bay Roberts · St. John's",
]

const ticker = [
  "Botox",
  "Dermal Fillers",
  "Plexr Skin Tightening",
  "Skin Rejuvenation",
  "Preventative Aesthetics",
  "Personalized Skin Care",
  "Anti-Aging Plans",
  "Subtle Refinement",
]

type Tone = "mist" | "blush" | "soft-stone" | "frost" | "sage" | "forest"

const stats: {
  value: number
  display: string
  suffix?: string
  label: string
  tone: Tone
}[] = [
  {
    value: 7,
    display: "7",
    suffix: "days",
    label: "Until Botox softens lines",
    tone: "blush",
  },
  {
    value: 4,
    display: "4",
    suffix: "months",
    label: "Average Botox duration",
    tone: "mist",
  },
  {
    value: 8,
    display: "8",
    suffix: "weeks",
    label: "Until Plexr fully settles",
    tone: "soft-stone",
  },
  {
    value: 2,
    display: "2",
    suffix: "years",
    label: "Typical Plexr longevity",
    tone: "frost",
  },
]

const approach: {
  icon: typeof Sparkles
  label: string
  body: string
  tone: Tone
}[] = [
  {
    icon: Sparkles,
    label: "Subtle First",
    body: "Refresh, never overdo. Results that look like rest, not work.",
    tone: "blush",
  },
  {
    icon: ClipboardList,
    label: "Plans, Not Pushes",
    body: "Long-term aesthetic strategy, not a one-time treatment to upsell.",
    tone: "sage",
  },
  {
    icon: Stethoscope,
    label: "Medically Grounded",
    body: "FRCSC surgeon-led, physician-administered. Every visit.",
    tone: "forest",
  },
  {
    icon: HeartHandshake,
    label: "Continuity of Care",
    body: "Same physician, same plan, every visit. We grow with you.",
    tone: "mist",
  },
]

const journey: {
  step: string
  title: string
  body: string
  icon: typeof MessageCircle
}[] = [
  {
    step: "01",
    title: "Consult & Plan",
    body:
      "We sit down before we treat. Your face, your goals, your timeline, all the way through. A plan that's yours alone.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Treat with Care",
    body:
      "Physician hands, micro-doses, and a precise touch. We do the smallest amount needed, never more than that.",
    icon: Wand2,
  },
  {
    step: "03",
    title: "Settle & Soften",
    body:
      "Most patients see Botox results in three to seven days. Fillers are immediate. Plexr settles over six to eight weeks.",
    icon: Clock,
  },
  {
    step: "04",
    title: "Maintain & Refine",
    body:
      "Aesthetics is a long game. We adjust gently, season by season, year by year, so you always look like yourself.",
    icon: Calendar,
  },
]

const treatments: {
  icon: typeof Syringe
  title: string
  body: string
}[] = [
  {
    icon: Syringe,
    title: "Botox & Neuromodulators",
    body: "Smooth expression lines and prevent new ones, with the lightest hand.",
  },
  {
    icon: Droplet,
    title: "Dermal Fillers",
    body: "Restore volume and definition without changing your face.",
  },
  {
    icon: Zap,
    title: "Plexr Skin Tightening",
    body: "Non-surgical lift for hooded eyes, jawline, and fine lines.",
  },
  {
    icon: Leaf,
    title: "Personalized Skin Care",
    body: "Clinical-grade routines built around your skin, not someone else's.",
  },
  {
    icon: Sparkles,
    title: "Skin Rejuvenation",
    body: "Targeted treatments for tone, texture, and a calmer complexion.",
  },
  {
    icon: Calendar,
    title: "Preventative Aesthetics",
    body: "Start gently, before lines settle in. Long-term care, started early.",
  },
]

const idealFor = [
  "You want subtle, gradual results that still look like you",
  "You're starting to notice fine lines and want a long-term plan",
  "You'd rather a physician than an aesthetician do your treatments",
  "You're considering preventative care before deeper lines settle in",
  "You've had treatments elsewhere and want a steady, considered hand",
  "You're tired of being upsold and just want honest, clinical advice",
]

const discussFirst = [
  "You are pregnant or breastfeeding",
  "You have an active skin infection at the treatment area",
  "You have a known allergy to neuromodulators or dermal fillers",
  "You have an autoimmune condition that affects skin healing",
  "You take blood thinners or recently had injectables elsewhere",
]

const faqs = [
  {
    q: "Will I look done?",
    a: "No. We treat with micro-doses and physician precision. The goal is refreshed, never frozen or overfilled. If you can tell someone has had something, it has been overdone.",
  },
  {
    q: "How long does Botox last?",
    a: "Three to four months on average, sometimes longer with consistent treatment. Results soften gradually rather than disappearing all at once.",
  },
  {
    q: "When will I see results?",
    a: "Botox softens lines in three to seven days. Dermal fillers are immediate. Plexr settles over six to eight weeks, with results that build over time.",
  },
  {
    q: "Does it hurt?",
    a: "Most patients describe a quick pinch. We use the finest needles and topical numbing where appropriate. Most treatments are over in fifteen to thirty minutes.",
  },
  {
    q: "How much does treatment cost?",
    a: "Pricing depends on the treatment area and product used. We provide a clear estimate at your consultation, and there is no charge for the initial conversation.",
  },
  {
    q: "Is it covered by insurance?",
    a: "Cosmetic treatments are generally not covered by provincial insurance, but some private extended health plans reimburse a portion. We provide detailed receipts.",
  },
  {
    q: "Do I need a referral?",
    a: "No. Most patients self-refer. With your consent, we can also share notes with your family physician.",
  },
  {
    q: "Are both clinics offering aesthetics?",
    a: "Yes. Botox, fillers, Plexr, and personalized skin care are available at our Bay Roberts clinic and our St. John's location at the Bense Clinic.",
  },
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Spruce Ridge Wellness",
      url: SITE_URL,
      telephone: "+1-709-786-9150",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newfoundland and Labrador",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services/medical-aesthetics#webpage`,
      url: `${SITE_URL}/services/medical-aesthetics`,
      name: "Medical Aesthetics at Spruce Ridge Wellness",
      description:
        "Physician-led medical aesthetics in Newfoundland: Botox, dermal fillers, Plexr skin tightening, and personalized skin care across two clinics.",
      isPartOf: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "MedicalProcedure",
      name: "Medical Aesthetics",
      url: `${SITE_URL}/services/medical-aesthetics`,
      procedureType: "https://schema.org/CosmeticProcedure",
      performedBy: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Medical Aesthetics",
          item: `${SITE_URL}/services/medical-aesthetics`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

const toneSurface: Record<Tone, string> = {
  mist: "bg-mist/55",
  blush: "bg-blush",
  "soft-stone": "bg-soft-stone",
  frost: "bg-frost",
  sage: "bg-sage/20",
  forest: "bg-forest/10",
}

const discFill: Record<Tone, string> = {
  sage: "bg-sage text-warm-cream",
  blush: "bg-blush text-deep-forest",
  forest: "bg-forest text-warm-cream",
  mist: "bg-mist text-deep-forest",
  "soft-stone": "bg-soft-stone text-deep-forest",
  frost: "bg-frost text-deep-forest",
}

const discRing: Record<Tone, string> = {
  sage: "border-sage/50",
  blush: "border-deep-forest/15",
  forest: "border-forest/40",
  mist: "border-deep-forest/15",
  "soft-stone": "border-sage/40",
  frost: "border-forest/20",
}

function ChapterMark({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-serif text-[22px] leading-none text-ridge-gold sm:text-[26px]">
        {number}
      </span>
      <span aria-hidden="true" className="h-px w-10 bg-deep-forest/25" />
      <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-forest">
        {label}
      </span>
    </div>
  )
}

export default function MedicalAestheticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollProgress />
      <SiteHeader />
      <SectionNav
        items={[
          { kind: "section", id: "aesthetics-top", label: "Overview" },
          { kind: "section", id: "philosophy", label: "Philosophy" },
          { kind: "section", id: "approach", label: "Approach" },
          { kind: "section", id: "journey", label: "Journey" },
          { kind: "section", id: "treatments", label: "Treatments" },
          { kind: "section", id: "fit", label: "Is It For Me" },
          { kind: "section", id: "faq", label: "FAQ" },
        ]}
      />

      <main className="bg-warm-cream">
        {/* ──────────── HERO ──────────── */}
        <section
          id="aesthetics-top"
          aria-labelledby="aesthetics-headline"
          className="relative scroll-mt-24 overflow-hidden px-4 pt-10 pb-20 sm:px-6 sm:pt-14 sm:pb-28 lg:px-8 lg:pt-20 lg:pb-36"
        >
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Copy */}
            <div className="flex flex-col justify-center lg:col-span-6 lg:pr-4">
              <Reveal duration={0.7}>
                <div className="flex items-center gap-3">
                  <Link
                    href="/services"
                    className="text-[11px] font-medium uppercase tracking-[0.22em] text-deep-forest/55 transition-colors hover:text-deep-forest"
                  >
                    Services
                  </Link>
                  <span aria-hidden="true" className="h-px w-5 bg-deep-forest/30" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-forest">
                    Medical Aesthetics
                  </span>
                </div>
              </Reveal>

              <h1
                id="aesthetics-headline"
                className="mt-7 max-w-[640px] font-serif text-[44px] leading-[1.02] tracking-[-0.012em] text-deep-forest sm:text-[58px] lg:text-[72px]"
              >
                <WordReveal delay={0.1}>Aesthetics,</WordReveal>{" "}
                <WordReveal delay={0.4} className="italic">
                  with a physician&apos;s hand.
                </WordReveal>
              </h1>

              <Reveal delay={0.85} duration={0.9}>
                <p className="mt-7 max-w-[520px] text-[15.5px] leading-[1.7] text-deep-forest/75 sm:text-[17px]">
                  Physician-led aesthetic care across Newfoundland. We listen
                  before we treat, and the plan grows with you season by season.
                  Two clinics: Bay&nbsp;Roberts and the Bense Clinic in
                  St.&nbsp;John&apos;s.
                </p>
              </Reveal>

              <Reveal delay={0.95} duration={0.9}>
                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <a
                    href="https://spruceridgewellness.janeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full bg-ridge-gold px-7 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-warm-cream transition-all hover:gap-4 hover:bg-ridge-gold/90"
                  >
                    Book a Consultation
                    <ArrowUpRight size={14} strokeWidth={1.8} />
                  </a>
                  <a
                    href="#philosophy"
                    className="group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-deep-forest transition-all hover:gap-3"
                  >
                    Our Approach
                    <ArrowDown
                      size={14}
                      strokeWidth={1.6}
                      className="transition-transform group-hover:translate-y-0.5"
                    />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={1.05} duration={0.9}>
                <ul className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10.5px] uppercase tracking-[0.22em] text-deep-forest/65">
                  {heroChips.map((chip) => (
                    <li key={chip} className="flex items-center gap-2.5">
                      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ridge-gold" />
                      {chip}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Image */}
            <div className="relative lg:col-span-6">
              <Reveal variant="scale" duration={1.1}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-soft-stone sm:aspect-[5/6]">
                  <ParallaxScale
                    className="absolute inset-0"
                    fromY={-30}
                    toY={30}
                    fromScale={1.08}
                    toScale={1.02}
                  >
                    <Image
                      src="/images/medical-aesthetics.png"
                      alt="Physician-led Botox treatment at Spruce Ridge Wellness in Newfoundland — Dr. Felicia Pickard, FRCSC"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </ParallaxScale>
                </div>
              </Reveal>

              <Reveal delay={0.4} duration={1}>
                <div className="absolute -bottom-6 -left-3 hidden items-center gap-4 rounded-2xl border border-frost bg-warm-cream/95 px-5 py-4 shadow-[0_18px_60px_-30px_rgba(15,42,31,0.35)] backdrop-blur-sm sm:flex sm:-bottom-8 sm:-left-6 sm:px-6 sm:py-5">
                  <div className="font-serif text-[36px] leading-none text-deep-forest sm:text-[44px]">
                    1:<Counter to={1} duration={1} />
                  </div>
                  <div className="text-[10.5px] uppercase tracking-[0.22em] text-deep-forest/60">
                    Consultation always
                    <br />
                    one-on-one with a physician
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ──────────── KEYWORD MARQUEE ──────────── */}
        <section
          aria-label="Aesthetic treatments offered"
          className="border-y border-frost py-7 sm:py-9"
        >
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-12 pr-12">
              {[...ticker, ...ticker].map((item, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span className="font-serif text-[22px] italic tracking-[-0.01em] text-deep-forest/85 sm:text-[26px]">
                    {item}
                  </span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ridge-gold/70" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────── 01 / OVERVIEW (Philosophy) ──────────── */}
        <section
          id="philosophy"
          className="scroll-mt-24 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <ChapterMark number="01" label="Overview" />
            </Reveal>

            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16 sm:mt-14">
              {/* Before/After slider + stats below */}
              <div className="lg:col-span-6 lg:order-1">
                <Reveal variant="scale" duration={1}>
                  <BeforeAfter
                    beforeSrc="/images/after.png"
                    afterSrc="/images/before.png"
                    beforeAlt="Patient skin before personalized aesthetic treatment at Spruce Ridge Wellness in Newfoundland"
                    afterAlt="Patient skin after personalized aesthetic treatment at Spruce Ridge Wellness in Newfoundland"
                    title="Real results."
                    meta={[
                      { icon: "calendar", label: "12 Weeks" },
                      { icon: "sparkles", label: "Skin rejuvenation" },
                    ]}
                  />
                </Reveal>

                <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5">
                  {stats.map((s, i) => (
                    <Reveal key={s.label} delay={i * 0.07} duration={0.7}>
                      <div
                        className={`group relative h-full overflow-hidden rounded-3xl ${toneSurface[s.tone]} p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(15,42,31,0.25)] sm:p-7`}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-ridge-gold"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute right-5 top-5 flex gap-1"
                        >
                          <span className="h-1 w-1 rounded-full bg-ridge-gold" />
                          <span className="h-1 w-1 rounded-full bg-ridge-gold/60" />
                          <span className="h-1 w-1 rounded-full bg-ridge-gold/30" />
                        </div>
                        <div className="flex items-baseline gap-1.5 pl-3.5">
                          <span className="font-serif text-[44px] leading-none text-deep-forest sm:text-[52px]">
                            <Counter to={s.value} />
                          </span>
                          {s.suffix && (
                            <span className="font-serif text-[20px] text-ridge-gold sm:text-[22px]">
                              {s.suffix}
                            </span>
                          )}
                        </div>
                        <div className="mt-4 pl-3.5 text-[13px] leading-snug text-deep-forest/75 sm:text-[14px]">
                          {s.label}
                        </div>
                        <span
                          aria-hidden="true"
                          className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full border border-ridge-gold/25 transition-all duration-700 group-hover:rotate-90 group-hover:scale-110 sm:h-28 sm:w-28"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute -right-4 -bottom-4 h-12 w-12 rounded-full border border-ridge-gold/35 transition-all duration-700 group-hover:-rotate-90 sm:h-14 sm:w-14"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Sticky text right */}
              <div className="lg:col-span-6 lg:order-2 lg:sticky lg:top-28 lg:self-start">
                <Reveal>
                  <h2 className="font-serif text-[36px] leading-[1.05] tracking-[-0.012em] text-deep-forest sm:text-[46px] lg:text-[56px]">
                    Look like yourself,{" "}
                    <span className="italic">only refreshed.</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-7 space-y-5 text-[15.5px] leading-[1.7] text-deep-forest/80 sm:text-[17px]">
                    <p>
                      Medical aesthetics in Newfoundland deserves the same care
                      as any clinical decision. At Spruce Ridge, every Botox,
                      filler, or Plexr treatment begins with a real
                      conversation. We listen. We explain your options. We lay
                      out a plan that fits your face, your timeline, and your
                      life across Bay&nbsp;Roberts and St.&nbsp;John&apos;s.
                    </p>
                    <p>
                      We do not chase trends. We do not sell packages. We work
                      with the face you already have, soften what bothers you,
                      and protect what makes you, you. The goal is always
                      refreshed, never &quot;done&quot;. You walk out of our
                      Bay&nbsp;Roberts clinic or our St.&nbsp;John&apos;s
                      location at the Bense Clinic looking rested, not
                      retouched.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 02 / OUR APPROACH ──────────── */}
        <section
          id="approach"
          className="scroll-mt-24 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="relative overflow-hidden rounded-[32px] bg-blush/60 px-6 py-16 sm:rounded-[40px] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
              {/* atmospheric gradients */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-ridge-gold/15 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sage/30 blur-3xl"
              />

              <div className="relative">
                <Reveal>
                  <ChapterMark number="02" label="Our Approach" />
                </Reveal>

                <div className="mt-8 max-w-[760px] sm:mt-10">
                  <Reveal delay={0.06}>
                    <h2 className="font-serif text-[34px] leading-[1.05] tracking-[-0.012em] text-deep-forest sm:text-[44px] lg:text-[52px]">
                      Subtle, considered,{" "}
                      <span className="italic">physician-led.</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={0.12}>
                    <p className="mt-6 max-w-[480px] text-[15px] leading-[1.7] text-deep-forest/75 sm:text-[16px]">
                      Four principles behind every treatment at Spruce Ridge.
                    </p>
                  </Reveal>
                </div>

                <div className="mt-12 grid grid-cols-1 items-center gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-[1fr_minmax(260px,360px)_1fr] lg:gap-x-10 lg:gap-y-14">
                  {/* Center image */}
                  <div className="order-first sm:col-span-2 lg:order-none lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2">
                    <Reveal variant="scale" duration={1}>
                      <div className="relative mx-auto aspect-[4/5] max-w-[400px] overflow-hidden rounded-[24px] bg-warm-cream/40 shadow-[0_24px_60px_-30px_rgba(15,42,31,0.25)]">
                        <ParallaxScale
                          className="absolute inset-0"
                          fromY={-20}
                          toY={20}
                          fromScale={1.05}
                          toScale={1.02}
                        >
                          <Image
                            src="/images/Botox.png"
                            alt="Physician-administered Botox treatment in progress at Spruce Ridge Wellness in Newfoundland"
                            fill
                            sizes="(max-width: 1024px) 100vw, 30vw"
                            className="object-cover"
                          />
                        </ParallaxScale>
                      </div>
                    </Reveal>
                  </div>

                  {approach.map(({ icon: Icon, label, body, tone }, i) => {
                    const placement = [
                      "lg:col-start-1 lg:row-start-1",
                      "lg:col-start-3 lg:row-start-1",
                      "lg:col-start-1 lg:row-start-2",
                      "lg:col-start-3 lg:row-start-2",
                    ][i]
                    return (
                      <Reveal
                        key={label}
                        delay={0.06 + i * 0.07}
                        duration={0.8}
                        className={placement}
                      >
                        <div className="group flex flex-col items-center text-center">
                          <span className="relative inline-flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
                            <span
                              aria-hidden="true"
                              className={`absolute -inset-3 rounded-full border ${discRing[tone]} transition-all duration-700 group-hover:-inset-5 group-hover:rotate-180`}
                            />
                            <span
                              aria-hidden="true"
                              className={`absolute -inset-1 rounded-full border border-dashed ${discRing[tone]} transition-transform duration-700 group-hover:rotate-[-90deg]`}
                            />
                            <span
                              className={`relative inline-flex h-full w-full items-center justify-center rounded-full ${discFill[tone]} shadow-[0_18px_40px_-20px_rgba(15,42,31,0.45)] transition-all duration-500 group-hover:scale-[1.06] group-hover:shadow-[0_24px_50px_-18px_rgba(15,42,31,0.55)]`}
                            >
                              <Icon
                                size={32}
                                strokeWidth={1.4}
                                className="transition-transform duration-700 group-hover:scale-110"
                              />
                            </span>
                          </span>
                          <h3 className="mt-8 text-[11.5px] font-medium uppercase tracking-[0.24em] text-deep-forest">
                            {label}
                          </h3>
                          <span
                            aria-hidden="true"
                            className="mt-3 block h-px w-7 bg-ridge-gold/65 transition-all duration-500 group-hover:w-12"
                          />
                          <p className="mt-4 max-w-[220px] text-[13px] leading-[1.6] text-deep-forest/70 sm:text-[13.5px]">
                            {body}
                          </p>
                        </div>
                      </Reveal>
                    )
                  })}
                </div>

                <Reveal variant="fade" delay={0.3}>
                  <p className="mt-12 text-center text-[11px] uppercase tracking-[0.22em] text-deep-forest/45 sm:mt-14">
                    Every plan is built treatment by treatment, never as a package
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 03 / JOURNEY ──────────── */}
        <section
          id="journey"
          className="scroll-mt-24 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <ChapterMark number="03" label="Your Journey" />
            </Reveal>

            <div className="mt-10 flex flex-col gap-6 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">
              <Reveal delay={0.06}>
                <h2 className="max-w-[640px] font-serif text-[34px] leading-[1.08] tracking-[-0.012em] text-deep-forest sm:text-[44px] lg:text-[52px]">
                  Four steps. <span className="italic">No pressure.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="max-w-[360px] text-[14.5px] leading-[1.65] text-deep-forest/70 sm:text-[15px]">
                  Aesthetic care that runs at the speed of conversation, never
                  the rush of an appointment slot.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
              {journey.map(({ step, title, body, icon: Icon }, i) => (
                <Reveal key={step} delay={i * 0.09} duration={0.8}>
                  <div className="group flex h-full flex-col rounded-3xl border border-frost bg-warm-cream p-7 transition-all duration-500 hover:-translate-y-2 hover:border-deep-forest/15 hover:shadow-[0_28px_70px_-30px_rgba(15,42,31,0.22)] sm:p-8">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-[60px] leading-none text-ridge-gold sm:text-[72px]">
                        {step}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-deep-forest/15 transition-all duration-500 group-hover:w-12 group-hover:bg-ridge-gold/70"
                      />
                    </div>

                    <span className="mt-7 inline-flex h-11 w-11 items-center justify-center rounded-full bg-deep-forest text-warm-cream transition-transform duration-700 group-hover:rotate-[360deg]">
                      <Icon size={18} strokeWidth={1.5} />
                    </span>

                    <h3 className="mt-6 font-serif text-[22px] leading-tight text-deep-forest sm:text-[24px]">
                      {title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13.5px] leading-[1.65] text-deep-forest/70 sm:text-[14px]">
                      {body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────── 04 / TREATMENTS ──────────── */}
        <section
          id="treatments"
          className="scroll-mt-24 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="relative overflow-hidden rounded-[32px] bg-deep-forest px-6 py-16 sm:rounded-[40px] sm:px-10 sm:py-20 lg:px-14 lg:py-24">
              {/* Background image with multi-layer dark scrim */}
              <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                <Parallax className="absolute inset-0" from={-50} to={50}>
                  <Image
                    src="/images/botox arm .png"
                    alt=""
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-deep-forest/80" />
                <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/40 via-transparent to-deep-forest/55" />
              </div>

              <div className="relative">
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-[22px] leading-none text-ridge-gold sm:text-[26px]">
                      04
                    </span>
                    <span aria-hidden="true" className="h-px w-10 bg-warm-cream/30" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-mist">
                      Treatments Offered
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.06}>
                  <div className="mt-7 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:items-end sm:justify-between">
                    <h2 className="max-w-[600px] font-serif text-[30px] leading-[1.08] tracking-[-0.012em] text-warm-cream sm:text-[38px] lg:text-[44px]">
                      Treatments,{" "}
                      <span className="italic">tailored to you.</span>
                    </h2>
                    <p className="max-w-[340px] text-[13.5px] leading-[1.65] text-warm-cream/75 sm:text-[14px]">
                      Built treatment by treatment, never as a package. Every
                      plan starts with a conversation.
                    </p>
                  </div>
                </Reveal>

                <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                  {treatments.map(({ icon: Icon, title, body }, i) => (
                    <Reveal key={title} delay={i * 0.05} duration={0.65}>
                      <div className="group h-full rounded-2xl border border-warm-cream/15 bg-deep-forest/70 p-6 transition-colors duration-500 hover:border-warm-cream/35 hover:bg-deep-forest/85 sm:p-7">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-warm-cream/20 text-warm-cream/85">
                              <Icon size={15} strokeWidth={1.6} />
                            </span>
                            <h3 className="font-serif text-[18px] leading-tight text-warm-cream sm:text-[20px]">
                              {title}
                            </h3>
                          </div>
                          <span
                            aria-hidden="true"
                            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-warm-cream/25 text-warm-cream/65 transition-all duration-500 group-hover:rotate-90 group-hover:border-ridge-gold/70 group-hover:text-ridge-gold"
                          >
                            <Plus size={11} strokeWidth={1.7} />
                          </span>
                        </div>
                        <p className="mt-3 text-[13px] leading-[1.6] text-warm-cream/80 sm:text-[13.5px]">
                          {body}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 05 / FIT ──────────── */}
        <section
          id="fit"
          className="scroll-mt-24 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <ChapterMark number="05" label="Is It For Me" />
            </Reveal>

            <div className="mt-10 max-w-[680px] sm:mt-14">
              <Reveal delay={0.06}>
                <h2 className="font-serif text-[34px] leading-[1.08] tracking-[-0.012em] text-deep-forest sm:text-[44px] lg:text-[52px]">
                  An honest fit check.{" "}
                  <span className="italic">No pressure.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-[560px] text-[15px] leading-[1.7] text-deep-forest/75 sm:text-[16px]">
                  We&apos;d rather have a real conversation than a quick
                  booking. Use these as a starting point. Your consultation
                  will get specific to you.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-2">
              <Reveal delay={0.05}>
                <div className="group relative h-full overflow-hidden rounded-[24px] bg-mist/55 p-8 transition-all duration-500 hover:shadow-[0_28px_70px_-30px_rgba(15,42,31,0.22)] sm:p-10">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sage/30 blur-2xl"
                  />
                  <div className="relative flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest text-warm-cream">
                      <Check size={15} strokeWidth={2.2} />
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-deep-forest">
                      Likely a good fit if
                    </span>
                  </div>
                  <ul className="relative mt-7 space-y-4">
                    {idealFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14.5px] leading-[1.6] text-deep-forest/85 sm:text-[15px]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-forest"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="group relative h-full overflow-hidden rounded-[24px] bg-blush p-8 transition-all duration-500 hover:shadow-[0_28px_70px_-30px_rgba(15,42,31,0.22)] sm:p-10">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-ridge-gold/15 blur-2xl"
                  />
                  <div className="relative flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-deep-forest/35 text-deep-forest">
                      <Plus size={14} strokeWidth={2} className="rotate-45" />
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-deep-forest">
                      Talk to us first if
                    </span>
                  </div>
                  <ul className="relative mt-7 space-y-4">
                    {discussFirst.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14.5px] leading-[1.6] text-deep-forest/85 sm:text-[15px]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-deep-forest/55"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="relative mt-7 text-[12.5px] leading-[1.6] text-deep-forest/55 sm:text-[13px]">
                    Not automatic disqualifiers. Just a closer conversation
                    first.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ──────────── 06 / FAQ ──────────── */}
        <section
          id="faq"
          className="scroll-mt-24 px-4 pt-24 pb-24 sm:px-6 sm:pt-32 sm:pb-32 lg:px-8 lg:pt-40 lg:pb-40"
        >
          <div className="mx-auto max-w-[920px]">
            <Reveal>
              <ChapterMark number="06" label="Frequently Asked" />
            </Reveal>

            <div className="mt-8 max-w-[640px] sm:mt-10">
              <Reveal delay={0.06}>
                <h2 className="font-serif text-[30px] leading-[1.08] tracking-[-0.012em] text-deep-forest sm:text-[38px] lg:text-[44px]">
                  Questions, answered{" "}
                  <span className="italic">plainly.</span>
                </h2>
              </Reveal>
            </div>

            <div className="mt-10 divide-y divide-frost border-y border-frost sm:mt-12">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={Math.min(i * 0.03, 0.24)} duration={0.6}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 sm:py-5">
                      <h3 className="font-serif text-[16.5px] leading-snug text-deep-forest transition-colors group-hover:text-forest sm:text-[18px]">
                        {f.q}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-frost text-deep-forest/70 transition-all duration-300 group-open:rotate-45 group-open:border-deep-forest/40 group-open:bg-deep-forest group-open:text-warm-cream"
                      >
                        <Plus size={12} strokeWidth={1.6} />
                      </span>
                    </summary>
                    <p className="max-w-[720px] pb-5 pr-10 text-[13.5px] leading-[1.65] text-deep-forest/70 sm:pb-6 sm:text-[14.5px]">
                      {f.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
