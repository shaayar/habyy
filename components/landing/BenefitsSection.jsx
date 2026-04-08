import BenefitCard from "./BenefitCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { benefitItems } from "@/data/landingData";

export default function BenefitsSection() {
  return (
    <section id="features" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionTitle
          eyebrow="Why Habby"
          title="Designed for consistency, not chaos"
          description="Habby gives you structure, motivation, and calm visibility into your day."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {benefitItems.map((benefit) => (
            <BenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
