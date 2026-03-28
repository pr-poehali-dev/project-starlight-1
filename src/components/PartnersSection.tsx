const tracks = [
  { id: "01", title: "ТЁМНАЯ МАТЕРИЯ", bpm: "138 BPM", duration: "4:12" },
  { id: "02", title: "ГЛИТЧ-РИТУАЛ", bpm: "142 BPM", duration: "3:58" },
  { id: "03", title: "ОБСИДИАНОВЫЙ ТРОН", bpm: "135 BPM", duration: "5:03" },
  { id: "04", title: "ЦИФРОВОЙ РАСПАД", bpm: "140 BPM", duration: "4:31" },
  { id: "05", title: "ПОМЕХИ", bpm: "145 BPM", duration: "3:44" },
]

export function PartnersSection() {
  return (
    <section className="px-4 md:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Terminal header */}
        <div className="flex items-center gap-3 mb-1 px-4">
          <span className="font-mono-tech text-xs text-gray-700">
            {">"} TRACKLIST_ТЕМНАЯ_МАТЕРИЯ.txt
          </span>
          <div className="flex-1 h-px bg-[rgba(155,48,255,0.15)]" />
          <span className="font-mono-tech text-xs" style={{ color: "var(--accent-color)" }}>
            [5 TRACKS]
          </span>
        </div>

        <div className="border border-[rgba(155,48,255,0.12)] bg-[#0a0a0a]">
          {tracks.map((track, idx) => (
            <div
              key={track.id}
              className="group flex items-center justify-between px-4 py-3 border-b border-[rgba(155,48,255,0.06)] last:border-0 cursor-pointer hover:bg-[rgba(155,48,255,0.04)] transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono-tech text-xs text-gray-700 w-6">{track.id}</span>
                <div className="waveform opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {[1,2,3,4,5].map((b) => (
                    <div key={b} className="waveform-bar" style={{ height: `${b * 3 + 4}px`, animationDelay: `${b * 0.1}s` }} />
                  ))}
                </div>
                <span className="font-mono-tech text-sm text-gray-300 group-hover:text-white transition-colors tracking-widest">
                  {track.title}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-mono-tech text-xs text-gray-700 hidden md:block">{track.bpm}</span>
                <span className="font-mono-tech text-xs" style={{ color: "var(--accent-color)" }}>{track.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
