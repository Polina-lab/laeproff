import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import { Button } from "@/components/ui/button";

const items = [
  { img: p1, title: "Penthouse Living Room", tag: "Stretch · Recessed lighting", span: "lg:col-span-2 lg:row-span-2" },
  { img: p3, title: "Hospitality Lounge", tag: "Acoustic · Linear LED" },
  { img: p4, title: "Master Bedroom", tag: "Starry sky · Fiber optics" },
  { img: p2, title: "Corporate Office", tag: "Wood acoustic panels" },
  { img: p5, title: "Hotel Lobby", tag: "Multi-level gypsum · Cove lights" },
  { img: p6, title: "On-Site Installation", tag: "Behind the scenes" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary/30 border-y border-border">
      <div className="container-px max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Recent Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">A portfolio that speaks in surfaces</h2>
          </div>
          <Button asChild variant="outline" className="border-foreground/20 hover:bg-card">
            <a href="#book">Start your project →</a>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`reveal relative overflow-hidden rounded-xl group bg-card ${it.span ?? ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <div className="text-xs text-primary uppercase tracking-wider mb-1">{it.tag}</div>
                <div className="font-semibold text-foreground">{it.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
