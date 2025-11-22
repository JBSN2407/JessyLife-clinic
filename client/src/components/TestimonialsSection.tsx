import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The home therapy team helped me walk again. I trust JessyLife completely.",
    author: "Sarah M.",
    treatment: "Post-Surgery Rehabilitation",
  },
  {
    quote: "Recovery was smooth and professional — the clinic feels like a sanctuary.",
    author: "Kwame A.",
    treatment: "Sports Injury Recovery",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4" data-testid="heading-testimonials">
            What Our Patients Say
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Real stories from people who've experienced healing with JessyLife
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300 border-card-border"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-8 md:p-10 space-y-6">
                <Quote className="w-10 h-10 text-accent" data-testid={`icon-quote-${index}`} />
                <p className="font-sans text-lg text-card-foreground leading-relaxed italic" data-testid={`text-testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="font-heading font-semibold text-foreground" data-testid={`text-testimonial-author-${index}`}>
                    {testimonial.author}
                  </div>
                  <div className="font-sans text-sm text-muted-foreground mt-1" data-testid={`text-testimonial-treatment-${index}`}>
                    {testimonial.treatment}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
