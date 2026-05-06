import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30 border-y border-border">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Talk to a ceiling specialist today.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md">
            Prefer a direct line? Call us and we'll have a project manager on the phone within minutes.
          </p>

          <div className="space-y-5 mb-10">
            <a href="tel:+10000000000" className="flex items-center gap-4 group">
              <span className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:gradient-ember group-hover:text-primary-foreground transition-all">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="font-semibold">+1 (000) 000-0000</div>
              </div>
            </a>
            <a href="mailto:hello@laeproff.com" className="flex items-center gap-4 group">
              <span className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:gradient-ember group-hover:text-primary-foreground transition-all">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-semibold">hello@laeproff.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Studio</div>
                <div className="font-semibold">12 Industrial Park Rd, Suite 300</div>
              </div>
            </div>
          </div>

          <Button asChild size="lg" className="gradient-ember text-primary-foreground hover:opacity-90">
            <a href="#book">Get a Free Estimate</a>
          </Button>
        </div>

        <div className="reveal aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-border/40" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex h-14 w-14 rounded-full gradient-ember items-center justify-center text-primary-foreground shadow-[var(--shadow-ember)] mb-3">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="text-sm text-muted-foreground">Visit our studio · By appointment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
