import { Home, Activity, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const helpItems = [
  {
    icon: Home,
    title: "Home-based Therapy",
    description: "Personalized treatment from your living room.",
  },
  {
    icon: Activity,
    title: "Rehabilitation Programs",
    description: "Post-surgery, injury recovery, or chronic care.",
  },
  {
    icon: Heart,
    title: "Pain Management",
    description: "Back pain, joint pain, sports injuries.",
  },
  {
    icon: Users,
    title: "Geriatric & Pediatric Care",
    description: "Specialized therapy for seniors and children.",
  },
];

export function HowWeHelpSection() {
  return (
    <section id="how-we-help" className="py-16 md:py-24 lg:py-32 bg-background" data-testid="section-how-we-help">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4" data-testid="heading-how-we-help">
            How We Help
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-we-help-subtitle">
            Comprehensive rehabilitation services tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {helpItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="group hover-elevate transition-all duration-300 border-card-border hover:shadow-lg"
                data-testid={`card-help-${index}`}
              >
                <CardContent className="p-6 md:p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors" data-testid={`icon-help-${index}`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-card-foreground" data-testid={`text-help-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed" data-testid={`text-help-description-${index}`}>
                    {item.description}
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
