import { useTranslation } from "react-i18next";
import logo from "@/assets/logo_laeproff_black.svg";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 md:py-15 section-light">
      <div className="container-px max-w-5xl mx-auto text-center">
        <img src={logo} alt="Laeproff" className="tracking-[0.25em] h-20 w-auto reveal m-auto" />
        <h2 className="text-3xl md:text-5xl mt-4 mb-6 reveal whitespace-pre-line">
          {t("about.title")}
        </h2>
        <p className="text-base md:text-lg max-w-3xl mx-auto reveal" style={{ color: "hsl(0 0% 35%)" }}>
          {t("about.description")}
        </p>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto reveal">
          {[
            { k: "850+", v: t("about.projects") },
            { k: "12+", v: t("about.years") },
            { k: "10"+t("about.y"), v: t("about.warranty") },
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
