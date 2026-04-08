"use client";

import { useState } from "react";

export default function PasswordField({
  label = "Password",
  id = "password",
  placeholder = "••••••••",
  showForgot = false,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center px-4">
        <label className="block text-sm font-medium text-on-surface" htmlFor={id}>
          {label}
        </label>
        {showForgot && (
          <a className="text-xs font-semibold text-primary hover:opacity-80 transition-opacity" href="#">
            Forgot password?
          </a>
        )}
      </div>

      <div className="relative">
        <input
          id={id}
          name={id}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="w-full px-6 py-4 rounded-full bg-surface-container-lowest border-none focus:ring-4 focus:ring-primary-fixed-dim/40 outline-none transition-all placeholder:text-on-surface-variant/40"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant"
        >
          <span className="material-symbols-outlined">
            {show ? "visibility_off" : "visibility"}
          </span>
        </button>
      </div>
    </div>
  );
}