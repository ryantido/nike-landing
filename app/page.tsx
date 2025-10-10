import HeroSection from "@/components/sections/HeroSection";
import PopularSection from "@/components/sections/PopularSection";

export default function MainPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PopularSection />
    </div>
  );
}
