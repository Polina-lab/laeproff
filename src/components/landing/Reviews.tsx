import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const keys = ["1", "2", "3"];

const Reviews = () => {
  const { t } = useTranslation();
  return (
    <section id="reviews" className="py-20 md:py-28 section-light">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">{t("reviews.eyebrow")}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">{t("reviews.title")}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {keys.map((k, i) => (
            <article
              key={k}
              className="reveal bg-card rounded-xl p-7 border border-border hover:border-primary/50 transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="h-7 w-7 text-primary/40 mb-4" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(0 0% 25%)" }}>
                "{t(`reviews.items.${k}.text`)}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-sm">{t(`reviews.items.${k}.name`)}</div>
                <div className="text-xs" style={{ color: "hsl(0 0% 45%)" }}>{t(`reviews.items.${k}.role`)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
