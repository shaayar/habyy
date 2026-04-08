const variantClasses = {
  primary: "bg-primary text-on-primary hover:opacity-90",
  secondary: "bg-surface-container text-on-surface hover:bg-surface-container-high",
  ghost: "bg-transparent text-on-surface hover:bg-surface-container",
  success: "bg-secondary text-on-secondary hover:opacity-90",
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors duration-200 ${variantClasses[variant] || variantClasses.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
