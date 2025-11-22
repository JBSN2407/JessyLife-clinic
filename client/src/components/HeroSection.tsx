import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/luxury_clinic_hero_background.png";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: "fixed",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-32 text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight" data-testid="text-hero-title">
            JessyLife Physiotherapy &<br />Rehabilitation Clinic
          </h1>
          
          <p className="font-sans text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Expert care in clinic or at home — heal, recover, thrive.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="font-semibold text-base px-8 py-6 min-h-12"
              data-testid="button-book-now-hero"
            >
              Book Now
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="font-semibold text-base px-8 py-6 min-h-12 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-contact-us-hero"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" data-testid="icon-scroll-indicator">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
