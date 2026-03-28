import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`flex items-center justify-between px-8 py-5 sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-[rgba(155,48,255,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-3">
        <MrakLogo />
        <span
          className="text-xl font-display font-black tracking-widest text-white animate-flicker"
          style={{ letterSpacing: "0.15em" }}
        >
          МРАКОБЕСИЕ<sup className="text-xs text-accent-glow ml-1" style={{ color: "var(--accent-color)" }}>2.0</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {["МУЗЫКА", "МЕРЧ", "АФИША", "О ПРОЕКТЕ"].map((item) => (
          <a
            key={item}
            href="#"
            className="font-mono-tech text-xs tracking-widest text-gray-500 hover:text-white transition-all duration-300 hover:tracking-[0.2em]"
          >
            {item}
          </a>
        ))}
      </nav>

      <Button className="rounded-none border border-[rgba(155,48,255,0.5)] text-white bg-transparent hover:bg-[rgba(155,48,255,0.1)] hover:border-[rgba(155,48,255,0.9)] font-mono-tech text-xs tracking-widest px-5 transition-all duration-300"
        style={{ boxShadow: "0 0 15px rgba(155,48,255,0.1)" }}
      >
        ВСТУПИТЬ В КУЛЬТ
      </Button>
    </header>
  )
}

function MrakLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="14,2 26,24 2,24" fill="none" stroke="#9b30ff" strokeWidth="1.5" opacity="0.9" />
      <polygon points="14,7 22,22 6,22" fill="rgba(155,48,255,0.15)" stroke="#9b30ff" strokeWidth="0.5" opacity="0.5" />
      <circle cx="14" cy="16" r="2" fill="#9b30ff" opacity="0.9" />
    </svg>
  )
}
