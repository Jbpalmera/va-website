import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import FloatingChat from "../components/FloatingChat";
import BackToTop from "../components/BackToTop";

import logo from "../assets/logo.png";
import ceoImage from "../assets/ceo.png";
import cooImage from "../assets/coo.jpeg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>

        {/* ================= HERO SECTION ================= */}
        <section className="bg-white pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">

            {/* Bigger Logo */}
            <img
              src={logo}
              alt="Eminence VA Solutions Logo"
              className="mx-auto mb-10 w-72 sm:w-96 object-contain"
            />

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              About Eminence VA Solutions
            </h1>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We help founders, startups, and growing businesses delegate smarter,
              operate faster, and scale without hiring full-time overhead.
            </p>
          </div>
        </section>

        {/* ================= Mission & Vision ================= */}
        <section className="bg-white py-20 sm:py-24 border-t border-slate-100">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Our Mission
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Our mission is simple — give businesses access to reliable,
                  highly-trained assistants who integrate seamlessly into their
                  workflow. We remove operational bottlenecks so you can focus on growth.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-slate-900">
                  Our Vision
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  We envision a future where businesses of all sizes can scale
                  efficiently without operational limitations. By combining
                  talented virtual assistants with structured systems, we help
                  companies grow with confidence.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-10 shadow-sm text-center">
                <p className="text-xl font-semibold text-slate-900">
                  Structured Systems. Elite Virtual Talent.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CEO Section ================= */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">

              {/* Content LEFT */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Ramy Alsaeed
                </h2>

                <p className="mt-2 text-lg font-medium text-slate-600">
                  Chief Executive Officer
                </p>

                <p className="mt-6 leading-relaxed text-slate-600">
                  As the Chief Executive Officer of Eminence VA Solutions, Ramy leads the company 
                  with a clear vision for scalable growth and operational excellence. His focus 
                  on innovation, structured systems, and client success drives the company’s 
                  continued expansion across industries.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  With a strong understanding of modern business challenges, Ramy ensures that 
                  every partnership delivers measurable value. His leadership emphasizes 
                  accountability, performance, and building long-term client relationships.
                </p>
              </div>

              {/* Image RIGHT */}
              <div>
                <img
                  src={ceoImage}
                  alt="Ramy Alsaeed - CEO of Eminence VA Solutions"
                  className="w-[420px] h-[520px] object-cover object-top rounded-2xl shadow-xl mx-auto"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ================= COO Section ================= */}
        <section className="bg-white py-20 sm:py-24 border-t border-slate-100">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">

              {/* Image LEFT */}
              <div>
                <img
                  src={cooImage}
                  alt="Mark Jhon MJ Vallena - COO of Eminence VA Solutions"
                  className="w-[420px] h-[520px] object-cover object-top rounded-2xl shadow-xl mx-auto"
                />
              </div>

              {/* Content RIGHT */}
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
                  to grow without compromising service excellence.
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