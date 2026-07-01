"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Award, CheckCircle2, Clock, Users } from "lucide-react"

const WHY_SECTION_BACKGROUND = encodeURI("/Choose-us.jpg")

const whyChooseUsItems = [
  {
    icon: Award,
    title: "Proven multi-sector expertise",
  },
  {
    icon: CheckCircle2,
    title: "Commitment to quality and safety",
  },
  {
    icon: Clock,
    title: "Reliable and timely execution",
  },
  {
    icon: Users,
    title: "Client-focused solutions",
  },
]

export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section id="why" ref={sectionRef} className="why-section section-bloom">
      <div
        className="why-section-bg"
        aria-hidden="true"
        style={{ backgroundImage: `url("${WHY_SECTION_BACKGROUND}")` }}
      />
      <div className="page-container relative z-10">
        <div
          className={`why-us-header transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="why-us-title">Why Choose Us</h2>
        </div>
        <ul
          className={`why-us-grid transition-all duration-700 delay-100 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {whyChooseUsItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.title} className="why-us-card">
                <span className="why-us-card-icon" aria-hidden>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="why-us-card-text">{item.title}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
