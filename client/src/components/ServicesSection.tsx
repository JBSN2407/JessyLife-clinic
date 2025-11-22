import { Activity, Briefcase, MessageSquare, Hand, Utensils, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Activity,
    title: "Physiotherapy",
    description: "Evidence-based movement therapy to restore function and reduce pain.",
  },
  {
    icon: Briefcase,
    title: "Occupational Therapy",
    description: "Helping you regain independence in daily activities and work.",
  },
  {
    icon: MessageSquare,
    title: "Speech & Language Therapy",
    description: "Communication and swallowing therapy for all ages.",
  },
  {
    icon: Hand,
    title: "Massage Therapy",
    description: "Therapeutic massage for relaxation and recovery.",
  },
  {
    icon: Utensils,
    title: "Dietary & Nutrition Therapy",
    description: "Personalized nutrition plans to support your healing.",
  },
  {
    icon: Home,
    title: "Home-Based Visits",
    description: "All our services delivered in the comfort of your home.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-background" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4" data-testid="heading-services">
            Our Services
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive therapeutic services to support your complete recovery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover-elevate transition-all duration-300 border-card-border hover:shadow-lg"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors" data-testid={`icon-service-${index}`}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-card-foreground" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
