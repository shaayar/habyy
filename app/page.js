import MarketingNavbar from "@/components/layout/MarketingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustStrip from "@/components/landing/TrustStrip";
import BenefitsSection from "@/components/landing/BenefitsSection";
import FeatureShowcase from "@/components/landing/FeatureShowcase";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <>
      <MarketingNavbar />
      <HeroSection />
      <TrustStrip />
      <BenefitsSection />
      <FeatureShowcase />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </>
  );
}
