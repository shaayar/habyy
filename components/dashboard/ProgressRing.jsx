export default function ProgressRing({ progress = 0, icon = "eco", color = "text-primary" }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
      <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 80 80" aria-hidden="true">
        <circle
          className="text-surface-container-highest"
          cx="40"
          cy="40"
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="8"
        />
        <circle
          className="text-primary"
          cx="40"
          cy="40"
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>

      <span className={`material-symbols-outlined absolute text-3xl leading-none ${color}`}>
        {icon}
      </span>
    </div>
  );
}
