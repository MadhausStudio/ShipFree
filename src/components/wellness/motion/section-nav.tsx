"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type SiteLink = { kind: "page"; href: string; label: string }
type SectionAnchor = { kind: "section"; id: string; label: string }
type Item = SiteLink | SectionAnchor

const defaultItems: Item[] = [
  { kind: "page", href: "/", label: "Home" },
  { kind: "page", href: "/about", label: "About" },
  { kind: "page", href: "/services", label: "Services" },
  { kind: "page", href: "/promotions", label: "Promotions" },
  { kind: "page", href: "/contact", label: "Contact" },
]

export function SectionNav({ items = defaultItems }: { items?: Item[] }) {
  const pathname = usePathname()
  const [activeSectionId, setActiveSectionId] = useState<string>(() => {
    const firstSection = items.find((i) => i.kind === "section") as
      | SectionAnchor
      | undefined
    return firstSection?.id ?? ""
  })

  useEffect(() => {
    const sectionItems = items.filter((i): i is SectionAnchor => i.kind === "section")
    if (sectionItems.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSectionId(visible[0].target.id)
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sectionItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  const handleSectionJump = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const isPageActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <nav
      aria-label="Site sections"
      className="pointer-events-none fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block xl:right-6"
    >
      <ul className="pointer-events-auto flex flex-col items-end gap-4">
        {items.map((item) => {
          const isActive =
            item.kind === "page"
              ? isPageActive(item.href)
              : activeSectionId === item.id

          const labelClass = `whitespace-nowrap text-[10.5px] font-medium uppercase tracking-[0.22em] transition-all duration-300 ${
            isActive
              ? "text-deep-forest opacity-100"
              : "text-deep-forest/70 opacity-0 group-hover:opacity-100"
          }`
          const lineClass = `block h-px transition-all duration-300 ${
            isActive
              ? "w-10 bg-ridge-gold"
              : "w-5 bg-deep-forest/30 group-hover:w-8 group-hover:bg-deep-forest/60"
          }`

          if (item.kind === "page") {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-label={`Go to ${item.label}`}
                  aria-current={isActive ? "page" : undefined}
                  className="group flex items-center gap-3 py-1"
                >
                  <span className={labelClass}>{item.label}</span>
                  <span aria-hidden="true" className={lineClass} />
                </Link>
              </li>
            )
          }

          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleSectionJump(item.id)}
                aria-label={`Jump to ${item.label}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-3 py-1"
              >
                <span className={labelClass}>{item.label}</span>
                <span aria-hidden="true" className={lineClass} />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
