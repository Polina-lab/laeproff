import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-8.jpg";
import { useTranslation } from "react-i18next";
import { useLead } from "@/context/LeadContext";

const items = [
  { img: p1, key: "stretch", span: "md:col-span-2 md:row-span-2" },
  { img: p4, key: "lighting" },
  { img: p2, key: "suspended" },
  { img: p5, key: "multilevel" },
  { img: p6, key: "repair" },
];

const Portfolio = () => {
  const { t } = useTranslation();
  const { prefillAndScroll } = useLead();

  return (
    <section id="portfolio" className="py-20 md:py-28 border-b border-border">
      <div className="container-px max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">{t("portfolio.eyebrow")}</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">{t("portfolio.title")}</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px]">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => prefillAndScroll({ service: it.key })}
              className={`reveal relative overflow-hidden rounded-xl group bg-card border border-border hover:border-primary/60 transition-colors ${it.span ?? ""}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={it.img}
                alt={t(`services.items.${it.key}.name`)}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <div className="text-[10px] text-primary uppercase tracking-wider mb-1">{t(`services.items.${it.key}.name`)}</div>
                <div className="text-sm text-foreground/90">{t(`services.items.${it.key}.desc`)}</div>
              </figcaption>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
