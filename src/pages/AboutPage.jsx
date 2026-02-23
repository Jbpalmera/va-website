import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import FloatingChat from "../components/FloatingChat";
import BackToTop from "../components/BackToTop";

import cooImage from "../assets/coo.jpeg"; // Adjust path if needed

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24">
        {/* ================= Mission & Vision Section ================= */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                About Eminence VA Solutions
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                We help founders, startups, and growing businesses delegate smarter,
                operate faster, and scale without hiring full-time overhead.
              </p>
            </div>

            <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
              
              {/* Left Content */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Our Mission
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Our mission is simple — give businesses access to reliable,
                  highly-trained assistants who integrate seamlessly into their
                  workflow. We remove operational bottlenecks so you can focus on growth.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-slate-900">
                  Our Vision
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  We envision a future where businesses of all sizes can scale
                  efficiently without operational limitations. By combining
                  talented virtual assistants with structured systems, we help
                  companies grow with confidence.
                </p>
              </div>

              {/* Right Visual Block */}
              <div className="rounded-2xl bg-slate-100 p-8">
                <div className="aspect-video w-full rounded-xl bg-slate-200" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= CEO Section ================= */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Chief Executive Officer
                </h2>
                <p className="mt-6 leading-relaxed text-slate-600">
                  Our CEO leads Eminence VA Solutions with a strong vision for
                  scalable growth and operational excellence. With a focus on
                  innovation, client success, and long-term partnerships, the
                  company continues to expand its impact across industries.
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  By combining strategic leadership with a deep understanding
                  of modern business challenges, our CEO ensures that every
                  client receives exceptional value and measurable results.
                </p>
              </div>

              {/* Placeholder Image Block */}
              <div className="rounded-2xl bg-white p-8 shadow-md">
                <div className="aspect-square w-full rounded-xl bg-slate-200" />
              </div>

            </div>
          </div>
        </section>

        {/* ================= COO Section ================= */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">

              {/* Image */}
              <div>
                <img
  src={cooImage}
  alt="Mark Jhon MJ Vallena - COO of Eminence VA Solutions"
  className="w-[380px] h-[480px] object-cover rounded-2xl shadow-xl mx-auto"
/>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Mark Jhon “MJ” Vallena
                </h2>
                <p className="mt-2 text-lg font-medium text-slate-600">
                  Chief Operating Officer
                </p>

                <p className="mt-6 leading-relaxed text-slate-600">
                  As the Chief Operating Officer of Eminence VA Solutions, MJ oversees 
                  the company’s day-to-day operations, ensuring that every client receives 
                  consistent, high-quality support. His leadership centers on operational 
                  efficiency, team alignment, and performance optimization.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  With extensive experience in operations management and structured 
                  process development, MJ builds scalable systems that allow the company 
                  to grow without compromising service excellence. He works closely with 
                  both clients and virtual assistants to ensure seamless integration and 
                  measurable outcomes.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  His commitment to accountability, structure, and continuous improvement 
                  plays a key role in transforming strategic goals into operational success.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingChat />
      <BackToTop />
    </div>
  );
}