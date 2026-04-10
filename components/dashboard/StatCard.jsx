export default function StatCard({ stats }) {
  const changeLabel =
    stats.changeFromLastWeek >= 0
      ? `+${stats.changeFromLastWeek}% from last week`
      : `${stats.changeFromLastWeek}% from last week`;

  return (
    <div className="bg-secondary text-on-secondary rounded-xl p-8 shadow-xl relative overflow-hidden">
      <div className="relative z-10">
        <h4 className="text-lg font-headline font-bold mb-2">Garden Vitality</h4>

        <div className="flex items-baseline space-x-2 mb-6">
          <span className="text-6xl font-black tracking-tighter">
            {stats.vitalityPercentage}%
          </span>
          <span className="text-sm font-medium opacity-80">{changeLabel}</span>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium leading-relaxed opacity-90">
            You&apos;ve completed {stats.completedToday} of {stats.totalHabits} habits
            today. Keep nurturing the habits still waiting to bloom.
          </p>

          <div className="w-full bg-on-secondary/20 h-3 rounded-full overflow-hidden">
            <div
              className="bg-secondary-fixed h-full rounded-full"
              style={{ width: `${stats.vitalityPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-on-secondary/10 rounded-full blur-3xl"></div>
    </div>
  );
}
