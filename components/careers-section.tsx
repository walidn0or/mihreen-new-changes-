"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Award, Mail, Sparkles, TrendingUp } from "lucide-react"

const whyWorkWithUs = [
  {
    icon: TrendingUp,
    text: "Professional development opportunities",
  },
  {
    icon: Sparkles,
    text: "Dynamic work environment",
  },
  {
    icon: Award,
    text: "Competitive benefits",
  },
]

export function CareersSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section id="careers" ref={sectionRef} className="careers-section section-bloom">
      <div
        className="careers-section-glow careers-section-glow--blue"
        aria-hidden
      />
      <div
        className="careers-section-glow careers-section-glow--green"
        aria-hidden
      />

      <div className="page-container relative z-10">
        <div
          className={`careers-doc transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="careers-doc-accent" aria-hidden />

          <p className="service-modal-page-label careers-doc-label">
            Careers Page
          </p>
          <h2 className="service-modal-heading">Careers at Mihreen LLC</h2>
          <p className="service-modal-text careers-doc-lead">
            Join a team committed to excellence, professionalism, and growth.
          </p>

          <div className="careers-block">
            <h3 className="careers-block-title">Why Work With Us:</h3>
            <ul className="careers-benefits">
              {whyWorkWithUs.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.text} className="careers-benefit">
                    <span className="careers-benefit-icon" aria-hidden>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="careers-apply">
            <h3 className="careers-block-title careers-block-title--light">
              Apply Now:
            </h3>
            <p className="careers-apply-text">
              Send your CV to:{" "}
              <a href="mailto:hr@mihreenllc.us" className="careers-apply-link">
                <Mail className="careers-apply-link-icon" aria-hidden />
                hr@mihreenllc.us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
