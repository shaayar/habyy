import Link from "next/link";
import { heroContent } from "@/data/landingData";

export default function HeroSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4">
          {heroContent.eyebrow}
        </p>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface leading-tight max-w-4xl">
          {heroContent.title}{" "}
          <span className="text-primary">{heroContent.highlight}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-on-surface-variant leading-relaxed">
          {heroContent.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/signup"
            className="rounded-full px-6 py-3 bg-primary text-on-primary font-semibold hover:opacity-90 transition-opacity"
          >
            {heroContent.primaryCta}
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full px-6 py-3 bg-surface-container text-on-surface font-semibold hover:bg-surface-container-high transition-colors"
          >
            {heroContent.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
