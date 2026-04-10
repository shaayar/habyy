import Link from "next/link";
import AuthLayout from "@/components/layout/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <AuthLayout
      eyebrow="Growth Sanctuary"
      title="Start your big"
      highlight="becoming."
      subtitle="Tiny actions, every day. Cultivate habits that last."
      image="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1400&auto=format&fit=crop"
    >
      <SignupForm />
      <p className="mt-6 text-center text-sm text-on-surface-variant">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}
