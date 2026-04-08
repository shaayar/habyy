export default function AuthDivider({ text = "or continue with" }) {
  return (
    <div className="relative my-10 text-center">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-on-surface-variant/10"></div>
      </div>
      <span className="relative bg-[#FFF9F1] px-4 text-sm text-on-surface-variant/60 font-label">
        {text}
      </span>
    </div>
  );
}