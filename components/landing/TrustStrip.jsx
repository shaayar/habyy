import { trustItems } from "@/data/landingData";

export default function TrustStrip() {
  return (
    <section className="border-y border-outline-variant/20 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <li
              key={item}
              className="text-sm text-on-surface-variant font-medium flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
