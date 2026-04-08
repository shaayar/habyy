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
}) {
  return (
    <div
      className={`bg-surface-container-lowest rounded-xl p-8 shadow-[0_10px_30px_-5px_rgba(38,54,45,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(38,54,45,0.08)] transition-all flex flex-col relative overflow-hidden group ${
        completed ? "border-2 border-primary/20" : ""
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">
            {category}
          </span>
          <h3 className="text-2xl font-headline font-extrabold text-on-surface">{title}</h3>
        </div>

        <Badge variant={badgeVariant}>{streak} DAY STREAK</Badge>
      </div>

      <div className="flex items-center space-x-6 mb-8">
        <ProgressRing progress={progress} icon={icon} />
        <p className="text-on-surface-variant font-medium text-sm">{description}</p>
      </div>

      {completed ? (
        <div className="w-full py-4 rounded-full bg-surface-container-low text-primary font-black text-lg flex items-center justify-center space-x-2">
          <span>Completed Today</span>
        </div>
      ) : (
        <Button variant="success" className="w-full py-4 text-lg font-black">
          <span className="material-symbols-outlined mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          Check
        </Button>
      )}
    </div>
  );
}