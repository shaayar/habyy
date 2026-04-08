export default function Badge({ children, variant = "yellow", className = "" }) {
  const variants = {
    yellow: "bg-[#FFD166] text-on-surface shadow-[0_0_20px_rgba(255,209,102,0.4)]",
    green: "bg-primary-container text-on-primary-container",
    secondary: "bg-secondary-container text-on-secondary-container",
  };

  return (
    <div
      className={`text-xs font-black px-3 py-1 rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}