import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-px max-w-7xl mx-auto py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-bold text-lg mb-4">
            <span className="h-7 w-7 rounded-md gradient-ember flex items-center justify-center text-primary-foreground text-sm">L</span>
            Laeproff
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Ceiling installation and finishing for residential, hospitality and commercial spaces. Engineered. Designed. Delivered.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Linkedin].map((Ic, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4">Services</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Stretch Ceilings</li>
            <li>Suspended Ceilings</li>
            <li>Acoustic Solutions</li>
            <li>Lighting Integration</li>
            <li>Repair & Replacement</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+1 (000) 000-0000</li>
            <li>hello@laeproff.com</li>
            <li>Mon–Sat · 8:00–19:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Laeproff. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
