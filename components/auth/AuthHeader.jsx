export default function AuthHeader({ title, subtitle }) {
  return (
    <div className="text-center md:text-left mb-8">
      <h2 className="text-3xl font-bold text-on-surface font-headline mb-2">{title}</h2>
      {subtitle && <p className="text-on-surface-variant">{subtitle}</p>}
    </div>
  );
}
