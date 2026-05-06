const stats = [
  { k: "Precision", v: "Millimeter-level installation tolerances on every project." },
  { k: "Materials", v: "Premium European films, panels and frames sourced direct." },
  { k: "Reliability", v: "On-time delivery with a 10-year structural warranty." },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 container-px max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">About Laeproff</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Engineering-grade ceilings, designed for the way people live and work.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pt-4 reveal">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            For over a decade, Laeproff has been the quiet name behind some of the cleanest
            ceilings in residential, hospitality and commercial spaces. We combine the
            discipline of construction with the eye of interior design — every seam, every
            light cut, every edge planned before a single panel is mounted.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.k}>
                <div className="text-sm font-semibold text-primary mb-2">{s.k}</div>
                <p className="text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
