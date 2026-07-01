"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Target, Eye } from "lucide-react"

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section
      id="mission"
      ref={sectionRef}
    >
      <div className="page-container">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <article
            className={`mission-card transition-all duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="icon-wrap mb-6 inline-flex size-14 items-center justify-center rounded-2xl">
              <Target className="size-7" aria-hidden />
            </div>
            <h3>Mission</h3>
            <p className="mb-4">
              Mihreen LLC is committed to delivering trust through ethical business
              practices, professional expertise, and consistent, dependable
              performance across multiple industries.
            </p>
            <p className="mb-4">
              We partner with government agencies and commercial organizations by
              providing high-quality services in construction and rehabilitation,
              mineral extraction, procurement and supply of IT and power
              equipment, warehouse and logistics management, human resources and
              payroll administration, janitorial services, and transportation
              solutions.
            </p>
            <p className="mt-4 mb-0">
              Our mission is to perform every contract in strict compliance with
              applicable regulations, emphasizing efficiency, safety,
              sustainability, and measurable value for our clients.
            </p>
          </article>

          <article
            className={`vision-card transition-all duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "220ms" }}
          >
            <div className="icon-wrap mb-6 inline-flex size-14 items-center justify-center rounded-2xl">
              <Eye className="size-7" aria-hidden />
            </div>
            <h3>Vision</h3>
            <p className="mb-0">
              Mihreen LLC seeks to be a trusted and reliable multi-service provider,
              recognized for excellence in contract execution, technical expertise,
              and operational support, delivering integrated solutions that
              enhance contract performance and operational efficiency on a global
              scale.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
