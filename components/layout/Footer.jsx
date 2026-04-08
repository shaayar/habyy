import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { footerSections } from "@/data/landingData";

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/20 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm text-on-surface-variant max-w-sm">
              A calm space to turn small daily actions into lifelong habits.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-on-surface font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-on-surface transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-on-surface-variant/80">
          © {new Date().getFullYear()} Habby. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
