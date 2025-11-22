import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HowWeHelpSection } from "@/components/HowWeHelpSection";
import { WhyJessyLifeSection } from "@/components/WhyJessyLifeSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowWeHelpSection />
      <WhyJessyLifeSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
