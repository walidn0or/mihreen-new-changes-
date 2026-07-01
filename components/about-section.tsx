"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ShieldCheck, Sparkles, Gauge, HardHat } from "lucide-react"

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We conduct business ethically and transparently.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We strive for the highest standards in every project.",
  },
  {
    icon: Gauge,
    title: "Reliability",
    description: "We deliver on our commitments.",
  },
  {
    icon: HardHat,
    title: "Safety",
    description:
      "We prioritize health, safety, and environmental responsibility.",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.15 })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-bloom relative overflow-hidden"
    >
      <div className="page-container">
        <div
          className={`transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="section-title mb-14 section-intro-block">
            Company Overview
          </h2>

          <div className="section-intro-block mb-14 space-y-5 text-[16px] leading-[1.78] text-[var(--text-body)]">
            <p>
              Mihreen LLC is a trusted multi-service provider that delivers
              high-quality solutions across diverse industries. With a strong
              focus on professionalism, technical expertise, and operational
              efficiency, we support government and commercial clients in
              achieving successful project execution and outcomes.
            </p>
            <p>
              We are a dynamic and reliable company specializing in multi-sector
              services, including mining extraction, construction, procurement,
              logistics, and support services. We are committed to delivering
              excellence through professional expertise and dependable
              performance.
            </p>
          </div>

          <div className="glass-surface glass-surface--sky rounded-[var(--radius-md)] p-8 md:p-10">
            <h3 className="card-title mb-6">Our Core Services</h3>
            <ul className="about-service-list grid gap-3 text-left md:grid-cols-2">
              <li className="about-service-item rounded-[var(--radius-sm)] px-4 py-3 text-[15px] text-[var(--text-body)]">
                Mining Extraction — Efficient and responsible resource
                development
              </li>
              <li className="about-service-item rounded-[var(--radius-sm)] px-4 py-3 text-[15px] text-[var(--text-body)]">
                Construction &amp; Rehabilitation — Durable construction
                solutions
              </li>
              <li className="about-service-item rounded-[var(--radius-sm)] px-4 py-3 text-[15px] text-[var(--text-body)]">
                Procurement &amp; Supply — Reliable procurement and supply
              </li>
              <li className="about-service-item rounded-[var(--radius-sm)] px-4 py-3 text-[15px] text-[var(--text-body)]">
                Logistics &amp; Transportation — Safe and timely delivery
                services
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="card-title mb-8 section-intro-block text-left">
              Core Values
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value) => (
                <article key={value.title} className="value-card">
                  <div className="v-icon mx-auto mb-4 inline-flex size-11 items-center justify-center rounded-xl">
                    <value.icon className="size-5" aria-hidden />
                  </div>
                  <h4 className="card-title">{value.title}</h4>
                  <p className="text-sm text-[var(--text-body)]">{value.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-inline-cta mt-12 rounded-[var(--radius-lg)] px-8 py-6">
            <p className="text-[16px] leading-[1.78] text-[var(--text-body)]">
              Partner with Mihreen LLC for reliable and professional solutions.
              Contact us today to discuss your project needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
