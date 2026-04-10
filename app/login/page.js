import Link from "next/link";
import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      eyebrow="Habit Sanctuary"
      title="Welcome back to your"
      highlight="sanctuary."
      subtitle="A calm place to keep your routines alive."
      image="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1400&auto=format&fit=crop"
    >
      <LoginForm />
      <p className="mt-6 text-center text-sm text-on-surface-variant">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}
