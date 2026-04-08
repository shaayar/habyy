const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function WeeklyBloomCard() {
  return (
    <div className="bg-surface-container rounded-xl p-8">
      <h4 className="text-on-surface font-headline font-bold mb-6 flex items-center">
        <span className="material-symbols-outlined mr-2">calendar_today</span>
        Weekly Bloom
      </h4>

      <div className="grid grid-cols-7 gap-3 mb-8">
        {days.map((day, i) => (
          <div key={day} className="flex flex-col items-center space-y-2">
            <span className="text-[10px] font-black text-on-surface-variant">{day}</span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i < 5 ? "bg-primary" : "bg-surface-container-highest"
              }`}
            >
              <span
                className={`material-symbols-outlined text-sm ${
                  i < 5 ? "text-on-primary" : "text-on-surface-variant"
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
        Your habits are blooming steadily this week 🌱
      </p>
    </div>
  );
}