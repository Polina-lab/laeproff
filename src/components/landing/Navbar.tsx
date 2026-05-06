import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container-px max-w-7xl mx-auto h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="h-7 w-7 rounded-md gradient-ember flex items-center justify-center text-primary-foreground text-sm">L</span>
          Laeproff
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <Button asChild className="hidden md:inline-flex gradient-ember text-primary-foreground hover:opacity-90">
          <a href="#book">Book Now</a>
        </Button>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-px py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground">
                {l.label}
              </a>
            ))}
            <Button asChild className="gradient-ember text-primary-foreground">
              <a href="#book" onClick={() => setOpen(false)}>Book Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
