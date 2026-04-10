"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/ui/InputField";
import PasswordField from "@/components/ui/PasswordField";
import Button from "@/components/ui/Button";
import AuthDivider from "./AuthDivider";
import SocialLoginButtons from "./SocialLoginButtons";

export default function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Signup failed");
        return;
      }

      router.push("/dashboard");
    } catch (submitError) {
      console.error("Signup failed:", submitError);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="text-center md:text-left mb-10">
        <h2 className="text-3xl font-bold text-on-surface font-headline mb-2">
          Plant your seeds
        </h2>
        <p className="text-on-surface-variant">
          Join 40,000+ others growing better every day.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <button className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-surface-container-low hover:bg-surface-container-high transition-colors rounded-full font-semibold text-on-surface border border-outline-variant/20">
          Continue with Google
        </button>
        <AuthDivider text="or email" />
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          id="name"
          name="name"
          placeholder="John Doe"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          disabled={isSubmitting}
        />
        <InputField
          label="Email Address"
          id="email"
          name="email"
          type="email"
          placeholder="hello@garden.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          disabled={isSubmitting}
        />
        <PasswordField
          label="Password"
          id="password"
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
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <div className="mt-8">
        <SocialLoginButtons />
      </div>
    </>
  );
}
