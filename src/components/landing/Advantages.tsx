import { Award, Clock, Shield, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const items = [
  { key: "experience", Icon: Award },
  { key: "warranty", Icon: Shield },
  { key: "speed", Icon: Clock },
  { key: "fixed", Icon: FileCheck },
];

const Advantages = () => {
  const { t } = useTranslation();
  return (
    <section id="advantages" className="py-20 md:py-28 border-b border-border">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">{t("advantages.eyebrow")}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">{t("advantages.title")}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ key, Icon }, i) => (
            <div
              key={key}
              className="section-light reveal group p-7 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center border border-primary/30 mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(`advantages.items.${key}.title`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`advantages.items.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
