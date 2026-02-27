import { useEffect } from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const CALENDAR_IFRAME_SRC =
  "https://api.leadconnectorhq.com/widget/booking/ICnHRj459jDEQDNFZUEq";

const GHL_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return resolve();

    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function SchedulePage() {
  useEffect(() => {
    loadScriptOnce(GHL_SCRIPT).catch((err) =>
      console.error("Failed to load GHL script:", err)
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="bg-slate-50">
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:px-8">
          {/* Header Section */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Book a Free Consultation
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Choose a time that works for you. Once booked, you’ll receive
              instant confirmation and meeting details.
            </p>
          </div>

          {/* Calendar Embed Card */}
          <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <iframe
              src={CALENDAR_IFRAME_SRC}
              style={{
                width: "100%",
                border: "none",
                overflow: "hidden",
                minHeight: "750px",
              }}
              scrolling="no"
              id="ICnHRj459jDEQDNFZUEq"
              title="Eminence VA Strategy Call Booking"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}