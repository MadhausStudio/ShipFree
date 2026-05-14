import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/wellness/layout/site-header"
import { SiteFooter } from "@/components/wellness/layout/site-footer"
import { SectionNav } from "@/components/wellness/motion/section-nav"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <SectionNav />
      <main className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-deep-forest text-warm-cream">
        <Image
          src="/images/Forest.png"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-right opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,42,31,0.92) 0%, rgba(15,42,31,0.7) 35%, rgba(15,42,31,0.35) 70%, rgba(15,42,31,0.15) 100%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-[620px]">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-warm-cream/65">
              Page not found
            </span>
            <h1 className="mt-5 font-serif text-[64px] leading-none tracking-[-0.02em] text-warm-cream sm:text-[88px] lg:text-[112px]">
              404
            </h1>
            <p className="mt-7 max-w-[480px] text-[16px] leading-[1.65] text-warm-cream/80">
              The page you&rsquo;re looking for has either moved or never lived
              here. Let&rsquo;s get you back to something useful.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ridge-gold px-7 py-3.5 text-[14px] tracking-tight text-deep-forest transition-all hover:gap-3.5 hover:bg-warm-cream"
              >
                Back to Home
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <a
                href="https://spruceridgewellness.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-warm-cream/30 bg-warm-cream/5 px-7 py-3.5 text-[14px] tracking-tight text-warm-cream backdrop-blur-sm transition-all hover:border-warm-cream/55 hover:bg-warm-cream/10"
              >
                Book a Consultation
              </a>
            </div>

            <div className="mt-14 border-t border-warm-cream/15 pt-8">
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-warm-cream/55">
                Or jump to
              </span>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-warm-cream/75">
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-warm-cream"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="transition-colors hover:text-warm-cream"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/pelvic-health"
                    className="transition-colors hover:text-warm-cream"
                  >
                    Pelvic Health
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/medical-aesthetics"
                    className="transition-colors hover:text-warm-cream"
                  >
                    Medical Aesthetics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/promotions"
                    className="transition-colors hover:text-warm-cream"
                  >
                    Promotions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
