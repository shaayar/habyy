import Button from "@/components/ui/Button";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-headline font-black text-on-surface tracking-tight leading-tight mb-4">
          Today&apos;s Garden
        </h1>
        <p className="text-xl text-on-surface-variant/80 font-medium">
          Welcome back. Today, we&apos;re focusing on{" "}
          <span className="text-primary font-bold">Mindful Movement</span> and{" "}
          <span className="text-primary font-bold">Nurturing Growth</span>.
        </p>
      </div>

      <Button variant="primary" className="px-8 py-5 shadow-[0_20px_40px_-8px_rgba(0,109,80,0.3)]">
        <span className="material-symbols-outlined text-2xl mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>
          add_circle
        </span>
        Plant New Habit
      </Button>
    </div>
  );
}