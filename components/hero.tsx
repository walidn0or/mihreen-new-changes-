"use client"

import { useCallback, useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const HERO_BACKGROUNDS = [
  "/background.jpg",
  "/background -1.jpg",
  "/background -2.jpg",
  "/background - 3.jpg",
].map((path) => encodeURI(path))

const SLIDE_INTERVAL_MS = 4000

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_BACKGROUNDS.length)
    }, SLIDE_INTERVAL_MS)

    return () => window.clearTimeout(timer)
  }, [activeIndex])

  return (
    <section
      id="home"
      className="section-bloom hero-slideshow-section"
      aria-labelledby="hero-heading"
    >
      <div className="hero-bg-slideshow" aria-hidden="true">
        {HERO_BACKGROUNDS.map((src, index) => (
          <div
            key={src}
            className={`hero-bg-slide${index === activeIndex ? " hero-bg-slide--active" : ""}`}
            style={{ backgroundImage: `url("${src}")` }}
          />
        ))}
      </div>

      <div id="hero" className="w-full">
        <div className="page-container relative z-10 flex min-h-[calc(100vh-68px)] items-center py-14 md:py-16">
          <div className="w-full max-w-2xl">
            <h1 id="hero-heading" className="hero-title">
              Delivering{" "}
              <span className="blue-word">Trust</span>
            </h1>
            <p className="hero-subtitle">
              Mihreen LLC provides integrated solutions in mining extraction,
              construction, procurement, supply, and related services.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/#services" className="btn-primary px-9 py-3.5 text-[15px]">
                Our Services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/#contact" className="btn-secondary px-9 py-3.5 text-[15px]">
                Contact Us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hero-bg-dots"
          role="tablist"
          aria-label="Hero background slideshow"
        >
          {HERO_BACKGROUNDS.map((src, index) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show background image ${index + 1} of ${HERO_BACKGROUNDS.length}`}
              className={`hero-bg-dot${index === activeIndex ? " hero-bg-dot--active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
