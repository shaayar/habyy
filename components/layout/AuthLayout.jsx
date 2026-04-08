export default function AuthLayout({
  eyebrow = "Habit Sanctuary",
  title,
  highlight = "sanctuary.",
  subtitle,
  image,
  children,
}) {
  return (
    <main className="flex-grow flex flex-col md:flex-row min-h-screen">
      {/* Left */}
      <section className="relative w-full md:w-1/2 lg:w-3/5 overflow-hidden flex items-center justify-center p-8 md:p-16">
        <div className="absolute inset-0 bg-surface-container-low z-0"></div>

        <div className="relative z-10 w-full max-w-2xl text-center md:text-left">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(243,252,243,0.7)] backdrop-blur-xl border border-white/20">
            <span className="material-symbols-outlined text-primary text-sm">spa</span>
            <span className="text-on-surface-variant font-label text-sm tracking-wide uppercase font-semibold">
              {eyebrow}
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-tight tracking-tight mb-8">
            {title} <span className="text-primary italic">{highlight}</span>
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-on-surface-variant mb-8 max-w-xl">
              {subtitle}
            </p>
          )}

          {image && (
            <div className="relative mt-12 rounded-lg overflow-hidden shadow-[0_40px_40px_-4px_rgba(38,54,45,0.06)] group">
              <img
                src={image}
                alt="Habby visual"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
          )}
        </div>

        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
        <div className="absolute top-10 -right-10 w-48 h-48 bg-secondary-container/30 rounded-full blur-2xl"></div>
      </section>

      {/* Right */}
      <section className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center p-6 md:p-12 lg:p-20 bg-[#FFF9F1]">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}