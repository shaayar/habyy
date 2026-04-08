export default function SocialLoginButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="flex-1 flex items-center justify-center gap-3 py-3 px-6 rounded-full bg-surface-container-lowest border border-outline-variant/10 hover:bg-surface transition-colors font-medium text-on-surface">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            d="M12.48 10.92v3.28h7.84c-.24 1.84-.909 3.141-1.908 4.141-1.28 1.28-3.28 2.56-6.412 2.56-5.16 0-9.28-4.2-9.28-9.36 0-5.16 4.12-9.36 9.28-9.36 2.8 0 4.88 1.12 6.36 2.52l2.32-2.32C18.68 1.36 15.92 0 12.48 0 6.64 0 1.84 4.8 1.84 10.8s4.8 10.8 10.64 10.8c3.16 0 5.56-1.04 7.44-3.04 1.92-1.92 2.56-4.64 2.56-6.88 0-.52-.04-1.04-.12-1.52H12.48z"
            fill="#EA4335"
          />
        </svg>
        Google
      </button>

      <button className="flex-1 flex items-center justify-center gap-3 py-3 px-6 rounded-full bg-surface-container-lowest border border-outline-variant/10 hover:bg-surface transition-colors font-medium text-on-surface">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            d="M16.365 1.43c0 1.14-.465 2.225-1.24 3.015-.84.84-2.01 1.32-3.15 1.23-.15-1.095.39-2.265 1.14-3.03.81-.825 2.115-1.41 3.25-1.215zM19.125 12.885c.03 2.79 2.46 3.72 2.49 3.735-.015.06-.39 1.335-1.29 2.64-.765 1.125-1.59 2.235-2.835 2.25-1.215.03-1.605-.72-2.985-.72-1.38 0-1.815.69-2.955.75-1.2.045-2.115-1.2-2.895-2.31-1.59-2.295-2.805-6.48-1.17-9.315.81-1.395 2.25-2.28 3.81-2.31 1.185-.03 2.31.81 2.985.81.675 0 1.95-.99 3.285-.84.555.015 2.115.225 3.12 1.695-.075.045-1.86 1.08-1.845 3.615z"
            fill="currentColor"
          />
        </svg>
        Apple
      </button>
    </div>
  );
}