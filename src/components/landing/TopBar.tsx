import { Phone, Mail, Clock, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

const langs = [
  { code: "et", label: "ET" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const TopBar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = langs.find((l) => l.code === i18n.language)?.label
    ?? langs.find((l) => i18n.language?.startsWith(l.code))?.label
    ?? "ET";

  return (
    <div className="hidden md:block sticky top-0 z-50 w-full bg-[hsl(0_0%_3%)] border-b border-border text-xs">
      <div className="container-px max-w-7xl mx-auto h-9 flex items-center justify-between text-muted-foreground">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-primary" /> {t("topbar.hours")}</span>
          <a href={`tel:${t("topbar.phone")}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-3.5 w-3.5 text-primary" /> {t("topbar.phone")}
          </a>
          <a href={`mailto:${t("topbar.email")}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-3.5 w-3.5 text-primary" /> {t("topbar.email")}
          </a>
        </div>
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 px-2 py-1 hover:text-primary transition-colors"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className="font-medium tracking-wider">{current}</span>
          </button>
          {open && (
            <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-md shadow-lg overflow-hidden z-50">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { i18n.changeLanguage(l.code); setOpen(false); }}
                  className={`block w-full px-4 py-1.5 text-left text-xs hover:bg-secondary ${
                    i18n.language?.startsWith(l.code) ? "text-primary" : ""
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
