import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProgressRing from "./ProgressRing";

export default function HabitCard({
  title,
  category,
  streak,
  icon,
  progress,
  description,
  completed = false,
  badgeVariant = "yellow",
  onCheckIn,
  isSubmitting = false,
}) {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-xl bg-surface-container-lowest p-6 shadow-[0_10px_30px_-5px_rgba(38,54,45,0.04)] transition-all hover:shadow-[0_20px_40px_-10px_rgba(38,54,45,0.08)] sm:p-8 ${
        completed ? "border-2 border-primary/20" : ""
      }`}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">
            {category}
          </span>
          <h3 className="text-2xl font-headline font-extrabold text-on-surface">{title}</h3>
        </div>

        <Badge variant={badgeVariant}>{streak} DAY STREAK</Badge>
      </div>

      <div className="mb-8 flex items-center gap-4 sm:gap-6">
        <ProgressRing progress={progress} icon={icon} />
        <p className="flex-1 text-sm font-medium leading-6 text-on-surface-variant">
          {description}
        </p>
      </div>

      {completed ? (
        <div className="mt-auto flex w-full items-center justify-center rounded-full bg-surface-container-low py-4 text-lg font-black text-primary">
          <span>Completed Today</span>
        </div>
      ) : (
        <Button
          variant="success"
          className="mt-auto w-full py-4 text-lg font-black"
          onClick={onCheckIn}
          disabled={isSubmitting}
        >
          <span
            className="material-symbols-outlined mr-2 leading-none"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          {isSubmitting ? "Updating..." : "Check"}
        </Button>
      )}
    </div>
  );
}
