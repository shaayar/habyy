import HabitCard from "./HabitCard";
import { habits } from "@/data/dashboardData";

export default function HabitGrid() {
  return (
    <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {habits.map((habit) => (
        <HabitCard key={habit.id} {...habit} />
      ))}
    </div>
  );
}