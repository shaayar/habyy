export default function WeeklyBloomSummary({ weeklyBloom }) {
  return (
    <div className="rounded-xl bg-surface-container p-8">
      <h4 className="mb-6 flex items-center font-headline font-bold text-on-surface">
        <span className="material-symbols-outlined mr-2 leading-none">calendar_today</span>
        Weekly Bloom
      </h4>

      <div className="mb-8 grid grid-cols-7 gap-3">
        {weeklyBloom.days.map((day) => (
          <div key={day.dateKey} className="flex flex-col items-center space-y-2">
            <span className="text-[10px] font-black text-on-surface-variant">
              {day.label}
            </span>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                day.isActive ? "bg-primary" : "bg-surface-container-highest"
              }`}
            >
              <span
                className={`material-symbols-outlined text-sm leading-none ${
                  day.isActive ? "text-on-primary" : "text-on-surface-variant"
                }`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-on-surface-variant">
        {weeklyBloom.currentWeekTotal} blooms this week, with a{" "}
        {weeklyBloom.changeFromLastWeek >= 0 ? "+" : ""}
        {weeklyBloom.changeFromLastWeek}% shift from last week.
      </p>
    </div>
  );
}
