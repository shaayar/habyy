export default function StatCard() {
  return (
    <div className="bg-secondary text-on-secondary rounded-xl p-8 shadow-xl relative overflow-hidden">
      <div className="relative z-10">
        <h4 className="text-lg font-headline font-bold mb-2">Garden Vitality</h4>

        <div className="flex items-baseline space-x-2 mb-6">
          <span className="text-6xl font-black tracking-tighter">84%</span>
          <span className="text-sm font-medium opacity-80">+12% from last week</span>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium leading-relaxed opacity-90">
            Your garden is thriving! You&apos;ve watered 4 out of 5 habits consistently this morning.
          </p>

          <div className="w-full bg-on-secondary/20 h-3 rounded-full overflow-hidden">
            <div className="bg-secondary-fixed h-full rounded-full" style={{ width: "84%" }}></div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-on-secondary/10 rounded-full blur-3xl"></div>
    </div>
  );
}