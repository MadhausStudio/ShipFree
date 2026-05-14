import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/wellness/layout/site-header"
import { SiteFooter } from "@/components/wellness/layout/site-footer"
import { ScrollProgress } from "@/components/wellness/motion/scroll-progress"
import { SectionNav } from "@/components/wellness/motion/section-nav"
import { Testimonial } from "@/components/wellness/sections/testimonial"

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://spruceridgewellness.ca"

export const metadata: Metadata = {
  title:
    "Services — Surgeon-Led Pelvic Health & Medical Aesthetics in Newfoundland",
  description:
    "FRCSC surgeon-led pelvic floor therapy, postpartum recovery, incontinence support, Botox, dermal fillers, and skin care. Two clinics in Bay Roberts and St. John's, Newfoundland.",
  keywords: [
    "pelvic health Newfoundland",
    "pelvic floor therapy Bay Roberts",
    "BTL Emsella Newfoundland",
    "incontinence treatment St. John's",
    "postpartum recovery clinic",
    "medical aesthetics Newfoundland",
    "Botox Bay Roberts",
    "dermal fillers St. John's",
    "Plexr skin tightening",
    "FRCSC surgeon-led care",
    "Dr. Felicia Pickard",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title:
      "Services — Surgeon-Led Pelvic Health & Medical Aesthetics in Newfoundland",
    description:
      "FRCSC surgeon-led pelvic floor therapy, postpartum recovery, Botox, dermal fillers, and skin care across two Newfoundland clinics.",
    url: `${SITE_URL}/services`,
    siteName: "Spruce Ridge Wellness",
    type: "website",
    locale: "en_CA",
  },
}

const services = [
  {
    number: "01",
    title: "Pelvic Health",
    href: "/services/pelvic-health",
    image: "/images/pelvic.png",
    alt: "Patient receiving non-invasive BTL Emsella pelvic floor treatment at Spruce Ridge Wellness in Newfoundland",
    eyebrow: "Pelvic Floor · Postpartum · Incontinence",
    description:
      "Non-invasive, FRCSC surgeon-led pelvic floor care. The clinical answer to leaks, urgency, and the postpartum questions other clinics rush past.",
    treatments: [
      "BTL Emsella",
      "Postpartum Recovery",
      "Incontinence Support",
      "Hormonal & Intimate Health",
    ],
  },
  {
    number: "02",
    title: "Medical Aesthetics",
    href: "/services/medical-aesthetics",
    image: "/images/medical-aesthetics.png",
    alt: "Physician performing a precise Botox injection at Spruce Ridge Wellness medical aesthetics clinic",
    eyebrow: "Botox · Plexr · Skin Care",
    description:
      "Physician-led Botox, dermal fillers, Plexr skin tightening, and personalized skin care. Refined results that look like you, only refreshed.",
    treatments: [
      "Botox & Neuromodulators",
      "Dermal Fillers",
      "Plexr Skin Tightening",
      "Skin Rejuvenation",
    ],
  },
]

const trustChips = [
  "FRCSC Surgeon-Led",
  "Health Canada Approved",
  "Bay Roberts · St. John's",
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Spruce Ridge Wellness",
      url: SITE_URL,
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newfoundland and Labrador",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services#webpage`,
      url: `${SITE_URL}/services`,
      name: "Services — Spruce Ridge Wellness",
      description:
        "Surgeon-led pelvic health and medical aesthetics services across Bay Roberts and St. John's, Newfoundland.",
      isPartOf: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "MedicalProcedure",
      name: "Pelvic Floor Therapy",
      url: `${SITE_URL}/services/pelvic-health`,
      procedureType: "https://schema.org/PhysicalTherapy",
      performedBy: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "MedicalProcedure",
      name: "Medical Aesthetics — Botox, Dermal Fillers, Plexr",
      url: `${SITE_URL}/services/medical-aesthetics`,
      procedureType: "https://schema.org/CosmeticProcedure",
      performedBy: { "@id": `${SITE_URL}/#business` },
    },
  ],
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-forest">
        {label}
      </span>
      <span aria-hidden="true" className="h-px w-10 bg-ridge-gold/70" />
    </div>
  )
}

export default function ServicesPage() {
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
          { kind: "section", id: "services-list", label: "Treatments" },
          { kind: "section", id: "reviews", label: "Reviews" },
          { kind: "section", id: "visit", label: "Visit" },
        ]}
      />

      <main className="bg-warm-cream">
        {/* TREATMENTS — landing template service-card style */}
        <section
          id="services-list"
          aria-labelledby="services-headline"
          className="scroll-mt-24 px-4 pb-24 pt-12 sm:px-6 sm:pb-32 sm:pt-16 lg:px-8 lg:pt-20"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionEyebrow label="Our Services" />
                <h1
                  id="services-headline"
                  className="mt-5 max-w-[760px] font-serif text-[40px] leading-[1.05] tracking-[-0.01em] text-deep-forest sm:text-[52px] lg:text-[64px]"
                >
                  Two specialties.{" "}
                  <span className="italic">One trusted hand.</span>
                </h1>
                <p className="mt-6 max-w-[560px] text-[15px] leading-[1.65] text-deep-forest/70 sm:text-[16px]">
                  Surgeon-led pelvic health and medical aesthetics across two
                  Newfoundland clinics. Real medicine, calm conversation, and a
                  plan that fits your life.
                </p>
                <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10.5px] uppercase tracking-[0.22em] text-deep-forest/65">
                  {trustChips.map((chip) => (
                    <li key={chip} className="flex items-center gap-2.5">
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-ridge-gold"
                      />
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://spruceridgewellness.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 self-start text-[12px] font-medium uppercase tracking-[0.22em] text-deep-forest transition-all hover:gap-3 sm:self-auto"
              >
                Book a Consultation
                <ArrowUpRight size={14} strokeWidth={1.6} />
              </a>
            </div>

            <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    aria-label={`Learn more about ${service.title}`}
                    className="group relative block overflow-hidden rounded-2xl bg-soft-stone"
                  >
                    <div className="relative aspect-[5/6] w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/85 via-deep-forest/30 to-deep-forest/0" />

                      {/* Top row */}
                      <div className="absolute inset-x-6 top-6 flex items-center justify-between sm:inset-x-8 sm:top-8">
                        <div className="flex items-center gap-3">
                          <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-ridge-gold">
                            {service.number}
                          </span>
                          <span className="h-px w-8 bg-warm-cream/40" />
                        </div>
                        <span
                          aria-hidden="true"
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-warm-cream/30 bg-warm-cream/10 text-warm-cream backdrop-blur-sm transition-all duration-500 group-hover:rotate-[-45deg] group-hover:bg-warm-cream group-hover:text-deep-forest"
                        >
                          <ArrowUpRight size={18} strokeWidth={1.5} />
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:p-8">
                        <span className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-warm-cream/70">
                          {service.eyebrow}
                        </span>
                        <h2 className="font-serif text-[32px] leading-tight text-warm-cream sm:text-[40px]">
                          {service.title}
                        </h2>
                        <p className="max-w-[460px] text-[14px] leading-relaxed text-warm-cream/85 sm:text-[15px]">
                          {service.description}
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {service.treatments.map((t) => (
                            <li
                              key={t}
                              className="rounded-full border border-warm-cream/25 bg-warm-cream/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-warm-cream/85 backdrop-blur-sm"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                        <span className="mt-3 inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.22em] text-warm-cream transition-all group-hover:gap-3">
                          Explore {service.title}
                          <ArrowUpRight size={13} strokeWidth={1.8} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* REVIEWS — same testimonial moment as the homepage */}
        <div id="reviews" className="scroll-mt-24">
          <Testimonial />
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
