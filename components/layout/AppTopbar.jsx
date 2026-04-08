export default function AppTopbar() {
  return (
    <header className="fixed top-0 right-0 left-72 z-30 bg-emerald-50/70 backdrop-blur-xl shadow-[0_40px_40px_-4px_rgba(38,54,45,0.06)]">
      <div className="flex justify-between items-center px-8 py-4 w-full">
        <div className="font-headline font-bold tracking-tight text-emerald-800">
          Garden Dashboard
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
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