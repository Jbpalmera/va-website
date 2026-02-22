import {
  Plane, PhoneCall, Inbox,
  ShoppingBag, BarChart2, Receipt,
  CheckCircle2,
} from "lucide-react";

const messages = [
  {
    icon: Plane,
    tag: "Travel",
    time: "9:02 AM",
    accentColor: "text-blue-600",
    accentBg: "bg-blue-500",
    badgeBg: "bg-blue-100 text-blue-700",
    iconRing: "ring-1 ring-blue-100 bg-blue-50",
    summary: "Travel booked & confirmed",
    text: "Your travel is booked. Flights, hotel, and transportation confirmed. Your full itinerary is in your inbox.",
    meta: "3 confirmations sent",
  },
  {
    icon: PhoneCall,
    tag: "Sales",
    time: "11:45 AM",
    accentColor: "text-violet-600",
    accentBg: "bg-violet-500",
    badgeBg: "bg-violet-100 text-violet-700",
    iconRing: "ring-1 ring-violet-100 bg-violet-50",
    summary: "12 leads called, CRM updated",
    text: "I called all 12 leads, updated your CRM, and set 3 new appointments for you.",
    meta: "3 appointments booked",
  },
  {
    icon: Inbox,
    tag: "Email",
    time: "10:30 AM",
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-500",
    badgeBg: "bg-emerald-100 text-emerald-700",
    iconRing: "ring-1 ring-emerald-100 bg-emerald-50",
    summary: "Inbox cleared & replies drafted",
    text: "I cleaned up your inbox, flagged 8 important messages, and drafted replies for the ones needing action.",
    meta: "8 flagged · 5 drafts ready",
  },
  {
    icon: ShoppingBag,
    tag: "Operations",
    time: "2:15 PM",
    accentColor: "text-amber-600",
    accentBg: "bg-amber-500",
    badgeBg: "bg-amber-100 text-amber-700",
    iconRing: "ring-1 ring-amber-100 bg-amber-50",
    summary: "Supply order placed & tracked",
    text: "Your supply order has been placed, delivery scheduled, and the tracking number is in your dashboard.",
    meta: "Delivery: 2–3 business days",
  },
  {
    icon: BarChart2,
    tag: "Reporting",
    time: "4:00 PM",
    accentColor: "text-rose-600",
    accentBg: "bg-rose-500",
    badgeBg: "bg-rose-100 text-rose-700",
    iconRing: "ring-1 ring-rose-100 bg-rose-50",
    summary: "Monthly report ready for review",
    text: "Your monthly report is ready. Numbers pulled, data cleaned, and everything organized for review.",
    meta: "12 data sources merged",
  },
  {
    icon: Receipt,
    tag: "Finance",
    time: "5:30 PM",
    accentColor: "text-cyan-600",
    accentBg: "bg-cyan-500",
    badgeBg: "bg-cyan-100 text-cyan-700",
    iconRing: "ring-1 ring-cyan-100 bg-cyan-50",
    summary: "Invoices followed up & reconciled",
    text: "I followed up with all open invoices and marked the ones that have been paid.",
    meta: "4 of 6 invoices cleared",
  },
];

export default function DailyWork() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Real Work, Done Daily
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What Your Assistant{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Gets Done Every Day
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            These aren't hypotheticals — this is what your assistant will actually
            send you at the end of each workday.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((msg) => {
            const Icon = msg.icon;
            return (
              <div
                key={msg.tag}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Top row */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${msg.iconRing}`}>
                      <Icon className={`h-4 w-4 ${msg.accentColor}`} strokeWidth={2} />
                    </div>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${msg.badgeBg}`}>
                      {msg.tag}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">{msg.time}</span>
                </div>

                {/* Summary */}
                <p className="mb-2 text-sm font-semibold text-slate-900">{msg.summary}</p>

                {/* Body */}
                <p className="flex-1 text-sm leading-relaxed text-slate-500">{msg.text}</p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" strokeWidth={2.5} />
                    {msg.meta}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-300">
                    Your Assistant
                  </span>
                </div>

                {/* Hover bottom accent bar */}
                <span className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full ${msg.accentBg}`} />
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-slate-400">
          Your assistant works your hours — reporting back daily so you're always in the loop.
        </p>
      </div>
    </section>
  );
}