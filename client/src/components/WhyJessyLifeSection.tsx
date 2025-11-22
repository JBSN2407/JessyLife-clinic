import { Award, Target, Building2, Sparkles } from "lucide-react";
import homeTherapyImage from "@assets/generated_images/home_therapy_session_image.png";
import rehabGymImage from "@assets/generated_images/rehabilitation_facility_gym.png";
import elderlyPatientImage from "@assets/generated_images/therapist_with_elderly_patient.png";
import pediatricImage from "@assets/generated_images/pediatric_therapy_session.png";

const reasons = [
  {
    icon: Award,
    title: "Licensed, compassionate physiotherapists",
    description: "Our team consists of certified, experienced professionals who genuinely care about your recovery journey.",
    image: elderlyPatientImage,
  },
  {
    icon: Target,
    title: "Tailored programs for home or facility visits",
    description: "Whether you prefer the comfort of home or our state-of-the-art facility, we customize every treatment plan to your needs.",
    image: homeTherapyImage,
  },
  {
    icon: Building2,
    title: "Modern, accessible facilities designed for comfort",
    description: "Our rehabilitation center features cutting-edge equipment in a welcoming, peaceful environment.",
    image: rehabGymImage,
  },
  {
    icon: Sparkles,
    title: "Tech-enabled booking and client-focused care",
    description: "Easy online scheduling, personalized attention, and dedicated support throughout your healing process.",
    image: pediatricImage,
  },
];

export function WhyJessyLifeSection() {
  return (
    <section id="why-jessylife" className="py-16 md:py-24 lg:py-32 bg-muted/30" data-testid="section-why-jessylife">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4" data-testid="heading-why-jessylife">
            Why Choose JessyLife
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-jessylife-subtitle">
            Experience the difference of truly personalized, professional care
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
                data-testid={`section-why-${index}`}
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10" data-testid={`icon-why-${index}`}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl md:text-3xl text-foreground" data-testid={`text-why-title-${index}`}>
                    {reason.title}
                  </h3>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed" data-testid={`text-why-description-${index}`}>
                    {reason.description}
                  </p>
                </div>
                
                <div className="flex-1">
                  <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-64 md:h-80 object-cover"
                      data-testid={`img-why-${index}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
