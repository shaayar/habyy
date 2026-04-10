"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HabitCard from "./HabitCard";

export default function HabitGrid({ habits }) {
  const router = useRouter();
  const [items, setItems] = useState(habits);
  const [pendingHabitId, setPendingHabitId] = useState(null);

  useEffect(() => {
    setItems(habits);
  }, [habits]);

  async function handleCheckIn(habitId) {
    setPendingHabitId(habitId);

    try {
      const response = await fetch(`/api/habits/${habitId}/check-in`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to update habit");
      }

      const result = await response.json();

      setItems((currentItems) =>
        currentItems.map((habit) =>
          habit.id === habitId ? result.habit : habit
        )
      );

      router.refresh();
    } catch (error) {
      console.error("Habit check-in failed:", error);
    } finally {
      setPendingHabitId(null);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:col-span-8">
      {items.map((habit) => (
        <HabitCard
          key={habit.id}
          {...habit}
          isSubmitting={pendingHabitId === habit.id}
          onCheckIn={() => handleCheckIn(habit.id)}
        />
      ))}
    </div>
  );
}
