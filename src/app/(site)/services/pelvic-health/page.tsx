import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowUpRight,
  ArrowDown,
  Check,
  Plus,
  Bone,
  Baby,
  Microscope,
  HeartPulse,
  Stethoscope,
  Activity,
  LineChart,
  Sparkles,
} from "lucide-react"
import { SiteHeader } from "@/components/wellness/layout/site-header"
import { SiteFooter } from "@/components/wellness/layout/site-footer"
import { ScrollProgress } from "@/components/wellness/motion/scroll-progress"
import { SectionNav } from "@/components/wellness/motion/section-nav"
import { Reveal } from "@/components/wellness/motion/reveal"
import { WordReveal } from "@/components/wellness/motion/word-reveal"
import { Counter } from "@/components/wellness/motion/counter"

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://spruceridgewellness.ca"

export const metadata: Metadata = {
  title:
    "Pelvic Health & BTL Emsella in Newfoundland | Spruce Ridge Wellness",
  description:
    "Surgeon-led BTL Emsella pelvic floor therapy at Spruce Ridge Wellness in Bay Roberts and St. John's, Newfoundland. Non-invasive, Health Canada approved care for incontinence, postpartum recovery, prolapse, and pelvic floor weakness.",
  keywords: [
    "pelvic floor therapy Newfoundland",
    "BTL Emsella Newfoundland",
    "BTL Emsella Bay Roberts",
    "BTL Emsella St. John's",
    "Emsella chair Newfoundland",
    "incontinence treatment Newfoundland",
    "stress incontinence treatment NL",
    "urge incontinence treatment NL",
    "bladder leakage treatment Newfoundland",
    "postpartum recovery Newfoundland",
    "postpartum pelvic floor care",
    "pelvic floor weakness",
    "pelvic floor specialist Newfoundland",
    "non-invasive pelvic care",
    "non-surgical incontinence treatment",
    "Kegel alternative",
    "FRCSC surgeon-led pelvic care",
    "Dr. Felicia Pickard pelvic health",
    "menopause pelvic health Newfoundland",
    "Bense Clinic pelvic health",
    "women's pelvic wellness Newfoundland",
  ],
  alternates: { canonical: `${SITE_URL}/services/pelvic-health` },
  openGraph: {
    title: "Pelvic Health & BTL Emsella in Newfoundland",
    description:
      "Surgeon-led BTL Emsella pelvic floor therapy in Bay Roberts and St. John's, Newfoundland. Non-invasive, Health Canada approved care for incontinence, postpartum recovery, and pelvic floor weakness.",
    url: `${SITE_URL}/services/pelvic-health`,
    siteName: "Spruce Ridge Wellness",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/images/pelvic.png",
        width: 1200,
        height: 630,
        alt: "BTL Emsella pelvic floor therapy at Spruce Ridge Wellness, Newfoundland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelvic Health & BTL Emsella in Newfoundland",
    description:
      "Non-invasive, surgeon-led pelvic floor therapy in Newfoundland.",
    images: ["/images/pelvic.png"],
  },
}

const heroChips = [
  "FRCSC Surgeon-Led",
  "Health Canada Approved",
  "Bay Roberts · St. John's",
]

const ticker = [
  "Stress Incontinence",
  "Urge Incontinence",
  "Postpartum Recovery",
  "Pelvic Floor Weakness",
  "Bladder Leakage",
  "Hormonal & Intimate Health",
  "Core Re-engagement",
  "Menopause Support",
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
    value: 95,
    display: "95",
    suffix: "%",
    label: "Patients report a better quality of life",
    tone: "mist",
  },
  {
    value: 70,
    display: "70",
    suffix: "%+",
    label: "Less reliance on pads, day to day",
    tone: "blush",
  },
  {
    value: 28,
    display: "28",
    suffix: "min",
    label: "Per session, fully clothed",
    tone: "soft-stone",
  },
  {
    value: 6,
    display: "6",
    label: "Sessions across three weeks",
    tone: "frost",
  },
]

const safetyHighlights: {
  icon: typeof Bone
  label: string
  body: string
  tone: Tone
}[] = [
  {
    icon: Bone,
    label: "Metal Implants",
    body: "Safe alongside hip, knee, and other non-pelvic metal implants.",
    tone: "sage",
  },
  {
    icon: Baby,
    label: "Pregnancy",
    body: "Non-invasive postpartum care, no needles, no downtime.",
    tone: "blush",
  },
  {
    icon: Microscope,
    label: "Tumor",
    body: "Non-thermal, non-radiation, clinically proven technology.",
    tone: "forest",
  },
  {
    icon: HeartPulse,
    label: "Heart Disorders",
    body: "Suitable for most cardiac patients. We screen for pacemakers at intake.",
    tone: "mist",
  },
]

const journey: {
  step: string
  title: string
  body: string
  icon: typeof Stethoscope
}[] = [
  {
    step: "01",
    title: "Listen & Assess",
    body:
      "We sit down before we treat. Your history, your goals, your concerns, all the way through. No rushing, no judgement, no pressure.",
    icon: Stethoscope,
  },
  {
    step: "02",
    title: "Sit & Strengthen",
    body:
      "Settle into the Emsella chair, fully clothed. For 28 minutes, focused electromagnetic pulses do the work of thousands of Kegels while you read, scroll, or simply breathe.",
    icon: Activity,
  },
  {
    step: "03",
    title: "Reassess & Refine",
    body:
      "Every session opens with a check in. We track how you are responding and tune the intensity to match how your pelvic floor is rebuilding.",
    icon: LineChart,
  },
  {
    step: "04",
    title: "Live the Difference",
    body:
      "Stronger bladder control, less urgency, a quieter relationship with your body. Most patients notice changes within two to four weeks.",
    icon: Sparkles,
  },
]

const conditions = [
  {
    title: "Stress Incontinence",
    body: "Leaks when you cough, laugh, sneeze, or work out.",
  },
  {
    title: "Urge Incontinence",
    body: "Sudden urgency, frequent bathroom trips, the feeling you cannot hold it.",
  },
  {
    title: "Postpartum Weakness",
    body: "Core and pelvic floor changes that did not fully bounce back.",
  },
  {
    title: "Mild Prolapse",
    body: "Pressure or heaviness that responds to non-surgical strengthening.",
  },
  {
    title: "Intimate Satisfaction",
    body: "Reduced sensation or weakened tone affecting intimacy.",
  },
  {
    title: "Menopausal Changes",
    body: "Hormonal shifts loosening your pelvic support over time.",
  },
]

const idealFor = [
  "You leak when you cough, laugh, sneeze, or work out",
  "You're postpartum and your core or pelvic floor still feels weak",
  "You feel sudden urgency or run to the bathroom too often",
  "You want a non-invasive option before considering surgery",
  "You're heading into menopause and noticing pelvic changes",
  "Your pelvic health is affecting your confidence or intimacy",
]

const discussFirst = [
  "You have a pacemaker or implanted defibrillator",
  "You are currently pregnant",
  "You have a copper IUD or active implant near the pelvis",
  "You have severe (Grade 3+) pelvic organ prolapse",
  "You have an active pelvic infection or unhealed surgical site",
]

const faqs = [
  {
    q: "Does it hurt?",
    a: "No. You stay fully clothed and feel a gentle tingling and contracting sensation throughout the session. Most patients describe it as oddly relaxing.",
  },
  {
    q: "How many sessions will I need?",
    a: "Six sessions, twice a week over three weeks. Most patients notice a difference by session two or three, and results continue to build for weeks afterward.",
  },
  {
    q: "When will I see results?",
    a: "Most patients see improvements in bladder control and core strength within two to four weeks of starting. Final results typically settle in a few weeks after your last session.",
  },
  {
    q: "Is it safe after childbirth?",
    a: "Yes, once your physician has cleared you. Typically that's around six weeks postpartum, a little longer after a C-section.",
  },
  {
    q: "Is it covered by insurance?",
    a: "Provincial insurance does not cover Emsella, but many private extended health plans reimburse part of the cost. We provide detailed receipts for your provider.",
  },
  {
    q: "Do I need a referral?",
    a: "No. Most patients self-refer. With your consent, we can also coordinate notes with your family physician.",
  },
  {
    q: "What should I wear?",
    a: "Anything comfortable. We'll ask you to remove metal items like belts and large buckles before the session.",
  },
  {
    q: "Are both clinics offering Emsella?",
    a: "Yes. BTL Emsella and pelvic health care are available at our Bay Roberts clinic and our St. John's location at the Bense Clinic.",
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
      "@id": `${SITE_URL}/services/pelvic-health#webpage`,
      url: `${SITE_URL}/services/pelvic-health`,
      name: "Pelvic Health at Spruce Ridge Wellness",
      description:
        "Surgeon-led, non-invasive pelvic floor therapy with BTL Emsella, postpartum recovery, and incontinence support across two Newfoundland clinics.",
      isPartOf: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "MedicalProcedure",
      name: "BTL Emsella Pelvic Floor Therapy",
      url: `${SITE_URL}/services/pelvic-health`,
      procedureType: "https://schema.org/PhysicalTherapy",
      bodyLocation: "Pelvic floor",
      howPerformed:
        "Patient sits fully clothed on the Emsella chair while high-intensity focused electromagnetic technology delivers approximately 11,000 supramaximal pelvic floor contractions over a 28-minute session.",
      indication: [
        { "@type": "MedicalCondition", name: "Stress urinary incontinence" },
        { "@type": "MedicalCondition", name: "Urge urinary incontinence" },
        { "@type": "MedicalCondition", name: "Postpartum pelvic floor weakness" },
        { "@type": "MedicalCondition", name: "Mild to moderate pelvic organ prolapse" },
      ],
      performedBy: { "@id": `${SITE_URL}/#business` },
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

export default function PelvicHealthPage() {
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
          { kind: "section", id: "pelvic-top", label: "Overview" },
          { kind: "section", id: "emsella", label: "Emsella" },
          { kind: "section", id: "safety", label: "Safety" },
          { kind: "section", id: "journey", label: "Journey" },
          { kind: "section", id: "conditions", label: "Conditions" },
          { kind: "section", id: "fit", label: "Is It For Me" },
          { kind: "section", id: "faq", label: "FAQ" },
        ]}
      />

      <main className="bg-warm-cream">
        {/* ──────────── HERO ──────────── */}
        <section
          id="pelvic-top"
          aria-labelledby="pelvic-headline"
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
                    Pelvic Health
                  </span>
                </div>
              </Reveal>

              <h1
                id="pelvic-headline"
                className="mt-7 max-w-[640px] font-serif text-[44px] leading-[1.02] tracking-[-0.012em] text-deep-forest sm:text-[58px] lg:text-[72px]"
              >
                <WordReveal delay={0.1}>The pelvic floor clinic</WordReveal>{" "}
                <WordReveal delay={0.45} className="italic">
                  Newfoundland was missing.
                </WordReveal>
              </h1>

              <Reveal delay={0.85} duration={0.9}>
                <p className="mt-7 max-w-[520px] text-[15.5px] leading-[1.7] text-deep-forest/75 sm:text-[17px]">
                  Surgeon-led pelvic care that meets you where you are.
                  Non-invasive treatment for incontinence, postpartum recovery,
                  and pelvic floor weakness, without surgery, needles, or
                  recovery time. Two Newfoundland clinics, in Bay&nbsp;Roberts
                  and St.&nbsp;John&apos;s, ready when you are.
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
                    href="#emsella"
                    className="group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-deep-forest transition-all hover:gap-3"
                  >
                    How Emsella Works
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
                  <Image
                    src="/images/pelvic.png"
                    alt="Patient seated comfortably during a non-invasive BTL Emsella pelvic floor session at Spruce Ridge Wellness in Newfoundland"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.4} duration={1}>
                <div className="absolute -bottom-6 -left-3 hidden items-center gap-4 rounded-2xl border border-frost bg-warm-cream/95 px-5 py-4 shadow-[0_18px_60px_-30px_rgba(15,42,31,0.35)] backdrop-blur-sm sm:flex sm:-bottom-8 sm:-left-6 sm:px-6 sm:py-5">
                  <div className="font-serif text-[36px] leading-none text-deep-forest sm:text-[44px]">
                    <Counter to={11000} duration={2} />
                  </div>
                  <div className="text-[10.5px] uppercase tracking-[0.22em] text-deep-forest/60">
                    Pelvic floor contractions
                    <br />
                    in a single session
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ──────────── KEYWORD MARQUEE ──────────── */}
        <section
          aria-label="Conditions and concerns we treat"
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

        {/* ──────────── 01 / OVERVIEW ──────────── */}
        <section
          id="emsella"
          className="scroll-mt-24 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <ChapterMark number="01" label="Overview" />
            </Reveal>

            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16 sm:mt-14">
              {/* Image (left on lg) + stats below */}
              <div className="lg:col-span-6 lg:order-1">
                <Reveal variant="scale" duration={1}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-soft-stone">
                    <Image
                      src="/images/machine.png"
                      alt="BTL Emsella pelvic floor therapy device at Spruce Ridge Wellness in Newfoundland"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
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

              {/* Sticky text (right on lg) */}
              <div className="lg:col-span-6 lg:order-2 lg:sticky lg:top-28 lg:self-start">
                <Reveal>
                  <h2 className="font-serif text-[36px] leading-[1.05] tracking-[-0.012em] text-deep-forest sm:text-[46px] lg:text-[56px]">
                    11,000 reasons to feel{" "}
                    <span className="italic">confident again.</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-7 space-y-5 text-[15.5px] leading-[1.7] text-deep-forest/80 sm:text-[17px]">
                    <p>
                      BTL Emsella is the Health Canada approved, non-invasive
                      pelvic floor treatment we wish more women in Newfoundland
                      knew about. In 28 minutes, focused electromagnetic
                      technology triggers the equivalent of 11,000 Kegel
                      contractions. Stronger, deeper, and far more consistent
                      than anything you could do on your own.
                    </p>
                    <p>
                      You stay fully clothed and seated the entire time. Most
                      patients describe it as a gentle tingling, a deep
                      contraction, even a chance to read in peace. There is no
                      downtime. No recovery period. Nothing visible afterward.
                      You walk out of our Bay&nbsp;Roberts or
                      St.&nbsp;John&apos;s clinic and get on with your day.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 02 / CLINICAL SAFETY ──────────── */}
        <section
          id="safety"
          className="scroll-mt-24 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="relative overflow-hidden rounded-[32px] bg-mist/40 px-6 py-16 sm:rounded-[40px] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
              {/* atmospheric gradients */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sage/30 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blush/40 blur-3xl"
              />

              <div className="relative">
                <Reveal>
                  <ChapterMark number="02" label="Clinical Safety" />
                </Reveal>

                <div className="mt-8 max-w-[760px] sm:mt-10">
                  <Reveal delay={0.06}>
                    <h2 className="font-serif text-[34px] leading-[1.05] tracking-[-0.012em] text-deep-forest sm:text-[44px] lg:text-[52px]">
                      Advanced therapy.{" "}
                      <span className="italic">Better outcomes.</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={0.12}>
                    <p className="mt-6 max-w-[480px] text-[15px] leading-[1.7] text-deep-forest/75 sm:text-[16px]">
                      Designed for real bodies and real lives. Safety profiles
                      you (and your physician) can trust.
                    </p>
                  </Reveal>
                </div>

                <div className="mt-12 grid grid-cols-1 items-center gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-[1fr_minmax(260px,360px)_1fr] lg:gap-x-10 lg:gap-y-14">
                  {/* Center image */}
                  <div className="order-first sm:col-span-2 lg:order-none lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2">
                    <Reveal variant="scale" duration={1}>
                      <div className="relative mx-auto aspect-[4/5] max-w-[400px] overflow-hidden rounded-[24px] bg-warm-cream/40 shadow-[0_24px_60px_-30px_rgba(15,42,31,0.25)]">
                        <Image
                          src="/images/Section%2002.png"
                          alt="BTL Emsella clinical safety profile illustration"
                          fill
                          sizes="(max-width: 1024px) 100vw, 30vw"
                          className="object-cover"
                        />
                      </div>
                    </Reveal>
                  </div>

                  {safetyHighlights.map(({ icon: Icon, label, body, tone }, i) => {
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
                    Final eligibility confirmed at your consultation
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
                  Four steps. <span className="italic">No surprises.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="max-w-[360px] text-[14.5px] leading-[1.65] text-deep-forest/70 sm:text-[15px]">
                  Care that runs at the speed of conversation, never the rush
                  of a clinic running behind.
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

        {/* ──────────── 04 / CONDITIONS ──────────── */}
        <section
          id="conditions"
          className="scroll-mt-24 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="relative overflow-hidden rounded-[32px] bg-deep-forest px-6 py-16 sm:rounded-[40px] sm:px-10 sm:py-20 lg:px-14 lg:py-24">
              {/* Background image with multi-layer dark scrim for readability */}
              <div aria-hidden="true" className="absolute inset-0">
                <Image
                  src="/images/03.png"
                  alt=""
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                />
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
                      Conditions Treated
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.06}>
                  <div className="mt-7 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:items-end sm:justify-between">
                    <h2 className="max-w-[600px] font-serif text-[30px] leading-[1.08] tracking-[-0.012em] text-warm-cream sm:text-[38px] lg:text-[44px]">
                      Are you experiencing{" "}
                      <span className="italic">any of these?</span>
                    </h2>
                    <p className="max-w-[340px] text-[13.5px] leading-[1.65] text-warm-cream/75 sm:text-[14px]">
                      Common, quietly under-treated, and answerable with
                      evidence-based care.
                    </p>
                  </div>
                </Reveal>

                <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                  {conditions.map((c, i) => (
                    <Reveal key={c.title} delay={i * 0.05} duration={0.65}>
                      <div className="group h-full rounded-2xl border border-warm-cream/15 bg-deep-forest/70 p-6 transition-colors duration-500 hover:border-warm-cream/35 hover:bg-deep-forest/85 sm:p-7">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-serif text-[18px] leading-tight text-warm-cream sm:text-[20px]">
                            {c.title}
                          </h3>
                          <span
                            aria-hidden="true"
                            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-warm-cream/25 text-warm-cream/65 transition-all duration-500 group-hover:rotate-90 group-hover:border-ridge-gold/70 group-hover:text-ridge-gold"
                          >
                            <Plus size={11} strokeWidth={1.7} />
                          </span>
                        </div>
                        <p className="mt-2.5 text-[13px] leading-[1.6] text-warm-cream/80 sm:text-[13.5px]">
                          {c.body}
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
