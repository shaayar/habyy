import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const links = [
  { label: "My Garden", icon: "potted_plant", active: true },
  { label: "Statistics", icon: "insights" },
  { label: "Categories", icon: "category" },
  { label: "Settings", icon: "settings" },
];

export default function AppSidebar() {
  return (
    <aside className="bg-emerald-50 h-screen w-72 fixed left-0 top-0 z-40 shadow-[40px_0_40px_-4px_rgba(38,54,45,0.04)] flex flex-col p-6 space-y-8">
      <Logo />

      <div className="space-y-2">
        <div className="flex items-center space-x-4 mb-6">
          <img
            alt="Gardener Profile"
            className="w-12 h-12 rounded-full border-2 border-primary-container"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
          />
          <div>
            <p className="font-headline text-sm font-semibold tracking-tight text-emerald-900">
              Good morning, Gardener
            </p>
            <p className="text-xs text-emerald-800/60">Your sanctuary awaits</p>
          </div>
        </div>

        <nav className="space-y-1">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`flex items-center px-4 py-3 rounded-2xl font-headline text-sm font-semibold tracking-tight transition-all duration-200 ${
                link.active
                  ? "bg-emerald-100 text-emerald-900"
                  : "text-emerald-800/60 hover:bg-emerald-100/50"
              }`}
            >
              <span className="material-symbols-outlined mr-3">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-auto">
        <Button variant="primary" className="w-full py-4">
          Grow New Habit
        </Button>
      </div>
    </aside>
  );
}