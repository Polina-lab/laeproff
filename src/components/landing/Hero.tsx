import heroImg from "@/assets/hero-ceiling.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Modern interior with integrated linear LED ceiling lighting"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative container-px max-w-7xl mx-auto py-32 w-full">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-medium mb-6 reveal">
            <span className="h-px w-10 bg-primary" /> Laeproff · Ceiling Specialists
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 reveal">
            Professional Ceiling Solutions
            <span className="block text-gradient-ember">for Modern Interiors</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 reveal">
            Stretch, suspended, acoustic and lit ceilings — engineered with precision,
            installed by experts, finished to perfection.
          </p>
          <div className="flex flex-wrap gap-4 reveal">
            <Button asChild size="lg" className="gradient-ember text-primary-foreground hover:opacity-90 shadow-[var(--shadow-ember)] h-14 px-8 text-base">
              <a href="#book">Book a Consultation <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-foreground/20 bg-background/30 backdrop-blur hover:bg-background/50">
              <a href="#book">Get a Free Estimate</a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl reveal">
            {[
              { k: "12+", v: "Years experience" },
              { k: "850+", v: "Projects delivered" },
              { k: "10y", v: "Material warranty" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl md:text-4xl font-bold text-foreground">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="tel:+10000000000"
        className="hidden md:flex absolute bottom-8 right-8 items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Phone className="h-4 w-4" /> +1 (000) 000-0000
      </a>
    </section>
  );
};

export default Hero;
