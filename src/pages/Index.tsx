import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"

export default function Index() {
  return (
    <main className="min-h-screen noise-overlay" style={{ background: "#080808" }}>
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <footer className="py-10 text-center border-t border-[rgba(155,48,255,0.1)]">
        <div className="font-display text-2xl font-black text-gray-800 mb-3 tracking-widest">
          МРАКОБЕСИЕ 2.0
        </div>
        <div className="font-mono-tech text-xs text-gray-700 tracking-widest">
          {"// "} ВСЕ ПРАВА ЗАЩИЩЕНЫ · 2026 · ТЬМА — ЭТО ДРУГАЯ ЧАСТОТА
        </div>
      </footer>
    </main>
  )
}
