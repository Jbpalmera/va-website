import logo from "../../assets/logo1.png";

export default function LoadingWithLogo({
  logoSize = 80,
  dotSize = 10,
  dotColor = "#2563eb",
  className = "",
}) {
  return (
    <div className={`flex flex-col items-center justify-center gap-6 ${className}`}>
      
      {/* Logo */}
      <img
        src={logo}
        alt="Company Logo"
        style={{ width: logoSize }}
        className="object-contain"
      />

      {/* Bouncing Dots */}
      <div className="flex items-center gap-2">
        {[0, 120, 240].map((delay, i) => (
          <span
            key={i}
            className="rounded-full animate-bounce"
            style={{
              width: dotSize,
              height: dotSize,
              backgroundColor: dotColor,
              animationDelay: `${delay}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}