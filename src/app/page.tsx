import NavigationHeader from "@/components/sections/navigation-header";
import HeroSection from "@/components/sections/hero-section";
import RestaurantLogosCarousel from "@/components/sections/restaurant-logos-carousel";
import VideoWhatIs from "@/components/sections/video-what-is";
import HowItWorksSection from "@/components/sections/how-it-works";
import DemoCta from "@/components/sections/demo-cta";
import TestimonialSection from "@/components/sections/testimonial-section";
import MenuControlFeatures from "@/components/sections/menu-control-features";
import ProblemsSolved from "@/components/sections/problems-solved";
import FaqSection from "@/components/sections/faq-section";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <main className="mt-16">
        <HeroSection />
        <RestaurantLogosCarousel />
        <VideoWhatIs />
        <HowItWorksSection />
        <DemoCta />
        <TestimonialSection />
        <MenuControlFeatures />
        <ProblemsSolved />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}