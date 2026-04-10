"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/ui/Logo";
import InputField from "@/components/ui/InputField";
import PasswordField from "@/components/ui/PasswordField";
import Button from "@/components/ui/Button";
import AuthDivider from "./AuthDivider";
import SocialLoginButtons from "./SocialLoginButtons";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Login failed");
        return;
      }

      router.push("/dashboard");
    } catch (submitError) {
      console.error("Login failed:", submitError);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="mb-10 flex flex-col items-center md:items-start">
        <Logo className="text-primary text-3xl mb-2" />
        <p className="text-on-surface-variant text-lg">Continue your growth journey.</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <InputField
          label="Email Address"
          id="email"
          name="email"
          type="email"
          placeholder="hello@gardener.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          disabled={isSubmitting}
        />

        <PasswordField
          label="Password"
          id="password"
          showForgot
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          disabled={isSubmitting}
        />

        {error ? (
          <p className="px-4 text-sm font-medium text-red-600">{error}</p>
        ) : null}

        <Button
          type="submit"
          variant="primary"
          className="w-full text-lg py-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Enter Your Garden"}
        </Button>
      </form>

      <AuthDivider text="or nurture with" />
      <SocialLoginButtons />
    </>
  );
}
