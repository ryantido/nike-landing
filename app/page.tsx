import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PopularSection from "@/components/sections/PopularSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function MainPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PopularSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}
