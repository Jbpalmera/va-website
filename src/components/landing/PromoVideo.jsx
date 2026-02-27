import promoVideo from "../../assets/prom-video.mp4";

export default function PromoVideo() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-black via-[#070b14] to-[#0b172a] border-y border-white/10">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-140px] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-180px] bottom-[-220px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-wide text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Product Demo
          </span> */}

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            See How It Works
          </h2>

          <p className="mt-3 text-base leading-relaxed text-white/70 md:text-lg">
            A quick walkthrough of how we help teams save time and scale faster
            with dedicated virtual support.
          </p>
        </div>

        {/* video card */}
        <div className="mt-10 mx-auto max-w-5xl">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
            {/* subtle top sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-3xl bg-gradient-to-b from-white/10 to-transparent" />

            <div className="relative overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
              <video
                src={promoVideo}
                controls
                preload="metadata"
                playsInline
                className="w-full aspect-video object-cover"
              />
            </div>

            {/* meta row */}
            <div className="mt-4 flex flex-col gap-3 px-1 md:flex-row md:items-center md:justify-between">
              {/* <p className="text-sm text-white/60">
                ~2 min overview • Clear process • Real examples
              </p> */}

              {/* <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                  HD Playback
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                  Instant access
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                  No signup
                </span>
              </div> */}
            </div>
          </div>

          {/* micro trust text */}
          <p className="mt-4 text-center text-xs text-white/50">
            Trusted by founders, agencies, and growing teams worldwide.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-95"
          >
            View Pricing
            <span className="transition group-hover:translate-x-0.5">→</span>
          </a>

          <a
            href="#contact"
            className="ml-3 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}