import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CareersSection } from "@/components/careers-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="site-main min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <WhyUsSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
