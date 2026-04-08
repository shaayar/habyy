import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-surface-container">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="rounded-3xl bg-primary text-on-primary p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold leading-tight">
            Ready to cultivate better habits?
          </h2>
          <p className="mt-4 text-on-primary/90 max-w-2xl">
            Start with one small action today and let consistency do the rest.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="rounded-full px-6 py-3 bg-on-primary text-primary font-semibold"
            >
              Create Free Account
            </Link>
            <Link
              href="/login"
              className="rounded-full px-6 py-3 border border-on-primary/40 text-on-primary font-semibold hover:bg-on-primary/10 transition-colors"
            >
              I already have an account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
