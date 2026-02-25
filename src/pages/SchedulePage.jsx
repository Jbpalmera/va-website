import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import LoadingWithLogo from "../components/ui/LoadingWithLogo";
import Contact from "../components/landing/Contact"; // <-- adjust path if yours is different

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function isFutureOnly(date) {
  // future only (NOT today)
  const today = startOfDay(new Date());
  return startOfDay(date).getTime() > today.getTime();
}

function formatTime(date) {
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

/**
 * Demo: generate slots for a date
 * Replace this with your API call later.
 */
function buildSlotsForDate(date, tz = Intl.DateTimeFormat().resolvedOptions().timeZone) {
  const base = new Date(date);
  base.setHours(11, 0, 0, 0);

  const slots = [];
  const incrementsMins = [0, 90, 135, 150, 165, 180];

  for (let i = 0; i < incrementsMins.length; i++) {
    const s = new Date(base.getTime() + incrementsMins[i] * 60 * 1000);
    slots.push({
      id: `${startOfDay(date).toISOString()}_${i}`,
      start: s,
      label: formatTime(s),
      tz,
      durationMins: 20,
    });
  }

  return slots;
}

export default function SchedulePage() {
  const [loading, setLoading] = useState(true);

  const [viewDate, setViewDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const [selectedDate, setSelectedDate] = useState(null);

  const [slotsLoading, setSlotsLoading] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlotId, setSelectedSlotId] = useState(null);

  const contactRef = useRef(null);

  const timezone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    []
  );

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const monthLabel = useMemo(() => {
    return viewDate.toLocaleString("en-US", { month: "long", year: "numeric" });
  }, [viewDate]);

  const calendarDays = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startWeekday = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startWeekday; i++) days.push(null);

    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }

    return days;
  }, [viewDate]);

  const goPrevMonth = () => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
    setSelectedDate(null);
    setSelectedSlotId(null);
    setTimeSlots([]);
  };

  const goNextMonth = () => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
    setSelectedDate(null);
    setSelectedSlotId(null);
    setTimeSlots([]);
  };

  // Load slots when a date is selected
  useEffect(() => {
    if (!selectedDate) return;

    setSlotsLoading(true);
    setSelectedSlotId(null);

    const t = setTimeout(() => {
      setTimeSlots(buildSlotsForDate(selectedDate, timezone));
      setSlotsLoading(false);
    }, 500);

    return () => clearTimeout(t);
  }, [selectedDate, timezone]);

  const selectedDateLabel = useMemo(() => {
    if (!selectedDate) return "";
    return selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, [selectedDate]);

  const selectedSlot = useMemo(() => {
    if (!selectedSlotId) return null;
    return timeSlots.find((s) => s.id === selectedSlotId) || null;
  }, [selectedSlotId, timeSlots]);

  // Scroll to contact once time is selected
  useEffect(() => {
    if (!selectedSlotId) return;
    const t = setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => clearTimeout(t);
  }, [selectedSlotId]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="bg-slate-50">
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left info card */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-600/10 ring-1 ring-blue-200 flex items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                </div>
                <p className="text-sm font-semibold text-slate-600">
                  Schedule a Consultation
                </p>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Book a Free Consultation with Eminence VA Solutions
              </h1>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Pick a future date to meet with our team. We’ll learn about your business,
                recommend the right VA service, and outline next steps.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Tell us about your project and your needs
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Learn about our recruitment and onboarding process
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Get matched with the best VA plan for your team
                </li>
              </ul>

              {selectedDate && (
                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Selected day
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    {selectedDateLabel}
                  </p>

                  {selectedSlot ? (
                    <p className="mt-2 text-sm text-slate-700">
                      Selected time:{" "}
                      <span className="font-semibold">{selectedSlot.label}</span>{" "}
                      ({timezone})
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-slate-600">
                      Next step: select a time slot on the right.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Right calendar/time card */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              {loading ? (
                <LoadingWithLogo className="py-20" />
              ) : (
                <>
                  {!selectedDate ? (
                    <>
                      <div className="text-center">
                        <p className="text-sm font-semibold text-slate-700">
                          Select a Day
                        </p>

                        <div className="mt-4 flex items-center justify-center gap-6">
                          <button
                            onClick={goPrevMonth}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
                            type="button"
                            aria-label="Previous month"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>

                          <p className="text-sm font-semibold text-slate-800">
                            {monthLabel}
                          </p>

                          <button
                            onClick={goNextMonth}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
                            type="button"
                            aria-label="Next month"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8 grid grid-cols-7 gap-2 text-center text-xs font-semibold text-slate-500">
                        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                          <div key={d}>{d}</div>
                        ))}
                      </div>

                      <div className="mt-3 grid grid-cols-7 gap-2">
                        {calendarDays.map((d, idx) => {
                          if (!d) return <div key={`blank-${idx}`} />;

                          const future = isFutureOnly(d);

                          return (
                            <button
                              key={d.toISOString()}
                              type="button"
                              disabled={!future}
                              onClick={() => future && setSelectedDate(d)}
                              className={[
                                "h-10 w-10 rounded-full text-sm font-semibold transition",
                                future
                                  ? "bg-slate-100 text-slate-800 hover:bg-blue-50 hover:text-blue-700"
                                  : "text-slate-300 cursor-not-allowed",
                              ].join(" ")}
                              aria-label={d.toDateString()}
                            >
                              {d.getDate()}
                            </button>
                          );
                        })}
                      </div>

                      <p className="mt-8 text-center text-xs text-slate-500">
                        Only future dates are available for booking.
                      </p>
                    </>
                  ) : (
                    <>
                      {/* Time slots view */}
                      <div className="flex items-start justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedDate(null);
                            setSelectedSlotId(null);
                            setTimeSlots([]);
                          }}
                          className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
                          aria-label="Back to calendar"
                        >
                          <ArrowLeft className="h-5 w-5" />
                        </button>

                        <div className="flex-1 text-center">
                          <p className="text-lg font-extrabold text-slate-900">
                            {selectedDate.toLocaleDateString("en-US", { weekday: "long" })}
                          </p>
                          <p className="mt-1 text-sm text-slate-600">
                            {selectedDate.toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>

                          <div className="mt-4 text-sm text-slate-600">
                            <span className="font-semibold text-slate-700">Time zone:</span>{" "}
                            {timezone}
                          </div>
                        </div>

                        <div className="w-10" />
                      </div>

                      <div className="mt-8 text-center">
                        <p className="text-lg font-extrabold text-slate-900">
                          Select a Time
                        </p>
                        <p className="mt-1 text-sm text-slate-600">Duration: 20 min</p>
                      </div>

                      {slotsLoading ? (
                        <LoadingWithLogo className="py-10" logoSize={50} dotSize={8} />
                      ) : (
                        <div className="mt-6 max-h-[420px] space-y-3 overflow-auto pr-2">
                          {timeSlots.map((slot) => {
                            const active = slot.id === selectedSlotId;
                            return (
                              <button
                                key={slot.id}
                                type="button"
                                onClick={() => setSelectedSlotId(slot.id)}
                                className={[
                                  "w-full rounded-2xl border p-4 text-center text-sm font-semibold transition",
                                  active
                                    ? "border-blue-600 bg-blue-50 text-blue-700"
                                    : "border-blue-200 bg-white text-blue-700 hover:bg-blue-50",
                                ].join(" ")}
                              >
                                {slot.label}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      <div className="mt-6">
                        <button
                          type="button"
                          disabled={!selectedSlotId}
                          onClick={() => {
                            // Optional: click "Continue" should also scroll to form
                            contactRef.current?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }}
                          className={[
                            "w-full rounded-2xl px-5 py-3 text-sm font-semibold transition",
                            selectedSlotId
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "bg-slate-200 text-slate-500 cursor-not-allowed",
                          ].join(" ")}
                        >
                          Continue
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>

          {/* CONTACT appears AFTER date + time selection */}
          {selectedDate && selectedSlot && (
            <div ref={contactRef} className="mt-10">
              <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Booking summary
                </p>
                <p className="mt-2 text-lg font-extrabold text-slate-900">
                  {selectedDateLabel}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Time:{" "}
                  <span className="font-semibold text-slate-800">
                    {selectedSlot.label}
                  </span>{" "}
                  ({timezone})
                </p>
              </div>

              {/* Render your Contact form section */}
              <Contact />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}