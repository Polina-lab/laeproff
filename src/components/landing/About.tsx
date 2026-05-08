import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 md:py-28 section-light">
      <div className="container-px max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium reveal">Laeproff</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 reveal">
          12 years of craft.<br/>One mission: the perfect ceiling.
        </h2>
        <p className="text-base md:text-lg max-w-3xl mx-auto reveal" style={{ color: "hsl(0 0% 35%)" }}>
          Laeproff is an Estonian ceiling specialist focused on high-end stretch, suspended,
          acoustic and lit ceilings. We design, supply and install — keeping every project on
          time, on budget and dust-free.
        </p>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto reveal">
          {[
            { k: "850+", v: "projects" },
            { k: "12+", v: "years" },
            { k: "10y", v: "warranty" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-3xl md:text-4xl font-bold text-primary">{s.k}</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: "hsl(0 0% 40%)" }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
