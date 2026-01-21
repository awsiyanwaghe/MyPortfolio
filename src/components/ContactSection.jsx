import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ushzxfl", 
        "template_u2h6j7g", 
        form.current,
        "ot3xIgZVq3gHcZWHr" 
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          form.current.reset(); 
          setIsSubmitting(false);
        },
        (error) => {
          console.error("FAILED...", error);
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    href="mailto:awsiyanw@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    awsiyanw@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Phone</h4>
                  <a
                    href="tel:+919579851765"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8237854532
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Location</h4>
                  <p className="text-muted-foreground">Mahad, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/awsiyan-waghe-16b5a4341"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/awsiyan_waghe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

           <form ref={form} onSubmit={handleSubmit} className="space-y-6">
  <div>
    <label htmlFor="name" className="block text-sm font-medium mb-2">
      Your Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      required
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
      placeholder="Pedro Machado..."
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2">
      Your Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
      placeholder="john@gmail.com"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2">
      Your Message
    </label>
    <textarea
      id="message"
      name="message"
      required
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
      placeholder="Hello, I'd like to talk about..."
    />
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
  >
    {isSubmitting ? "Sending..." : "Send Message"}
    <Send size={16} />
  </button>
</form>

          </div>
        </div>
      </div>
    </section>
  );
};
