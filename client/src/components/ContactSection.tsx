import { MapPin, Phone, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData, type ContactFormResponse } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      serviceType: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest<ContactFormResponse>("POST", "/api/contact", data);
    },
    onSuccess: (result) => {
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message || "Thank you for contacting us. We'll respond within 24 hours.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "JessyLife Clinic, Achimota, Accra",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "0201300716",
      href: "tel:0201300716",
    },
    {
      icon: Mail,
      title: "Email",
      content: "hrmanagerjessylifeclinic@gmail.com",
      href: "mailto:hrmanagerjessylifeclinic@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/30" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4" data-testid="heading-contact">
            Get In Touch
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Ready to begin your healing journey? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans font-semibold">Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans font-semibold">Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans font-semibold">Phone *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="0201300716"
                            {...field}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans font-semibold">Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="physiotherapy">Physiotherapy</SelectItem>
                          <SelectItem value="occupational">Occupational Therapy</SelectItem>
                          <SelectItem value="speech">Speech & Language Therapy</SelectItem>
                          <SelectItem value="massage">Massage Therapy</SelectItem>
                          <SelectItem value="nutrition">Dietary & Nutrition Therapy</SelectItem>
                          <SelectItem value="home">Home-Based Visits</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans font-semibold">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your needs..."
                          rows={5}
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={mutation.isPending}
                  className="w-full font-semibold"
                  data-testid="button-submit-contact"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6" data-testid="contact-info-list">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = info.href ? (
                  <a
                    href={info.href}
                    className="font-sans text-foreground hover:text-primary transition-colors"
                    data-testid={`link-${info.title.toLowerCase()}`}
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="font-sans text-foreground" data-testid={`text-${info.title.toLowerCase()}`}>{info.content}</p>
                );

                return (
                  <div key={index} className="flex items-start gap-4" data-testid={`info-${info.title.toLowerCase()}`}>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0" data-testid={`icon-${info.title.toLowerCase()}`}>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground mb-1" data-testid={`text-${info.title.toLowerCase()}-label`}>
                        {info.title}
                      </div>
                      {content}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-border space-y-4" data-testid="quick-actions">
              <h3 className="font-heading font-semibold text-xl text-foreground" data-testid="heading-quick-actions">
                Quick Actions
              </h3>
              <div className="flex flex-col gap-3">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="w-full font-semibold"
                  data-testid="button-call-now"
                >
                  <a href="tel:0201300716">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full font-semibold bg-[#25D366] text-white border-[#25D366] hover:bg-[#1da851]"
                  data-testid="button-whatsapp"
                >
                  <a href="https://wa.me/233201300716" target="_blank" rel="noopener noreferrer">
                    <SiWhatsapp className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
