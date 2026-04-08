export default function InputField({
  label,
  id,
  type = "text",
  placeholder = "",
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-on-surface ml-4" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full px-6 py-4 rounded-full bg-surface-container-lowest border-none focus:ring-4 focus:ring-primary-fixed-dim/40 outline-none transition-all placeholder:text-on-surface-variant/40 ${className}`}
        {...props}
      />
    </div>
  );
}