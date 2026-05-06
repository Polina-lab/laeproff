import { Layers, PanelTop, Volume2, Lightbulb, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Stretch Ceilings",
    desc: "Flawless matte, satin or gloss finishes installed in a single day with zero dust.",
    benefit: "Smooth, seamless surfaces that last 15+ years.",
  },
  {
    icon: PanelTop,
    title: "Suspended Ceilings",
    desc: "Modular grid and continuous gypsum systems for offices, retail and lobbies.",
    benefit: "Hide services, gain access, keep the look clean.",
  },
  {
    icon: Volume2,
    title: "Acoustic Solutions",
    desc: "Wood, fabric and mineral panels engineered to reduce noise by up to 70%.",
    benefit: "Quieter rooms, sharper conversations.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Integration",
    desc: "Recessed spots, linear LEDs, cove lighting and starry-sky fiber optics.",
    benefit: "Light becomes part of the architecture.",
  },
  {
    icon: Wrench,
    title: "Repair & Replacement",
    desc: "Water damage, sagging, cracks and outdated systems — restored or replaced.",
    benefit: "Quick turnaround, minimal disruption.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30 border-y border-border">
      <div className="container-px max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Five disciplines.<br />One ceiling that fits.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From a 30 m² apartment to a 3,000 m² office floor — we scope, supply and
            install end-to-end.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="reveal group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:gradient-ember group-hover:text-primary-foreground transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-primary group-hover:rotate-12 transition-all" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <p className="text-sm text-foreground/80 border-t border-border pt-4">
                  → {s.benefit}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
