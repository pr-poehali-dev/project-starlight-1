import { useState } from "react"
import Icon from "@/components/ui/icon"

const playlist = [
  { title: "ТЁМНАЯ МАТЕРИЯ", duration: "4:12" },
  { title: "ГЛИТЧ-РИТУАЛ", duration: "3:58" },
  { title: "ОБСИДИАНОВЫЙ ТРОН", duration: "5:03" },
]

export function SendFundsCard() {
  const [playing, setPlaying] = useState(false)
  const [activeTrack, setActiveTrack] = useState(0)
  const [progress, setProgress] = useState(37)

  return (
    <div className="card-obsidian rounded-none p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[rgba(155,48,255,0.3)]"
        style={{ boxShadow: "0 0 15px rgba(155,48,255,0.15)" }}>
        <Icon name="Music2" size={18} className="text-gray-400" />
      </div>

      <div className="font-mono-tech text-xs tracking-widest mb-2" style={{ color: "var(--accent-color)" }}>
        // AUDIO_TERMINAL
      </div>
      <h3 className="mb-2 font-display text-xl font-bold text-white">Плеер</h3>
      <p className="mb-4 font-mono-tech text-xs text-gray-600 leading-relaxed">
        Минималистичный терминал. Острые пики — как кардиограмма во тьме.
      </p>

      <a href="#" className="mb-6 inline-flex items-center font-mono-tech text-xs text-gray-600 hover:text-white transition-colors tracking-widest">
        ВСЕ ТРЕКИ <Icon name="ArrowUpRight" size={12} className="ml-1" />
      </a>

      <div className="mt-auto border border-[rgba(155,48,255,0.1)] p-4 bg-[#070707] space-y-4">
        {/* Now playing */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono-tech text-xs text-gray-600 mb-0.5">NOW_PLAYING</div>
            <div className="font-mono-tech text-sm text-white tracking-widest">{playlist[activeTrack].title}</div>
          </div>
          {playing && (
            <div className="waveform">
              {[1,2,3,4,5,6,7].map((b) => (
                <div key={b} className="waveform-bar" style={{ animationDelay: `${b * 0.07}s` }} />
              ))}
            </div>
          )}
        </div>

        {/* Progress */}
        <div>
          <div className="w-full h-px bg-[#1a1a1a] relative mb-1 cursor-pointer">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300"
              style={{ width: `${progress}%`, background: "var(--accent-color)", boxShadow: "0 0 8px var(--accent-glow)" }}
            />
          </div>
          <div className="flex justify-between font-mono-tech text-xs text-gray-700">
            <span>01:33</span>
            <span>{playlist[activeTrack].duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button
            className="font-mono-tech text-xs text-gray-600 hover:text-white transition-colors tracking-widest"
            onClick={() => setActiveTrack((p) => Math.max(0, p - 1))}
          >
            {"<<"} PREV
          </button>
          <button
            className="flex items-center justify-center w-10 h-10 border transition-all duration-300"
            style={{
              borderColor: "rgba(155,48,255,0.5)",
              background: playing ? "rgba(155,48,255,0.2)" : "transparent",
              boxShadow: playing ? "0 0 20px rgba(155,48,255,0.3)" : "none",
            }}
            onClick={() => setPlaying((p) => !p)}
          >
            <Icon name={playing ? "Pause" : "Play"} size={14} className="text-white" style={{ color: "var(--accent-color)" } as React.CSSProperties} />
          </button>
          <button
            className="font-mono-tech text-xs text-gray-600 hover:text-white transition-colors tracking-widest"
            onClick={() => setActiveTrack((p) => Math.min(playlist.length - 1, p + 1))}
          >
            NEXT {">>"}
          </button>
        </div>

        {/* Track list */}
        <div className="pt-2 border-t border-dashed border-[#1a1a1a] space-y-1">
          {playlist.map((track, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between cursor-pointer group py-1"
              onClick={() => { setActiveTrack(idx); setProgress(0) }}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono-tech text-xs text-gray-700 w-4">{String(idx + 1).padStart(2, "0")}</span>
                <span className={`font-mono-tech text-xs tracking-widest transition-colors ${idx === activeTrack ? "text-white" : "text-gray-600 group-hover:text-gray-400"}`}>
                  {track.title}
                </span>
              </div>
              <span className="font-mono-tech text-xs" style={{ color: idx === activeTrack ? "var(--accent-color)" : "#444" }}>
                {track.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
