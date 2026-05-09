import heroImg from "@/assets/hero-ceiling.jpg";
import logo from "@/assets/logo_laeproff_white.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Calculator from "./Calculator";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative overflow-hidden border-b border-border">
      <img
        src={heroImg}
        alt="Modern ceiling with cyan LED lighting"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-background/30" />

      <div className="relative container-px max-w-7xl mx-auto pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <img src={logo} alt="Laeproff" className="h-10 md:h-14 w-auto mb-8 reveal" />
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary font-medium mb-5 reveal">
              <span className="h-px w-10 bg-primary" /> {t("hero.eyebrow")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-5 reveal">
              {t("hero.title")}{" "}
              <span className="block text-gradient-cyan">{t("hero.titleAccent")}</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 reveal">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-3 reveal">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan h-12 px-7 font-medium">
                <a href="#contact">
                  {t("hero.ctaPrimary")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 border-foreground/20 bg-background/30 backdrop-blur hover:bg-background/60">
                <a href="#portfolio">{t("hero.ctaSecondary")}</a>
              </Button>
            </div>
          </div>

          <div className="reveal">
            <Calculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
