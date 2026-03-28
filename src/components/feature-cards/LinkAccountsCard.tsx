import Icon from "@/components/ui/icon"

const merch = [
  { name: "OVERSIZED TEE «OBSIDIAN»", price: "3 500 ₽", status: "В НАЛИЧИИ", color: "bg-gray-800" },
  { name: "ХУДИ «RITUAL_v2»", price: "6 200 ₽", status: "LAST 3", color: "bg-purple-900" },
  { name: "КЕПКА «GLITCH»", price: "2 100 ₽", status: "В НАЛИЧИИ", color: "bg-gray-800" },
  { name: "ВИНИЛОВАЯ ПЛАСТИНКА", price: "4 800 ₽", status: "SOLD OUT", color: "bg-red-900" },
]

export function LinkAccountsCard() {
  return (
    <div className="card-obsidian rounded-none p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[rgba(155,48,255,0.3)]"
        style={{ boxShadow: "0 0 15px rgba(155,48,255,0.15)" }}>
        <Icon name="ShoppingBag" size={18} className="text-gray-400" />
      </div>

      <div className="font-mono-tech text-xs tracking-widest mb-2" style={{ color: "var(--accent-color)" }}>
        // MERCH_STORE
      </div>
      <h3 className="mb-2 font-display text-xl font-bold text-white">Мерч</h3>
      <p className="mb-4 font-mono-tech text-xs text-gray-600 leading-relaxed">
        Одежда снята со вспышкой «в лоб» — как в криминальной хронике. Носи тьму.
      </p>

      <a href="#" className="mb-6 inline-flex items-center font-mono-tech text-xs text-gray-600 hover:text-white transition-colors tracking-widest">
        СМОТРЕТЬ ВСЁ <Icon name="ArrowUpRight" size={12} className="ml-1" />
      </a>

      <div className="mt-auto space-y-1.5 border border-[rgba(155,48,255,0.1)] p-3 bg-[#070707]">
        {merch.map((item, index) => (
          <div key={index} className="group flex items-center justify-between bg-[#0d0d0d] px-3 py-2.5 hover:bg-[rgba(155,48,255,0.05)] transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 ${item.color} flex items-center justify-center`}>
                <Icon name="Package" size={12} className="text-gray-400" />
              </div>
              <span className="font-mono-tech text-xs text-gray-400 group-hover:text-white transition-colors">{item.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="font-mono-tech text-xs"
                style={{ color: item.status === "SOLD OUT" ? "#666" : item.status === "LAST 3" ? "#ff6b35" : "var(--accent-color)" }}
              >
                {item.status}
              </span>
              <span className="font-mono-tech text-xs text-gray-600">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
