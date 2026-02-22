// Styled wordmark logos — each with its own brand-like color + font treatment
const logos = [
  { name: "Builder",    color: "text-blue-600",   font: "font-black",       letter: "B·" },
  { name: "Chord",      color: "text-violet-600",  font: "font-bold italic", letter: "♩" },
  { name: "Harvard",    color: "text-red-700",     font: "font-black",       letter: "H·" },
  { name: "DoorDash",   color: "text-red-500",     font: "font-extrabold",   letter: "DD" },
  { name: "Chick-fil-A",color: "text-red-600",     font: "font-bold",        letter: "CFA" },
  { name: "Berkeley",   color: "text-amber-600",   font: "font-black",       letter: "UC·" },
  { name: "Compass",    color: "text-slate-800",   font: "font-bold",        letter: "⊕" },
  { name: "Vivvi",      color: "text-emerald-600", font: "font-extrabold",   letter: "Vi" },
  { name: "Buena",      color: "text-cyan-600",    font: "font-bold italic", letter: "Bu·" },
  { name: "Clearpol",   color: "text-indigo-600",  font: "font-extrabold",   letter: "CP" },
  { name: "KW",         color: "text-rose-600",    font: "font-black",       letter: "KW·" },
];

// Duplicate for seamless infinite loop
const track = [...logos, ...logos];

export default function TrustedBy() {
  return (
    <section className="overflow-hidden border-y border-slate-100 bg-white py-10">
      <div className="mx-auto mb-8 max-w-[1350px] px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by thousands of companies around the world
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Left + right fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div
          className="flex w-max animate-marquee gap-12 px-6"
          style={{ animationDuration: "30s" }}
        >
          {track.map((company, i) => (
            <div
              key={i}
              className="flex flex-none select-none items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-5 py-3 shadow-sm transition hover:border-slate-200 hover:shadow-md"
            >
              {/* Icon badge */}
              <span
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-white text-xs font-black shadow-sm ring-1 ring-slate-100 ${company.color}`}
              >
                {company.letter}
              </span>
              {/* Wordmark */}
              <span className={`text-sm tracking-tight text-slate-700 ${company.font}`}>
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe injected via style tag */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}