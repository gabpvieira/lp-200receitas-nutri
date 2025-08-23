import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import RecipeGallery from "@/components/recipe-gallery";
import NutritionistSection from "@/components/nutritionist-section";
import BonusSection from "@/components/bonus-section";
import AdvantagesSection from "@/components/advantages-section";
import TestimonialsSection from "@/components/testimonials-section";
import OfferSection from "@/components/offer-section";
import GuaranteeSection from "@/components/guarantee-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <RecipeGallery />
      <NutritionistSection />
      <BonusSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
