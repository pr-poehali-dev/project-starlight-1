import Icon from "@/components/ui/icon"

const shows = [
  { city: "МОСКВА", venue: "Aglomerat", date: "12 АПР 2026", countdown: "015 ДНЕЙ", status: "ИНЦИДЕНТ" },
  { city: "САНКТ-ПЕТЕРБУРГ", venue: "Zal Ozhidaniya", date: "19 АПР 2026", countdown: "022 ДНЯ", status: "РИТУАЛ" },
  { city: "ЕКАТЕРИНБУРГ", venue: "Tele-Club", date: "03 МАЯ 2026", countdown: "036 ДНЕЙ", status: "РИТУАЛ" },
  { city: "НОВОСИБИРСК", venue: "Podzemka", date: "10 МАЯ 2026", countdown: "043 ДНЯ", status: "ОЖИДАНИЕ" },
]

export function PaymentRolesCard() {
  return (
    <div className="card-obsidian rounded-none p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[rgba(155,48,255,0.3)]"
        style={{ boxShadow: "0 0 15px rgba(155,48,255,0.15)" }}>
        <Icon name="MapPin" size={18} className="text-gray-400" />
      </div>

      <div className="font-mono-tech text-xs tracking-widest mb-2" style={{ color: "var(--accent-color)" }}>
        // INCIDENT_LOG
      </div>
      <h3 className="mb-2 font-display text-xl font-bold text-white">Афиша</h3>
      <p className="mb-4 font-mono-tech text-xs text-gray-600 leading-relaxed">
        Список предстоящих ритуалов. Обратный отсчёт до вторжения.
      </p>

      <a href="#" className="mb-6 inline-flex items-center font-mono-tech text-xs text-gray-600 hover:text-white transition-colors tracking-widest">
        ВСЕ ИНЦИДЕНТЫ <Icon name="ArrowUpRight" size={12} className="ml-1" />
      </a>

      <div className="mt-auto space-y-2 border border-[rgba(155,48,255,0.1)] p-3 bg-[#070707]">
        {shows.map((show, index) => (
          <div key={index} className="group bg-[#0d0d0d] px-3 py-3 hover:bg-[rgba(155,48,255,0.05)] transition-colors cursor-pointer">
            <div className="flex items-start justify-between mb-1">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-tech text-xs text-white tracking-widest">{show.city}</span>
                  <span className="font-mono-tech text-xs text-gray-600">·</span>
                  <span className="font-mono-tech text-xs text-gray-500">{show.venue}</span>
                </div>
                <span className="font-mono-tech text-xs text-gray-700">{show.date}</span>
              </div>
              <div className="text-right">
                <div className="font-mono-tech text-xs" style={{ color: "var(--accent-color)" }}>
                  -{show.countdown}
                </div>
                <div className="font-mono-tech text-[10px] text-gray-700 mt-0.5">{show.status}</div>
              </div>
            </div>
          </div>
        ))}

        <button className="w-full mt-2 py-2 font-mono-tech text-xs tracking-widest text-gray-600 hover:text-white border border-dashed border-[rgba(155,48,255,0.15)] hover:border-[rgba(155,48,255,0.4)] transition-all duration-300">
          + КУПИТЬ БИЛЕТ
        </button>
      </div>
    </div>
  )
}
