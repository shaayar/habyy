import Logo from "@/components/ui/Logo";
import InputField from "@/components/ui/InputField";
import PasswordField from "@/components/ui/PasswordField";
import Button from "@/components/ui/Button";
import AuthDivider from "./AuthDivider";
import SocialLoginButtons from "./SocialLoginButtons";

export default function LoginForm() {
  return (
    <>
      <div className="mb-10 flex flex-col items-center md:items-start">
        <Logo className="text-primary text-3xl mb-2" />
        <p className="text-on-surface-variant text-lg">Continue your growth journey.</p>
      </div>

      <form className="space-y-6">
        <InputField
          label="Email Address"
          id="email"
          type="email"
          placeholder="hello@gardener.com"
        />

        <PasswordField label="Password" id="password" showForgot />

        <Button type="submit" variant="primary" className="w-full text-lg py-4">
          Enter Your Garden
        </Button>
      </form>

      <AuthDivider text="or nurture with" />
      <SocialLoginButtons />
    </>
  );
}