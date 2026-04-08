import SectionTitle from "@/components/ui/SectionTitle";
import { steps } from "@/data/landingData";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionTitle
          eyebrow="How it works"
          title="A simple rhythm you can keep"
          description="From setup to daily check-in, every step is intentionally lightweight."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.id}
              className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6"
            >
              <span className="inline-flex h-8 w-8 rounded-full bg-primary text-on-primary items-center justify-center text-sm font-bold">
                {step.id}
              </span>
              <h3 className="mt-4 text-xl font-headline font-semibold text-on-surface">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
