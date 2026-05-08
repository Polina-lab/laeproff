import { useTranslation } from "react-i18next";

const steps = ["1", "2", "3", "4", "5"];

const HowItWorks = () => {
  const { t } = useTranslation();
  return (
    <section id="how" className="py-20 md:py-28 section-light">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">{t("how.eyebrow")}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">{t("how.title")}</h2>
        </div>

        <div className="relative grid md:grid-cols-5 gap-6">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-primary/30" />
          {steps.map((n, i) => (
            <div
              key={n}
              className="reveal relative text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative mx-auto h-12 w-12 rounded-full bg-card border-2 border-primary text-primary flex items-center justify-center font-bold text-lg z-10">
                {n}
              </div>
              <h3 className="mt-4 font-semibold">{t(`how.steps.${n}.t`)}</h3>
              <p className="mt-2 text-sm" style={{ color: "hsl(0 0% 40%)" }}>{t(`how.steps.${n}.d`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
