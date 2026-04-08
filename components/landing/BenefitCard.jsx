export default function BenefitCard({ icon, title, description }) {
  return (
    <article className="rounded-2xl bg-surface-container-low p-6 border border-outline-variant/20">
      <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="text-xl font-headline font-semibold text-on-surface mb-2">{title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
    </article>
  );
}
