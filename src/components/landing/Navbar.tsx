import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/lp_favicon3.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#calculator", label: t("nav.calculator") },
    { href: "#about", label: t("nav.about") },
    { href: "#advantages", label: t("nav.advantages") },
    { href: "#services", label: t("nav.services") },
    { href: "#portfolio", label: t("nav.portfolio") },
    { href: "#how", label: t("nav.how") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cycleLang = () => {
    const order = ["et", "en", "ru"];
    const cur = order.findIndex((l) => i18n.language?.startsWith(l));
    i18n.changeLanguage(order[(cur + 1) % 3]);
  };

  return (
    <header
      className={`sticky top-0 md:top-9 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-background/60 backdrop-blur"
      }`}
    >
      <nav className="container-px max-w-7xl mx-auto h-16 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Laeproff" className="h-7 md:h-8 w-auto" />
        </a>
        <div className="hidden lg:flex items-center gap-6 xl:gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={cycleLang}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            aria-label="Change language"
          >
            <Globe className="h-5 w-5" />
          </button>
          <Button asChild className="hidden lg:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            <a href="#contact">{t("nav.cta")}</a>
          </Button>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-px py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary py-1"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>{t("nav.cta")}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
