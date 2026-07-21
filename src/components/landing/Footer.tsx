import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo_laeproff_white.svg";

const Footer = () => {
  const { t } = useTranslation();
  const SERVICE_KEYS = ["stretch", "suspended", "lighting", "repair", "multilevel"];
  const NAV = [
    { href: "#calculator", label: t("nav.calculator") },
    { href: "#services", label: t("nav.services") },
    { href: "#portfolio", label: t("nav.portfolio") },
    { href: "#how", label: t("nav.how") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-[hsl(0_0%_3%)] border-t border-border">
      <div className="container-px max-w-7xl mx-auto py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={logo} alt="Laeproff" className="h-8 w-auto mb-4" />
          <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-md bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-md bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">{t("nav.services")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {SERVICE_KEYS.map((k) => (
              <li key={k}>
                <a href="#services" className="hover:text-primary transition-colors">{t(`services.items.${k}.name`)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Menu</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">{t("nav.contact")}</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-primary mt-0.5" /> {t("topbar.phone")}</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-primary mt-0.5" /> {t("topbar.email")}</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> {t("contact.address")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px max-w-7xl mx-auto py-5 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Laeproff. {t("footer.rights")}</span>
          <span>{t("topbar.hours")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
