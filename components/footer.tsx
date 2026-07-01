"use client"

import Image from "next/image"
import Link from "next/link"
import { siteLogo, siteLogoHeight, siteLogoWidth, siteName } from "@/lib/site"

const navLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/#contact" },
]

export function Footer() {
  return (
    <footer className="site-footer py-16">
      <div className="page-container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src={siteLogo}
                alt={siteName}
                width={siteLogoWidth}
                height={siteLogoHeight}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[#9ca3af]">
              Mihreen LLC — Delivering Trust
            </p>
          </div>

          <div>
            <h4 className="footer-brand mb-6 text-[17px]">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9ca3af] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-brand mb-6 text-[17px]">Contact</h4>
            <ul className="space-y-3 text-sm text-[#9ca3af]">
              <li>
                <a
                  href="tel:+15706921014"
                  className="transition-colors hover:text-white"
                >
                  +1 (570) 692 1014
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mihreenllc.us"
                  className="transition-colors hover:text-white"
                >
                  info@mihreenllc.us
                </a>
              </li>
              <li>
                <span>145 century Dr Alexandria VA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#374151] pt-8 md:flex-row">
          <p className="text-sm text-[#9ca3af]">
            &copy; {new Date().getFullYear()} Mihreen LLC. All rights reserved.
          </p>
          <p className="text-sm text-[#9ca3af]">
            Mihreen LLC — Delivering Trust
          </p>
        </div>
      </div>
    </footer>
  )
}
