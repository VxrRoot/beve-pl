import AboutUsSection from "@/sections/AboutUsSection";
import ComplexServicesSection from "@/sections/ComplexServicesSection";
import CTASection from "@/sections/CTASection";
import HeroSection from "@/sections/HeroSection";
import InfoSection from "@/sections/InfoSection";
import OfferDetailsSection from "@/sections/OfferDetailsSection";
import OfferSection from "@/sections/OfferSection";
import RememberSection from "@/sections/RememberSection";

export default function Home() {
  return (
    <main className="overflow-y-hidden">
      <HeroSection />
      <AboutUsSection />
      <OfferSection />
      <OfferDetailsSection />
      <InfoSection />
      <ComplexServicesSection />
      <RememberSection />
      <CTASection />
    </main>
  );
}
