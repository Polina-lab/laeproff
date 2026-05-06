import { Zap, Gem, Settings2, HardHat, ShieldCheck, Clock } from "lucide-react";

const points = [
  { icon: Zap, title: "Fast Installation", desc: "Most rooms completed in a single working day." },
  { icon: Gem, title: "Premium Materials", desc: "Direct supply from certified European manufacturers." },
  { icon: Settings2, title: "Custom Solutions", desc: "Designed to your space, lighting and acoustics." },
  { icon: HardHat, title: "Experienced Crew", desc: "In-house installers — never subcontracted." },
  { icon: ShieldCheck, title: "10-Year Warranty", desc: "Written warranty on materials and workmanship." },
  { icon: Clock, title: "On-Time, On-Budget", desc: "Fixed quotes. No surprises after we start." },
];

const WhyUs = () => {
  return (
    <section id="why" className="py-24 md:py-32 container-px max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16 reveal">
        <span className="text-xs uppercase tracking-[0.2em] text-primary">Why Laeproff</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Six reasons clients come back</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
        {points.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="reveal bg-background p-8 hover:bg-card transition-colors group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Icon className="h-8 w-8 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
