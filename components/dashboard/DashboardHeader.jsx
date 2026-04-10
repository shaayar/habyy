import Button from "@/components/ui/Button";

export default function DashboardHeader({
  name,
  focusItems = [],
  completedToday = 0,
  totalHabits = 0,
}) {
  const subtitle =
    focusItems.length === 0
      ? "Your garden is calm today. Everything is already blooming."
      : focusItems.length === 1
        ? `Welcome back, ${name}. Today we're focusing on ${focusItems[0]}.`
        : `Welcome back, ${name}. Today we're focusing on ${focusItems[0]} and ${focusItems[1]}.`;

  return (
    <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <h1 className="mb-4 text-4xl font-headline font-black leading-tight tracking-tight text-on-surface sm:text-5xl">
          Today&apos;s Garden
        </h1>
        <p className="max-w-2xl text-lg font-medium text-on-surface-variant/80 sm:text-xl">
          {subtitle}
        </p>
      </div>

      <Button
        variant="primary"
        disabled
        className="w-full justify-center px-6 py-4 shadow-[0_20px_40px_-8px_rgba(0,109,80,0.3)] sm:w-auto sm:px-8 sm:py-5"
      >
        <span
          className="material-symbols-outlined mr-2 text-2xl leading-none"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          add_circle
        </span>
        {completedToday}/{totalHabits} Bloomed Today
      </Button>
    </div>
  );
}
