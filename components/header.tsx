"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { siteLogo, siteLogoHeight, siteLogoWidth, siteName } from "@/lib/site"

const navItems = [
  { label: "Home", href: "/", match: "home" as const },
  { label: "About Us", href: "/#about", match: "hash-about" as const },
  { label: "Services", href: "/#services", match: "hash-services" as const },
  { label: "Careers", href: "/#careers", match: "hash-careers" as const },
] as const

const SECTION_IDS = ["home", "about", "services", "careers"] as const

type NavMatch = (typeof navItems)[number]["match"]
type SectionId = (typeof SECTION_IDS)[number]

const matchToSection: Record<NavMatch, SectionId> = {
  home: "home",
  "hash-about": "about",
  "hash-services": "services",
  "hash-careers": "careers",
}

const HEADER_OFFSET = 80

function sectionFromHash(hash: string): SectionId | null {
  const h = (hash || "").toLowerCase()
  if (h === "" || h === "#" || h === "#home") return "home"
  if (h === "#about") return "about"
  if (h === "#services") return "services"
  if (h === "#careers") return "careers"
  return null
}

function parseNavSectionFromHref(href: string | null): SectionId | null {
  if (!href) return null

  const trimmed = href.trim()
  if (trimmed === "/" || trimmed === "/#" || trimmed === "#") return "home"

  const hashIndex = trimmed.indexOf("#")
  if (hashIndex === -1) return null

  return sectionFromHash(trimmed.slice(hashIndex))
}

function isNavActive(
  match: NavMatch,
  pathname: string,
  activeSection: SectionId | null,
) {
  if (pathname === "/services") return match === "hash-services"
  if (pathname !== "/") return false
  return matchToSection[match] === (activeSection ?? "home")
}

function getActiveSectionFromScroll(): SectionId {
  const scrollPos = window.scrollY + HEADER_OFFSET
  let current: SectionId = "home"

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (el && el.offsetTop <= scrollPos) {
      current = id
    }
  }

  return current
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)
  const pendingSectionRef = useRef<SectionId | null>(null)

  const setNavSection = (section: SectionId, pending = true) => {
    setActiveSection(section)
    pendingSectionRef.current = pending ? section : null
  }

  useEffect(() => {
    if (pathname === "/services") {
      pendingSectionRef.current = null
      setActiveSection("services")
      return
    }

    if (pathname !== "/") {
      pendingSectionRef.current = null
      setActiveSection(null)
      return
    }

    const syncFromHash = () => {
      const fromHash = sectionFromHash(window.location.hash)
      if (fromHash) {
        setNavSection(fromHash)
        return
      }

      pendingSectionRef.current = null
      setActiveSection(getActiveSectionFromScroll())
    }

    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)
    window.addEventListener("popstate", syncFromHash)
    return () => {
      window.removeEventListener("hashchange", syncFromHash)
      window.removeEventListener("popstate", syncFromHash)
    }
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") return

    const handleSectionLinkClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a")
      if (!anchor) return

      const section = parseNavSectionFromHref(anchor.getAttribute("href"))
      if (!section) return

      setNavSection(section)
    }

    document.addEventListener("click", handleSectionLinkClick, true)
    return () => document.removeEventListener("click", handleSectionLinkClick, true)
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") return

    const updateFromScroll = () => {
      const pending = pendingSectionRef.current
      const scrolledSection = getActiveSectionFromScroll()

      if (pending) {
        if (scrolledSection !== pending) {
          setActiveSection(pending)
          return
        }
        pendingSectionRef.current = null
      }

      setActiveSection(scrolledSection)
    }

    updateFromScroll()
    window.addEventListener("scroll", updateFromScroll, { passive: true })
    window.addEventListener("resize", updateFromScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", updateFromScroll)
      window.removeEventListener("resize", updateFromScroll)
    }
  }, [pathname])

  return (
    <header className="site-header">
      <div className="page-container flex w-full items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={siteLogo}
            alt={siteName}
            width={siteLogoWidth}
            height={siteLogoHeight}
            className="h-9 w-auto md:h-10"
            loading="eager"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                isNavActive(item.match, pathname, activeSection)
                  ? "nav-active"
                  : undefined
              }
              onClick={() => setNavSection(parseNavSectionFromHref(item.href) ?? "home")}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary ml-2">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="p-2 text-[var(--text-heading)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        className={`site-header-mobile-nav overflow-hidden border-b transition-[max-height] duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? "max-h-[28rem]" : "max-h-0 border-b-0"
        }`}
      >
        <nav className="page-container flex flex-col gap-2 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                isNavActive(item.match, pathname, activeSection)
                  ? "nav-active"
                  : undefined
              }
              onClick={() => {
                setIsMobileMenuOpen(false)
                setNavSection(parseNavSectionFromHref(item.href) ?? "home")
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-primary mt-2 w-fit px-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
