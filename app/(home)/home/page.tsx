import { HeroSlider } from "@/components/hero/hero-slider"
import { ProcessSteps } from "@/components/features/process-steps"
import { SolutionsSection } from "@/components/solutions/solutions-section"
import { RegisterCTA } from "@/components/cta/register-cta"
import { PricingSection } from "@/components/pricing/pricing-section"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="w-full">
        <HeroSlider />
      </div>
      <div className="w-full max-w-[1400px] mx-auto">
        <ProcessSteps />
        <SolutionsSection />
        <RegisterCTA />
        <PricingSection />
      </div>
    </main>
  )
}