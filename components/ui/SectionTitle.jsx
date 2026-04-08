export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.22em] font-semibold text-primary mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
