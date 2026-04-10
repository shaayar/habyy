export default function AppTopbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 bg-emerald-50/70 shadow-[0_40px_40px_-4px_rgba(38,54,45,0.06)] backdrop-blur-xl lg:left-72">
      <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="font-headline font-bold tracking-tight text-emerald-800">
          Garden Dashboard
        </div>

        <nav className="hidden items-center space-x-8 md:flex">
          <a className="text-emerald-900 border-b-2 border-emerald-500 pb-1 font-headline font-bold tracking-tight" href="#">
            Garden
          </a>
          <a className="text-emerald-700/70 hover:text-emerald-900 transition-colors duration-300 font-headline font-bold tracking-tight" href="#">
            Method
          </a>
          <a className="text-emerald-700/70 hover:text-emerald-900 transition-colors duration-300 font-headline font-bold tracking-tight" href="#">
            Pricing
          </a>
          <a className="text-emerald-700/70 hover:text-emerald-900 transition-colors duration-300 font-headline font-bold tracking-tight" href="#">
            Community
          </a>
        </nav>
      </div>
    </header>
  );
}
