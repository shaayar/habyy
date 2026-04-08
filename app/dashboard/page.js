import AppSidebar from "@/components/layout/AppSidebar";
import AppTopbar from "@/components/layout/AppTopbar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import HabitGrid from "@/components/dashboard/HabitGrid";
import StatCard from "@/components/dashboard/StatCard";
import WeeklyBloomCard from "@/components/dashboard/WeeklyBloomCard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F1]">
      <AppSidebar />

      <main className="ml-72 min-h-screen relative bg-[#FFF9F1]">
        <AppTopbar />

        <section className="pt-24 px-12 pb-20">
          <DashboardHeader />

          <div className="grid grid-cols-12 gap-8">
            <HabitGrid />

            <div className="col-span-12 lg:col-span-4 space-y-8">
              <StatCard />
              <WeeklyBloomCard />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}