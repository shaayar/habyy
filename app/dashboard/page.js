import { redirect } from "next/navigation";
import AppSidebar from "@/components/layout/AppSidebar";
import AppTopbar from "@/components/layout/AppTopbar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import HabitGrid from "@/components/dashboard/HabitGrid";
import StatCard from "@/components/dashboard/StatCard";
import WeeklyBloomSummary from "@/components/dashboard/WeeklyBloomSummary";
import { getSessionUser } from "@/lib/auth";
import { getDashboardSnapshot } from "@/lib/data-store";

export default async function DashboardPage() {
  const sessionUser = await getSessionUser();

  if (!sessionUser) {
    redirect("/login");
  }

  const dashboard = await getDashboardSnapshot(sessionUser.id);

  if (!dashboard) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[#FFF9F1]">
      <AppSidebar
        user={dashboard.user}
        completedToday={dashboard.stats.completedToday}
        totalHabits={dashboard.stats.totalHabits}
      />

      <main className="min-h-screen bg-[#FFF9F1] lg:ml-72">
        <AppTopbar />

        <section className="px-4 pb-12 pt-24 sm:px-6 lg:px-10 lg:pb-20 lg:pt-28 xl:px-12">
          <DashboardHeader
            name={dashboard.user.name}
            focusItems={dashboard.focusItems}
            completedToday={dashboard.stats.completedToday}
            totalHabits={dashboard.stats.totalHabits}
          />

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-12">
            <HabitGrid habits={dashboard.habits} />

            <div className="space-y-8 xl:col-span-4">
              <StatCard stats={dashboard.stats} />
              <WeeklyBloomSummary weeklyBloom={dashboard.weeklyBloom} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
