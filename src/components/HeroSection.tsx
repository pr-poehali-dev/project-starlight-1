import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const el = heroRef.current
    el?.addEventListener("mousemove", handleMouseMove)
    return () => el?.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center px-4 pt-20 pb-16 text-center overflow-hidden min-h-[85vh]"
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute rounded-full transition-all duration-200 opacity-20"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(155,48,255,0.6) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Smoke bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10"
          style={{
            background: "radial-gradient(ellipse, rgba(155,48,255,0.8) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-[300px] h-[300px] opacity-5"
          style={{
            background: "radial-gradient(circle, rgba(155,48,255,1) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "pulse-glow 6s ease-in-out infinite",
          }}
        />
      </div>

      {/* Badge */}
      <div
        className={`mb-8 inline-flex items-center gap-2 border border-[rgba(155,48,255,0.3)] px-3 py-1.5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ background: "rgba(155,48,255,0.05)" }}
      >
        <span className="font-mono-tech text-xs tracking-widest" style={{ color: "var(--accent-color)" }}>
          // NEW_RELEASE
        </span>
        <span className="font-mono-tech text-xs text-gray-500">АЛЬБОМ «ТЁМНАЯ МАТЕРИЯ» — 2026</span>
      </div>

      {/* Main heading */}
      <h1
        className={`mb-6 font-display font-black text-white leading-none transition-all duration-1000 delay-200 glitch-text ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        data-text="МРАКОБЕСИЕ"
        style={{
          fontSize: "clamp(4rem, 12vw, 10rem)",
          letterSpacing: "-0.02em",
          textShadow: "0 0 60px rgba(155,48,255,0.3)",
        }}
      >
        МРАКО
        <span style={{ color: "var(--accent-color)", textShadow: "0 0 40px rgba(155,48,255,0.8)" }}>
          БЕСИЕ
        </span>
      </h1>

      <div
        className={`font-mono-tech text-3xl md:text-4xl tracking-[0.3em] mb-6 transition-all duration-1000 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ color: "var(--accent-color)" }}
      >
        v2.0
      </div>

      <p
        className={`mb-10 max-w-lg font-mono-tech text-sm text-gray-500 leading-relaxed tracking-wide transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {"// "}<span className="text-gray-400">тьма — это не отсутствие света</span><br />
        {"// "}<span className="text-gray-400">это другая частота</span>
      </p>

      <div
        className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <Button
          className="btn-accent rounded-none text-white font-mono-tech text-xs tracking-widest px-8 py-6 border-0"
        >
          <Icon name="Play" size={14} className="mr-2 fill-white" /> СЛУШАТЬ АЛЬБОМ
        </Button>
        <Button
          variant="outline"
          className="rounded-none border-[rgba(155,48,255,0.3)] bg-transparent text-gray-400 hover:text-white hover:border-[rgba(155,48,255,0.7)] font-mono-tech text-xs tracking-widest px-8 py-6 transition-all duration-300"
        >
          <Icon name="Calendar" size={14} className="mr-2" /> БЛИЖАЙШИЙ РИТУАЛ
        </Button>
      </div>

      {/* Waveform decoration */}
      <div className="mt-16 waveform opacity-60">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="waveform-bar"
            style={{
              height: `${Math.random() * 20 + 4}px`,
              animationDelay: `${(i * 0.04).toFixed(2)}s`,
              animationDuration: `${(Math.random() * 0.6 + 0.8).toFixed(2)}s`,
            }}
          />
        ))}
      </div>

      {/* Coord decorations */}
      <div className="absolute bottom-6 left-8 font-mono-tech text-xs text-gray-700 hidden md:block">
        LAT: 55.7558°N · LON: 37.6173°E
      </div>
      <div className="absolute bottom-6 right-8 font-mono-tech text-xs text-gray-700 hidden md:block">
        BPM: 140 · KEY: D_MINOR
      </div>
    </section>
  )
}
