import { Calendar, Users, MapPin, Zap } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book Online",
    description: "Fill our simple form to request a session.",
  },
  {
    icon: Users,
    title: "Get Matched",
    description: "We match you with a licensed therapist.",
  },
  {
    icon: MapPin,
    title: "Choose Location",
    description: "Therapy at home or in our facility.",
  },
  {
    icon: Zap,
    title: "Begin Treatment",
    description: "Enjoy expert, guided recovery tailored to you.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24 lg:py-32 bg-muted/30" data-testid="section-process">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4" data-testid="heading-process">
            How It Works
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-subtitle">
            Your journey to recovery in four simple steps
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-accent/30 -translate-y-1/2" style={{ top: '80px' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center space-y-4"
                  data-testid={`step-${index}`}
                >
                  <div className="relative z-10 w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-lg" data-testid={`icon-step-${index}`}>
                    <Icon className="w-9 h-9 text-accent-foreground" />
                  </div>
                  
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent/20 -z-10" />
                  
                  <div className="space-y-2">
                    <div className="font-heading font-semibold text-sm text-muted-foreground" data-testid={`text-step-number-${index}`}>
                      STEP {index + 1}
                    </div>
                    <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground" data-testid={`text-step-title-${index}`}>
                      {step.title}
                    </h3>
                    <p className="font-sans text-muted-foreground leading-relaxed" data-testid={`text-step-description-${index}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
