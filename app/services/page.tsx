import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"
export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Mihreen LLC services including mining extraction, construction and rehabilitation, procurement and supply, warehouse management, and transportation.",
}

export default function ServicesPage() {
  return (
    <main className="site-main min-h-screen overflow-x-hidden">
      <Header />
      <ServicesSection />
      <Footer />
    </main>
  )
}
