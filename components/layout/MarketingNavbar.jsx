import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function MarketingNavbar() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-outline-variant/20">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-on-surface-variant">
          <a href="#features" className="hover:text-on-surface transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-on-surface transition-colors">
            How it works
          </a>
          <Link href="/login" className="hover:text-on-surface transition-colors">
            Login
          </Link>
        </nav>

        <Link
          href="/signup"
          className="rounded-full px-5 py-2.5 bg-primary text-on-primary text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
