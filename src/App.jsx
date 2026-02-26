import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AboutPage from "./pages/AboutPage";
import SchedulePage from "./pages/SchedulePage";
import LoadingWithLogo from "./components/ui/LoadingWithLogo";
import ThankYou from "./pages/ThankYou";
export default function App() {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setAppLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Fullscreen loader shown before any page content */}
      {appLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <LoadingWithLogo logoSize={90} dotSize={12} className="" />
        </div>
      )}

      {/* App content (fade in when loader disappears) */}
      <div
        className={
          appLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-700"
        }
      >
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}