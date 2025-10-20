import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PricingSection } from "@/components/pricing-section"
import { StatsOverview } from "@/components/stats-overview"
import { PerformanceCharts } from "@/components/performance-charts"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PricingSection />
      <TestimonialsSection />
      <StatsOverview />
      <PerformanceCharts />
      <FinalCTA />
      <Footer />
    </main>
  )
}
