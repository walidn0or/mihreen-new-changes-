"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactSectionLink } from "@/components/contact-section-link"

import {
  Pickaxe,
  Building2,
  Truck,
  Warehouse,
  PackageCheck,
  ArrowRight,
} from "lucide-react"

const miningExtractionCapabilities = [
  {
    title: "1. Exploration Support & Resource Identification",
    intro:
      "We assist in identifying viable mineral deposits through structured fieldwork and technical analysis.",
    items: [
      "Geological mapping and sampling",
      "Identification of mineralized zones (including gold-bearing formations)",
      "Coordination with geological consultants",
      "Preliminary feasibility support",
    ],
  },
  {
    title: "2. Mine Development",
    intro: "We prepare sites for safe and efficient extraction operations.",
    items: [
      "Site clearing and preparation",
      "Access road construction",
      "Establishment of operational infrastructure",
      "Mine planning and layout design",
    ],
  },
  {
    title: "3. Extraction Operations",
    intro:
      "We conduct controlled and efficient extraction using industry best practices.",
    items: [
      "Surface mining (open-pit operations)",
      "Underground mining support (where applicable)",
      "Drilling and blasting coordination",
      "Excavation, hauling, and material handling",
    ],
  },
  {
    title: "4. Ore Handling & Processing Support",
    intro:
      "We ensure extracted materials are efficiently managed and prepared for further processing.",
    items: [
      "Ore collection and transportation",
      "Stockpile management",
      "Crushing and screening support",
    ],
  },
  {
    title: "5. Safety & Environmental Management",
    intro:
      "Safety and environmental responsibility are central to all our mining operations.",
    items: [
      "Implementation of strict safety protocols",
      "Workforce safety training and supervision",
      "Environmental impact mitigation",
      "Waste management and site rehabilitation support",
    ],
  },
]

const miningExtractionExtraSections = [
  {
    title: "Equipment & Resources",
    intro:
      "We deploy suitable machinery and skilled personnel to ensure efficient operations:",
    items: [
      "Excavators and loaders",
      "Drilling equipment",
      "Haulage trucks",
      "On-site operational teams and supervisors",
    ],
  },
  {
    title: "Why Choose Mihreen LLC for Mining Operations",
    items: [
      "Strong operational discipline in remote and complex environments",
      "Commitment to safety and regulatory compliance",
      "Efficient resource utilization and cost control",
      "Reliable delivery aligned with project timelines",
      "Flexible solutions tailored to client requirements",
    ],
  },
  {
    title: "Sustainability Commitment",
    intro:
      "We are committed to responsible mining practices that minimize environmental impact and support long-term sustainability.",
    items: [
      "Land rehabilitation support",
      "Controlled resource extraction",
      "Environmental monitoring practices",
    ],
  },
]

function MiningExtractionModalSection({
  title,
  intro,
  items,
}: {
  title: string
  intro?: string
  items?: string[]
}) {
  return (
    <div className="service-modal-capability">
      <h4 className="service-modal-capability-title">{title}</h4>
      {intro ? <p className="service-modal-capability-intro">{intro}</p> : null}
      {items ? (
        <ul className="service-modal-capability-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <hr className="service-modal-divider" />
    </div>
  )
}

type ServicePageContent = {
  heading: string
  intro: string
  listHeading: string
  items: string[]
  closingLabel: string
  closingText: string
}

function ServicePageModalContent({
  heading,
  intro,
  listHeading,
  items,
  closingLabel,
  closingText,
}: ServicePageContent) {
  return (
    <div className="service-modal-doc">
      <DialogTitle className="service-modal-heading">{heading}</DialogTitle>
      <p className="service-modal-text">{intro}</p>
      <p className="service-modal-list-heading">{listHeading}</p>
      <ul className="service-modal-capability-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="service-modal-closing-label">{closingLabel}</p>
      <p className="service-modal-closing-text">{closingText}</p>
    </div>
  )
}

function MiningExtractionModalContent({
  onContactClick,
}: {
  onContactClick: () => void
}) {
  return (
    <div className="service-modal-doc">
      <DialogTitle className="service-modal-heading">
        Mining Extraction Services
      </DialogTitle>
      <p className="service-modal-text">
        Mihreen LLC delivers comprehensive mining extraction solutions designed
        to maximize resource recovery while ensuring safety, efficiency, and
        environmental responsibility. Our expertise spans from early-stage site
        assessment to full-scale production, supporting clients with reliable
        and results-driven operations.
      </p>
      <p className="service-modal-text">
        We combine technical knowledge, modern equipment, and disciplined
        operational processes to deliver consistent performance in challenging
        environments.
      </p>
      <hr className="service-modal-divider" />
      <h3 className="service-modal-heading">Our Capabilities</h3>
      {miningExtractionCapabilities.map((capability) => (
        <MiningExtractionModalSection
          key={capability.title}
          title={capability.title}
          intro={capability.intro}
          items={capability.items}
        />
      ))}
      {miningExtractionExtraSections.map((section) => (
        <MiningExtractionModalSection
          key={section.title}
          title={section.title}
          intro={section.intro}
          items={section.items}
        />
      ))}
      <hr className="service-modal-divider" />
      <div className="service-modal-footer">
        <p className="service-modal-closing-text">
          Partner with Mihreen LLC for dependable and efficient mining extraction
          services.
        </p>
        <ContactSectionLink
          className="btn-primary service-modal-end-btn"
          onBeforeNavigate={onContactClick}
        >
          Contact Us
          <ArrowRight className="h-4 w-4" aria-hidden />
        </ContactSectionLink>
      </div>
    </div>
  )
}

const services = [
  {
    title: "Mining Extraction",
    icon: Pickaxe,
    description:
      "Comprehensive mining extraction solutions focused on safety, efficiency, and environmentally responsible resource recovery.",
    modal: "mining" as const,
  },
  {
    title: "Construction & Rehabilitation",
    icon: Building2,
    description:
      "High-quality construction and rehabilitation services tailored to each client requirement.",
    modal: "page" as const,
    pageContent: {
      heading: "Construction & Rehabilitation",
      intro:
        "We deliver high-quality construction and rehabilitation services tailored to client requirements.",
      listHeading: "Our Services Include:",
      items: [
        "Civil and Buildings construction",
        "Rehabilitation and upgrades",
        "Quality and safety management",
      ],
      closingLabel: "Our Commitment:",
      closingText:
        "Deliver on time durable and cost-effective solutions within budgets.",
    },
  },
  {
    title: "Procurement & Supply",
    icon: PackageCheck,
    description:
      "End-to-end procurement for IT systems, power equipment, and office or project supplies.",
    modal: "page" as const,
    pageContent: {
      heading: "Procurement & Supply Solutions",
      intro:
        "We provide end-to-end procurement services for IT systems/networks, power equipment, and office/project supplies.",
      listHeading: "We Supply:",
      items: [
        "IT hardware and equipment",
        "Power tools and equipment",
        "Office and project requirements/equipment",
      ],
      closingLabel: "Our Strength:",
      closingText:
        "Global sourcing capabilities ensuring quality, cost-efficiency, and timely delivery.",
    },
  },
  {
    title: "Warehouse Management",
    icon: Warehouse,
    description:
      "Efficient storage and inventory management that supports safe warehousing and smooth operations.",
    modal: "page" as const,
    pageContent: {
      heading: "Warehouse Management",
      intro:
        "We offer efficient storage and inventory management solutions to support safe storages and smooth operations.",
      listHeading: "Key Services:",
      items: [
        "Inventory tracking and control",
        "Storage and distribution",
        "Stock auditing and reporting",
        "Secure warehouse operations",
      ],
      closingLabel: "Outcome:",
      closingText:
        "Improved efficiency, reduced losses, and better supply chain management.",
    },
  },
  {
    title: "Logistics & Transportation",
    icon: Truck,
    description:
      "Reliable transportation for consignments and materials with safety, compliance, and timely delivery.",
    modal: "page" as const,
    pageContent: {
      heading: "Transportation Services",
      intro: "We provide reliable transportation for consignments and materials.",
      listHeading: "Our Services Include:",
      items: [
        "Logistics coordination",
        "Trucks Provision and Management",
        "Safety and compliance monitoring",
      ],
      closingLabel: "Our Goal:",
      closingText: "Ensuring timely and secure delivery and transportation.",
    },
  },
]

export function ServicesSection() {
  const [openServiceTitle, setOpenServiceTitle] = useState<string | null>(null)

  const closeServiceModal = () => setOpenServiceTitle(null)

  return (
    <section id="services" className="section-bloom">
      <div className="page-container">
        <div className="services-section-intro text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Mihreen LLC offers a wide range of professional services designed
            to support resource extraction, infrastructure development, and
            operational efficiency.
          </p>
          <p className="section-subtitle mx-auto mb-0">
            Explore our specialized service areas below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Dialog
                key={service.title}
                open={openServiceTitle === service.title}
                onOpenChange={(open) =>
                  setOpenServiceTitle(open ? service.title : null)
                }
              >
                <DialogTrigger asChild>
                  <button type="button" className="svc-card text-left cursor-pointer">
                    <div className="svc-icon">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <span className="svc-link">
                      Learn More →
                    </span>
                  </button>
                </DialogTrigger>

                <DialogContent
                  aria-describedby={undefined}
                  className="service-modal service-modal--detailed border-0 data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100"
                >
                  {service.modal === "mining" ? (
                    <MiningExtractionModalContent
                      onContactClick={closeServiceModal}
                    />
                  ) : (
                    <ServicePageModalContent {...service.pageContent} />
                  )}
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </div>
    </section>
  )
}
