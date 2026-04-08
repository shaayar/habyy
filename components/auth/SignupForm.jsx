import InputField from "@/components/ui/InputField";
import PasswordField from "@/components/ui/PasswordField";
import Button from "@/components/ui/Button";
import AuthDivider from "./AuthDivider";
import SocialLoginButtons from "./SocialLoginButtons";

export default function SignupForm() {
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

      <form className="space-y-6">
        <InputField label="Full Name" id="name" placeholder="John Doe" />
        <InputField
          label="Email Address"
          id="email"
          type="email"
          placeholder="hello@garden.com"
        />
        <PasswordField label="Password" id="password" />

        <Button type="submit" variant="primary" className="w-full text-lg py-4">
          Create Account
        </Button>
      </form>

      <div className="mt-8">
        <SocialLoginButtons />
      </div>
    </>
  );
}