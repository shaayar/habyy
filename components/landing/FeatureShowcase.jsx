import { showcaseItems } from "@/data/landingData";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FeatureShowcase() {
  return (
    <section className="bg-surface-container-low">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionTitle
          eyebrow="Product Walkthrough"
          title="See growth from every angle"
          description="A focused interface that helps you make progress without distractions."
        />

        <div className="mt-10 space-y-6">
          {showcaseItems.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-surface-container-lowest p-6 md:p-8 border border-outline-variant/20"
            >
              <h3 className="text-2xl font-headline font-semibold text-on-surface mb-3">
                {item.title}
              </h3>
              <p className="text-on-surface-variant mb-5">{item.description}</p>
              <ul className="grid gap-2 md:grid-cols-3 text-sm text-on-surface-variant">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      check
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
