import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowUpRight,
  ArrowDown,
  Stethoscope,
  GraduationCap,
  Compass,
  HeartHandshake,
  ScrollText,
  MapPin,
  Quote,
} from "lucide-react"
import { SiteHeader } from "@/components/wellness/layout/site-header"
import { SiteFooter } from "@/components/wellness/layout/site-footer"
import { ScrollProgress } from "@/components/wellness/motion/scroll-progress"
import { SectionNav } from "@/components/wellness/motion/section-nav"
import { Reveal } from "@/components/wellness/motion/reveal"
import { WordReveal } from "@/components/wellness/motion/word-reveal"
import { Counter } from "@/components/wellness/motion/counter"
import { Parallax, ParallaxScale } from "@/components/wellness/motion/parallax"

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://spruceridgewellness.ca"

export const metadata: Metadata = {
  title: {
    absolute:
      "Dr. Felicia Pickard, FRCSC | Founder, Spruce Ridge Wellness",
  },
  description:
    "Dr. Felicia Pickard, FRCSC, is a practicing general surgeon and the founder of Spruce Ridge Wellness in Newfoundland. Pelvic health and medical aesthetics, with clinics in Bay Roberts and at the Bense Clinic in St. John's.",
  keywords: [
    "Dr. Felicia Pickard",
    "Felicia Pickard",
    "Felicia Pickard MD",
    "Felicia Pickard FRCSC",
    "Spruce Ridge Wellness founder",
    "Spruce Ridge Wellness physician",
    "general surgeon Newfoundland",
    "general surgeon Bay Roberts",
    "general surgeon St. John's",
    "FRCSC surgeon Newfoundland",
    "FRCSC physician NL",
    "pelvic floor surgeon Newfoundland",
    "physician-led aesthetics Newfoundland",
    "physician-led pelvic health Newfoundland",
    "Bense Clinic physician",
    "rural physician Newfoundland",
    "Newfoundland women's health physician",
    "founder female surgeon Newfoundland",
    "Royal College of Surgeons of Canada Newfoundland",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Dr. Felicia Pickard, FRCSC | Founder, Spruce Ridge Wellness",
    description:
      "Practicing general surgeon and founder of Spruce Ridge Wellness in Newfoundland. Pelvic health and medical aesthetics across Bay Roberts and St. John's.",
    url: `${SITE_URL}/about`,
    siteName: "Spruce Ridge Wellness",
    type: "profile",
    locale: "en_CA",
    images: [
      {
        url: "/images/dr-felicia.png",
        width: 1200,
        height: 1500,
        alt: "Dr. Felicia Pickard, FRCSC, practicing general surgeon and founder of Spruce Ridge Wellness in Newfoundland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Felicia Pickard, FRCSC | Founder, Spruce Ridge Wellness",
    description:
      "Practicing general surgeon and founder of Spruce Ridge Wellness in Newfoundland.",
    images: ["/images/dr-felicia.png"],
  },
}

type Tone = "mist" | "blush" | "soft-stone" | "frost" | "sage" | "forest"

const credentials: { mark: string; title: string; body: string }[] = [
  {
    mark: "BSc",
    title: "Bachelor of Science",
    body: "The undergraduate years. Reading bodies before treating them.",
  },
  {
    mark: "MSc",
    title: "Master of Science",
    body: "A research degree. It taught her to slow down before reaching for an answer.",
  },
  {
    mark: "MD",
    title: "Doctor of Medicine",
    body: "Med school and the long apprenticeship that comes with it.",
  },
  {
    mark: "FRCSC",
    title: "Royal College of Surgeons",
    body: "Canadian fellowship in general surgery. Years of supervised operating before practicing on her own.",
  },
]

const principles: {
  icon: typeof Stethoscope
  label: string
  body: string
  tone: Tone
}[] = [
  {
    icon: Stethoscope,
    label: "Listen First",
    body: "The patient knows their body better than the chart does. Felicia tries to remember that every visit.",
    tone: "mist",
  },
  {
    icon: Compass,
    label: "Less, More Often",
    body: "Smaller doses, smaller adjustments, more check-ins. Quieter outcomes, fewer surprises.",
    tone: "blush",
  },
  {
    icon: HeartHandshake,
    label: "Long Game",
    body: "Pelvic care and aesthetics both reward patience. The plan is allowed to change as you do.",
    tone: "sage",
  },
  {
    icon: ScrollText,
    label: "Plain Language",
    body: "No jargon she would not say to her own family. Notes can go to your family doctor if you ask.",
    tone: "soft-stone",
  },
]

const stats: {
  value: number
  display: string
  suffix?: string
  label: string
  tone: Tone
}[] = [
  {
    value: 10,
    display: "10",
    suffix: "+ years",
    label: "Surgical training and practice",
    tone: "blush",
  },
  {
    value: 2,
    display: "2",
    suffix: "clinics",
    label: "Across the province",
    tone: "mist",
  },
  {
    value: 1,
    display: "1",
    suffix: "physician",
    label: "Founder and lead clinician",
    tone: "soft-stone",
  },
  {
    value: 100,
    display: "100",
    suffix: "%",
    label: "Physician-administered, every visit",
    tone: "frost",
  },
]

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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Spruce Ridge Wellness",
      inLanguage: "en-CA",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Spruce Ridge Wellness",
      url: SITE_URL,
      telephone: "+1-709-786-9150",
      founder: { "@id": `${SITE_URL}/about#physician` },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newfoundland and Labrador",
      },
      medicalSpecialty: ["CosmeticProcedure", "GeneralSurgery"],
    },
    {
      "@type": ["Person", "Physician"],
      "@id": `${SITE_URL}/about#physician`,
      name: "Dr. Felicia Pickard",
      givenName: "Felicia",
      familyName: "Pickard",
      honorificPrefix: "Dr.",
      honorificSuffix: "FRCSC",
      jobTitle: "General Surgeon, Founder",
      description:
        "Practicing general surgeon and founder of Spruce Ridge Wellness, based in Newfoundland. FRCSC-certified by the Royal College of Surgeons of Canada.",
      image: `${SITE_URL}/images/dr-felicia.png`,
      url: `${SITE_URL}/about`,
      sameAs: [`${SITE_URL}/about`],
      worksFor: { "@id": `${SITE_URL}/#business` },
      gender: "Female",
      nationality: { "@type": "Country", name: "Canada" },
      medicalSpecialty: ["GeneralSurgery", "PlasticSurgery", "CosmeticProcedure"],
      knowsAbout: [
        "Pelvic floor health",
        "Medical aesthetics",
        "Botox and neuromodulators",
        "Dermal fillers",
        "Plexr skin tightening",
        "General surgery",
        "Continuity of care",
      ],
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newfoundland and Labrador",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "BSc",
          credentialCategory: "degree",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "MSc",
          credentialCategory: "degree",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "MD",
          credentialCategory: "degree",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "FRCSC, Royal College of Surgeons of Canada",
          credentialCategory: "professional certification",
        },
      ],
    },
    {
      "@type": ["WebPage", "AboutPage", "ProfilePage"],
      "@id": `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: "Dr. Felicia Pickard, FRCSC | Founder, Spruce Ridge Wellness",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/about#physician` },
      mainEntity: { "@id": `${SITE_URL}/about#physician` },
      mentions: [{ "@id": `${SITE_URL}/#business` }],
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/dr-felicia.png`,
        width: 1200,
        height: 1500,
      },
      inLanguage: "en-CA",
      breadcrumb: { "@id": `${SITE_URL}/about#breadcrumbs` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/about#breadcrumbs`,
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
          name: "About",
          item: `${SITE_URL}/about`,
        },
      ],
    },
  ],
}

// Watercolor spruce branch — soft wash + tapered needles in pairs.
// Used everywhere; size/rotation/opacity vary by callsite for visual variety.
function SpruceBranch({
  className,
  needleCount = 14,
}: {
  className?: string
  needleCount?: number
}) {
  const id = `sp-${needleCount}`
  return (
    <svg
      viewBox="0 0 80 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id={`${id}-wash`} cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.32" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.12" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-needle`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="65%" stopColor="currentColor" stopOpacity="0.7" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
        <filter id={`${id}-soft`} x="-8%" y="-8%" width="116%" height="116%">
          <feGaussianBlur stdDeviation="0.55" />
        </filter>
      </defs>

      {/* atmospheric watercolor wash behind the branch */}
      <ellipse cx="40" cy="58" rx="34" ry="52" fill={`url(#${id}-wash)`} />

      <g filter={`url(#${id}-soft)`}>
        {/* central woody stem with a slight natural curve */}
        <path
          d="M40 6 Q42 56 39 104"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />

        {/* paired needles along the stem */}
        {Array.from({ length: needleCount }).map((_, i) => {
          const t = i / (needleCount - 1)
          const y = 12 + t * 88
          // bigger toward the middle of the branch
          const taper = Math.sin(t * Math.PI)
          const len = 13 + taper * 11
          const baseAngle = 50 + taper * 6
          // slight per-needle wobble for organic feel
          const wobble = (i % 3 === 0 ? -1 : 1) * 1.5
          return (
            <g key={i}>
              {[1, -1].map((sign) => {
                const a = ((baseAngle + wobble) * sign * Math.PI) / 180
                const x2 = 40 + Math.sin(a) * len
                const y2 = y - Math.cos(a) * len
                // tapered needle drawn as a path so it shades from base→tip
                const w = 1.2 + taper * 0.5
                const px = 40 + Math.cos(a) * w
                const py = y + Math.sin(a) * w
                return (
                  <path
                    key={sign}
                    d={`M40 ${y} L${x2} ${y2} L${40 - (x2 - 40) * 0.02 + (px - 40) * 0.4} ${y - (y2 - y) * 0.02 + (py - y) * 0.4} Z`}
                    fill={`url(#${id}-needle)`}
                    opacity={0.5 + taper * 0.3}
                  />
                )
              })}
            </g>
          )
        })}
      </g>
    </svg>
  )
}

// Single watercolor spruce needle, used for the falling-leaf ambient layer
function SpruceNeedle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 50"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="needle-grad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
        <filter id="needle-soft" x="-20%" y="-5%" width="140%" height="110%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>
      <path
        d="M7 2 C 9 16 9 32 7.6 48 C 6.4 32 5 16 7 2 Z"
        fill="url(#needle-grad)"
        filter="url(#needle-soft)"
      />
    </svg>
  )
}

function DottedCurve({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 20 Q30 4 60 20 T118 20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="2 5"
      />
    </svg>
  )
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

export default function AboutPage() {
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
          { kind: "section", id: "about-top", label: "Overview" },
          { kind: "section", id: "practice", label: "Practice" },
          { kind: "section", id: "training", label: "Training" },
          { kind: "section", id: "philosophy", label: "Philosophy" },
          { kind: "section", id: "place", label: "Place" },
          { kind: "section", id: "off-chart", label: "Off the Chart" },
          { kind: "section", id: "visit", label: "Visit" },
        ]}
      />

      <main className="bg-warm-cream">
        {/* ──────────── HERO — editorial spread ──────────── */}
        <section
          id="about-top"
          aria-labelledby="about-headline"
          className="relative scroll-mt-24 overflow-hidden px-4 pt-10 pb-20 sm:px-6 sm:pt-14 sm:pb-28 lg:px-8 lg:pt-16 lg:pb-32"
        >
          {/* Ambient drifting spruce needles */}
          <SpruceNeedle
            aria-hidden="true"
            className="pointer-events-none absolute left-[6%] top-[18%] h-7 w-3 rotate-[15deg] text-sage/55 animate-leaf-fall sm:h-8 sm:w-3.5"
          />
          <SpruceNeedle
            aria-hidden="true"
            className="pointer-events-none absolute right-[8%] top-[8%] h-6 w-2.5 rotate-[-25deg] text-forest/50 animate-leaf-fall-slow sm:h-7 sm:w-3"
          />
          <SpruceNeedle
            aria-hidden="true"
            className="pointer-events-none absolute left-[14%] top-[60%] h-5 w-2 rotate-[40deg] text-sage/45 animate-drift-slow"
          />
          <SpruceBranch
            aria-hidden="true"
            needleCount={12}
            className="pointer-events-none absolute right-[3%] bottom-[18%] h-24 w-20 rotate-[18deg] text-sage/35 animate-sway-slow sm:h-32 sm:w-24"
          />
          <div className="mx-auto max-w-[1320px]">
            {/* Eyebrow */}
            <Reveal duration={0.7}>
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="text-[11px] font-medium uppercase tracking-[0.22em] text-deep-forest/55 transition-colors hover:text-deep-forest"
                >
                  Spruce Ridge
                </Link>
                <span aria-hidden="true" className="h-px w-5 bg-deep-forest/30" />
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-forest">
                  About the Founder
                </span>
              </div>
            </Reveal>

            {/* Editorial spread — big serif name + portrait + side panel */}
            <div className="relative mt-10 sm:mt-14">
              {/* Big serif backdrop name */}
              <Reveal variant="fade" duration={1.1}>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 right-0 top-0 z-0 select-none whitespace-nowrap text-center font-serif text-[clamp(80px,17vw,260px)] leading-[0.85] tracking-[-0.045em] text-deep-forest/[0.07]"
                >
                  FELICIA
                </span>
              </Reveal>

              <div className="relative z-10 grid grid-cols-12 gap-6 pt-16 sm:gap-10 sm:pt-24 lg:pt-28">
                {/* Side panel, left */}
                <div className="col-span-12 order-2 flex flex-col justify-end lg:col-span-3 lg:order-1">
                  <Reveal delay={0.15}>
                    <p className="text-[10.5px] font-medium uppercase tracking-[0.24em] text-forest">
                      This week
                    </p>
                    <p className="mt-3 font-serif text-[18px] leading-[1.35] text-deep-forest sm:text-[20px]">
                      Still in clinic. Still in scrubs.
                    </p>
                  </Reveal>

                  <Reveal delay={0.25}>
                    <div className="mt-8 border-t border-deep-forest/10 pt-6">
                      <p className="text-[10.5px] font-medium uppercase tracking-[0.24em] text-deep-forest/50">
                        Where you&apos;ll find her
                      </p>
                      <ul className="mt-3 space-y-1.5 text-[13.5px] leading-[1.55] text-deep-forest/75">
                        <li className="flex items-start gap-2">
                          <MapPin size={13} strokeWidth={1.6} className="mt-1 shrink-0 text-ridge-gold" />
                          Bay Roberts
                        </li>
                        <li className="flex items-start gap-2">
                          <MapPin size={13} strokeWidth={1.6} className="mt-1 shrink-0 text-ridge-gold" />
                          Bense Clinic, St. John&apos;s
                        </li>
                      </ul>
                    </div>
                  </Reveal>
                </div>

                {/* Portrait — center, polaroid-tilted */}
                <div className="col-span-12 order-1 lg:col-span-6 lg:order-2">
                  <Reveal variant="scale" duration={1.1}>
                    <div className="relative mx-auto max-w-[520px] rotate-[-1deg] transition-transform duration-700 hover:rotate-0 lg:max-w-none">
                      {/* Washi tape */}
                      <span
                        aria-hidden="true"
                        className="absolute -top-3 left-1/2 z-20 h-7 w-28 -translate-x-1/2 rotate-[3deg] rounded-[3px] bg-ridge-gold/70 shadow-[0_4px_12px_-4px_rgba(15,42,31,0.25)] sm:h-8 sm:w-32"
                      />
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border-[6px] border-warm-cream bg-soft-stone shadow-[0_28px_70px_-30px_rgba(15,42,31,0.35)]">
                        <ParallaxScale
                          className="absolute inset-0"
                          fromY={-25}
                          toY={25}
                          fromScale={1.06}
                          toScale={1.01}
                        >
                          <Image
                            src="/images/dr-felicia.png"
                            alt="Dr. Felicia Pickard, FRCSC, founder of Spruce Ridge Wellness in Newfoundland"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </ParallaxScale>

                        <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
                          <span aria-hidden="true" className="h-px w-6 bg-warm-cream" />
                          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-warm-cream/95">
                            Founder · FRCSC
                          </span>
                        </div>
                      </div>
                      {/* Spruce sprig — bottom right */}
                      <SpruceBranch
                        needleCount={9}
                        className="pointer-events-none absolute -bottom-8 -right-6 h-20 w-16 rotate-[18deg] text-sage/65 animate-sway sm:-bottom-10 sm:-right-8 sm:h-24 sm:w-20"
                      />
                      {/* Larger spruce branch — top left */}
                      <SpruceBranch
                        needleCount={14}
                        className="pointer-events-none absolute -left-12 -top-8 h-28 w-20 rotate-[-22deg] text-forest/55 animate-drift-slow sm:-left-16 sm:-top-10 sm:h-32 sm:w-24"
                      />
                      {/* Small spruce sprig — right side */}
                      <SpruceBranch
                        needleCount={7}
                        className="pointer-events-none absolute -right-10 top-1/2 h-16 w-12 -translate-y-1/2 rotate-[95deg] text-sage/45 animate-drift sm:h-20 sm:w-16"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Side panel — right */}
                <div className="col-span-12 order-3 flex flex-col justify-end lg:col-span-3">
                  <Reveal delay={0.12}>
                    <p className="font-serif text-[20px] italic leading-tight text-ridge-gold sm:text-[22px]">
                      Hi, I&apos;m Felicia.
                    </p>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <h1
                      id="about-headline"
                      className="mt-3 font-serif text-[32px] leading-[1.04] tracking-[-0.012em] text-deep-forest sm:text-[40px] lg:text-[44px]"
                    >
                      <WordReveal delay={0.1}>Dr. Felicia</WordReveal>
                      <span className="block italic">
                        <WordReveal delay={0.4}>Pickard.</WordReveal>
                      </span>
                    </h1>
                  </Reveal>
                  <Reveal delay={0.35}>
                    <p className="mt-5 text-[14.5px] leading-[1.65] text-deep-forest/75 sm:text-[15px]">
                      Doctor, mother, wife, daughter, Newfoundlander. Spruce
                      Ridge is the small clinic she runs.
                    </p>
                  </Reveal>
                  <Reveal delay={0.5}>
                    <div className="mt-6 flex items-center gap-3">
                      <a
                        href="#practice"
                        className="group inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.22em] text-deep-forest transition-all hover:gap-3"
                      >
                        Read on
                        <ArrowDown size={13} strokeWidth={1.6} className="transition-transform group-hover:translate-y-0.5" />
                      </a>
                      <DottedCurve className="h-5 w-16 text-ridge-gold/60" />
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* Credentials caption strip */}
              <Reveal delay={0.4}>
                <div className="relative z-10 mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-3 border-t border-deep-forest/10 pt-6 sm:mt-16 sm:gap-x-10">
                  <p className="font-serif text-[22px] tracking-tight text-deep-forest sm:text-[24px]">
                    Dr. Felicia Pickard
                  </p>
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.24em] text-deep-forest/55">
                    Practicing general surgeon &middot; FRCSC
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ──────────── 01 / THE PRACTICE ──────────── */}
        <section
          id="practice"
          className="scroll-mt-24 px-4 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-36"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <ChapterMark number="01" label="The Practice" />
            </Reveal>

            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16 sm:mt-14">
              <div className="lg:col-span-7">
                <Reveal>
                  <h2 className="font-serif text-[36px] leading-[1.05] tracking-[-0.012em] text-deep-forest sm:text-[46px] lg:text-[54px]">
                    Same hands,{" "}
                    <span className="italic">every visit.</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-7 space-y-5 text-[15.5px] leading-[1.7] text-deep-forest/80 sm:text-[17px]">
                    <p>
                      When Felicia treats you, it is Felicia treating you. The
                      chart is hers. The plan is hers. The next visit is hers
                      too.
                    </p>
                    <p>
                      Patients tell their story once. Decisions stay in the
                      same person&apos;s head from one visit to the next.
                      Adjustments are quiet, because someone is still keeping
                      track.
                    </p>
                    <p>
                      That is the only thing she asked of the clinic when she
                      started it. Everything else came after.
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  {stats.map((s, i) => (
                    <Reveal key={s.label} delay={i * 0.07} duration={0.7}>
                      <div
                        className={`group relative h-full overflow-hidden rounded-3xl ${toneSurface[s.tone]} p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(15,42,31,0.25)] sm:p-7`}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-ridge-gold"
                        />
                        <div className="flex items-baseline gap-1.5 pl-3.5">
                          <span className="font-serif text-[40px] leading-none text-deep-forest sm:text-[48px]">
                            <Counter to={s.value} />
                          </span>
                          {s.suffix && (
                            <span className="font-serif text-[18px] text-ridge-gold sm:text-[20px]">
                              {s.suffix}
                            </span>
                          )}
                        </div>
                        <div className="mt-4 pl-3.5 text-[12.5px] leading-snug text-deep-forest/75 sm:text-[13.5px]">
                          {s.label}
                        </div>
                        <span
                          aria-hidden="true"
                          className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full border border-ridge-gold/25 transition-all duration-700 group-hover:rotate-90 sm:h-28 sm:w-28"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 02 / TRAINING ──────────── */}
        <section
          id="training"
          className="scroll-mt-24 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <ChapterMark number="02" label="The Path" />
            </Reveal>

            <div className="mt-10 flex flex-col gap-6 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">
              <Reveal delay={0.06}>
                <h2 className="max-w-[680px] font-serif text-[34px] leading-[1.06] tracking-[-0.012em] text-deep-forest sm:text-[44px] lg:text-[52px]">
                  Four letters,{" "}
                  <span className="italic">a long apprenticeship.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="max-w-[360px] text-[14.5px] leading-[1.65] text-deep-forest/70 sm:text-[15px]">
                  What each one was, and what it taught her.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
              {credentials.map(({ mark, title, body }, i) => (
                <Reveal key={mark} delay={i * 0.08} duration={0.8}>
                  <div className="group flex h-full flex-col rounded-3xl border border-frost bg-warm-cream p-7 transition-all duration-500 hover:-translate-y-2 hover:border-deep-forest/15 hover:shadow-[0_28px_70px_-30px_rgba(15,42,31,0.22)] sm:p-8">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-[40px] leading-none text-ridge-gold sm:text-[48px]">
                        {mark}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-deep-forest/15 transition-all duration-500 group-hover:w-12 group-hover:bg-ridge-gold/70"
                      />
                    </div>
                    <h3 className="mt-7 font-serif text-[20px] leading-tight text-deep-forest sm:text-[22px]">
                      {title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13.5px] leading-[1.65] text-deep-forest/70 sm:text-[14px]">
                      {body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="fade" delay={0.3}>
              <p className="mt-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-deep-forest/45 sm:mt-14">
                <GraduationCap size={14} strokeWidth={1.4} className="text-ridge-gold/80" />
                FRCSC denotes Fellowship of the Royal College of Surgeons of Canada
              </p>
            </Reveal>
          </div>
        </section>

        {/* ──────────── PULL QUOTE ──────────── */}
        <section className="px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-[960px]">
            <Reveal variant="fade" duration={1}>
              <div className="relative px-6 text-center sm:px-12">
                <Quote
                  aria-hidden="true"
                  size={42}
                  strokeWidth={1.2}
                  className="mx-auto -mb-2 text-ridge-gold/70 sm:size-12"
                />
                <blockquote className="font-serif text-[28px] leading-[1.25] tracking-[-0.005em] text-deep-forest sm:text-[36px] lg:text-[44px]">
                  <span className="italic">
                    I would rather start small and adjust than start big and
                    apologize.
                  </span>
                </blockquote>
                <DottedCurve className="mx-auto mt-6 h-5 w-24 text-ridge-gold/60" />
                <p className="mt-5 text-[10.5px] font-medium uppercase tracking-[0.24em] text-deep-forest/55">
                  Felicia
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ──────────── 03 / PHILOSOPHY ──────────── */}
        <section
          id="philosophy"
          className="scroll-mt-24 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="relative overflow-hidden rounded-[32px] bg-blush/60 px-6 py-16 sm:rounded-[40px] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-ridge-gold/15 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sage/30 blur-3xl"
              />

              {/* Watercolor spruce accents */}
              <SpruceBranch
                aria-hidden="true"
                needleCount={13}
                className="pointer-events-none absolute -right-2 top-8 hidden h-28 w-24 rotate-[12deg] text-sage/45 animate-sway-slow sm:block sm:h-32 sm:w-28"
              />
              <SpruceBranch
                aria-hidden="true"
                needleCount={10}
                className="pointer-events-none absolute -left-2 bottom-10 hidden h-24 w-20 rotate-[-8deg] text-forest/40 animate-sway sm:block sm:h-28 sm:w-24"
              />

              <div className="relative">
                <Reveal>
                  <ChapterMark number="03" label="Philosophy" />
                </Reveal>

                <div className="mt-8 max-w-[760px] sm:mt-10">
                  <Reveal delay={0.06}>
                    <h2 className="font-serif text-[34px] leading-[1.05] tracking-[-0.012em] text-deep-forest sm:text-[44px] lg:text-[52px]">
                      How she{" "}
                      <span className="italic">tries to work.</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={0.12}>
                    <p className="mt-6 max-w-[520px] text-[15px] leading-[1.7] text-deep-forest/75 sm:text-[16px]">
                      Notes she pinned for herself a long time ago. They are
                      reminders, not promises.
                    </p>
                  </Reveal>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                  {principles.map(({ icon: Icon, label, body, tone }, i) => (
                    <Reveal key={label} delay={0.06 + i * 0.07} duration={0.8}>
                      <div className="group flex h-full flex-col items-center text-center">
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
                            className={`relative inline-flex h-full w-full items-center justify-center rounded-full ${discFill[tone]} shadow-[0_18px_40px_-20px_rgba(15,42,31,0.45)] transition-all duration-500 group-hover:scale-[1.06]`}
                          >
                            <Icon
                              size={30}
                              strokeWidth={1.4}
                              className="transition-transform duration-700 group-hover:scale-110"
                            />
                          </span>
                        </span>
                        <h3 className="mt-7 text-[11.5px] font-medium uppercase tracking-[0.24em] text-deep-forest">
                          {label}
                        </h3>
                        <span
                          aria-hidden="true"
                          className="mt-3 block h-px w-7 bg-ridge-gold/65 transition-all duration-500 group-hover:w-12"
                        />
                        <p className="mt-4 max-w-[240px] text-[13px] leading-[1.6] text-deep-forest/70 sm:text-[13.5px]">
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

        {/* ──────────── 04 / PLACE ──────────── */}
        <section
          id="place"
          className="scroll-mt-24 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="relative overflow-hidden rounded-[32px] bg-deep-forest sm:rounded-[40px]">
              <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                <Parallax className="absolute inset-0" from={-50} to={50}>
                  <Image
                    src="/images/nature.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-deep-forest/75" />
                <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/40 via-transparent to-deep-forest/55" />
              </div>

              <div className="relative grid gap-12 px-6 py-16 sm:px-12 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-16 lg:py-24">
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-[22px] leading-none text-ridge-gold sm:text-[26px]">
                        04
                      </span>
                      <span aria-hidden="true" className="h-px w-10 bg-warm-cream/30" />
                      <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-mist">
                        Place
                      </span>
                    </div>
                  </Reveal>

                  <Reveal delay={0.06}>
                    <h2 className="mt-8 font-serif text-[32px] leading-[1.06] tracking-[-0.012em] text-warm-cream sm:text-[42px] lg:text-[48px]">
                      Newfoundland{" "}
                      <span className="italic">is home.</span>
                    </h2>
                  </Reveal>
                </div>

                <div className="lg:col-span-7">
                  <Reveal delay={0.12}>
                    <div className="space-y-5 text-[15px] leading-[1.7] text-warm-cream/80 sm:text-[16px]">
                      <p>
                        Felicia practices here because she lives here. The
                        province is small. The medical community is smaller
                        than that. Patients are not a stream of strangers; they
                        are people she will see again, at a wharf or a wedding
                        or the grocery store.
                      </p>
                      <p>
                        That changes how you work. The chart is never
                        anonymous. A decision made today is one she will live
                        with at the next visit, and the one after.
                      </p>
                      <p>
                        She did not start the clinic to grow it. She started it
                        so the people on this island had someone steady to
                        come back to.
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 05 / OFF THE CHART ──────────── */}
        <section
          id="off-chart"
          className="relative scroll-mt-24 overflow-hidden px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40"
        >
          {/* Ambient watercolor spruce */}
          <SpruceNeedle
            aria-hidden="true"
            className="pointer-events-none absolute right-[6%] top-[8%] h-7 w-3 rotate-[-20deg] text-sage/55 animate-leaf-fall-slow sm:h-9 sm:w-3.5"
          />
          <SpruceBranch
            aria-hidden="true"
            needleCount={12}
            className="pointer-events-none absolute left-[2%] top-[40%] hidden h-24 w-20 rotate-[-18deg] text-sage/40 animate-sway-slow lg:block lg:h-32 lg:w-24"
          />
          <SpruceBranch
            aria-hidden="true"
            needleCount={9}
            className="pointer-events-none absolute right-[3%] bottom-[12%] hidden h-20 w-16 rotate-[40deg] text-forest/40 animate-drift sm:block sm:h-24 sm:w-20"
          />
          <div className="relative mx-auto max-w-[1280px]">
            <Reveal>
              <ChapterMark number="05" label="Off the Chart" />
            </Reveal>

            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16 sm:mt-14">
              <div className="lg:col-span-7">
                <Reveal delay={0.06}>
                  <h2 className="font-serif text-[34px] leading-[1.06] tracking-[-0.012em] text-deep-forest sm:text-[44px] lg:text-[52px]">
                    Doctor.{" "}
                    <span className="italic">Mother. Wife. Daughter.</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="mt-7 space-y-5 text-[15.5px] leading-[1.7] text-deep-forest/80 sm:text-[17px]">
                    <p>
                      The person who walks into the operating room is the same
                      one who packs school lunches and texts her mum back. The
                      life outside of medicine is not a competing thing. It is
                      the reason there is medicine in the first place.
                    </p>
                    <p>
                      It also means she has been on the patient side of the
                      desk. The waiting. The not-knowing. The wanting to feel
                      a bit more like yourself again. None of that is
                      theoretical to her.
                    </p>
                  </div>
                </Reveal>

              </div>

              <div className="lg:col-span-5">
                <Reveal delay={0.18}>
                  <div className="relative rounded-3xl border border-frost bg-warm-cream p-8 shadow-[0_24px_60px_-30px_rgba(15,42,31,0.18)] sm:p-10">
                    <SpruceBranch
                      needleCount={8}
                      className="pointer-events-none absolute -right-4 -top-5 h-16 w-12 rotate-[-12deg] text-sage/65 animate-sway-slow"
                    />
                    <SpruceBranch
                      needleCount={7}
                      className="pointer-events-none absolute -left-5 -bottom-4 h-14 w-12 rotate-[110deg] text-forest/55 animate-drift-slow"
                    />
                    <p className="font-serif text-[16px] italic leading-[1.55] text-ridge-gold sm:text-[17px]">
                      A note from Felicia
                    </p>
                    <p className="mt-4 font-serif text-[20px] leading-[1.4] text-deep-forest sm:text-[22px]">
                      I started Spruce Ridge for the patients I would want my
                      own mum, sister, or daughter to see.
                    </p>
                    <DottedCurve className="mt-6 h-5 w-20 text-ridge-gold/60" />
                    <p className="mt-5 text-[10.5px] font-medium uppercase tracking-[0.24em] text-deep-forest/55">
                      Felicia
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 06 / VISIT — CTA ──────────── */}
        <section
          id="visit"
          className="scroll-mt-24 px-4 pt-24 pb-24 sm:px-6 sm:pt-32 sm:pb-32 lg:px-8 lg:pt-40 lg:pb-40"
        >
          <div className="mx-auto max-w-[1100px]">
            <div className="relative overflow-hidden rounded-[32px] border border-frost bg-warm-cream px-6 py-16 sm:rounded-[40px] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ridge-gold/10 blur-3xl"
              />

              <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
                <div className="lg:col-span-7">
                  <Reveal>
                    <ChapterMark number="06" label="Visit" />
                  </Reveal>
                  <Reveal delay={0.06}>
                    <h2 className="mt-7 font-serif text-[32px] leading-[1.06] tracking-[-0.012em] text-deep-forest sm:text-[42px] lg:text-[48px]">
                      Sit down with{" "}
                      <span className="italic">Felicia.</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={0.12}>
                    <p className="mt-6 max-w-[520px] text-[15px] leading-[1.65] text-deep-forest/75 sm:text-[16px]">
                      Bring your questions. We talk through what is bothering
                      you and what the options are. Whatever you decide is up
                      to you.
                    </p>
                  </Reveal>
                </div>

                <div className="lg:col-span-5">
                  <Reveal delay={0.18}>
                    <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                      <a
                        href="https://spruceridgewellness.janeapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full bg-ridge-gold px-7 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-warm-cream transition-all hover:gap-4 hover:bg-ridge-gold/90"
                      >
                        Book a Consultation
                        <ArrowUpRight size={14} strokeWidth={1.8} />
                      </a>
                      <Link
                        href="/services"
                        className="inline-flex items-center rounded-full border border-deep-forest/25 px-7 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-deep-forest transition-all hover:border-deep-forest hover:bg-deep-forest/5"
                      >
                        See Services
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
