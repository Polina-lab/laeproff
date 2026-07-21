import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { useLead } from "@/context/LeadContext";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-7.jpg";

const items = [
  { key: "stretch", img: p1 },
  { key: "suspended", img: p2 },
  { key: "lighting", img: p4 },
  { key: "multilevel", img: p5 },
  { key: "repair", img: p6 },
];

const Services = () => {
  const { t } = useTranslation();
  const { prefillAndScroll } = useLead();

  return (
    <section id="services" className="py-20 md:py-28 section-light">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">{t("services.eyebrow")}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">{t("services.title")}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <button
              key={s.key}
              onClick={() => prefillAndScroll({ service: s.key })}
              className="reveal group text-left rounded-xl overflow-hidden bg-card border border-border hover:border-primary/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-cyan)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={t(`services.items.${s.key}.name`)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{t(`services.items.${s.key}.name`)}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">{t(`services.items.${s.key}.desc`)}</p>
                <span className="text-xs uppercase tracking-wider text-primary font-medium">
                  {t("services.select")} →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
