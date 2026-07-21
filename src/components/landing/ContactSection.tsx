import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { z } from "zod";
import { useLead } from "@/context/LeadContext";

const SERVICE_KEYS = ["stretch", "suspended", "lighting", "repair", "multilevel"];

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(255),
  service: z.string().min(1),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const ContactSection = () => {
  const { t } = useTranslation();
  const lead = useLead();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState<string>("stretch");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (lead.service) setService(lead.service);
  }, [lead.service]);

  useEffect(() => {
    if (lead.message !== undefined) setMessage(lead.message ?? "");
  }, [lead.message]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = { ...Object.fromEntries(fd.entries()), service, message };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t("contact.success"));
      (e.target as HTMLFormElement).reset();
      setMessage("");
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-border">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">{t("contact.eyebrow")}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground mt-3">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 reveal space-y-4">
            <a href={`tel:${t("topbar.phone")}`} className="section-light flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="font-semibold mt-1">{t("topbar.phone")}</div>
              </div>
            </a>
            <a href={`mailto:${t("topbar.email")}`} className="section-light flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-semibold mt-1">{t("topbar.email")}</div>
              </div>
            </a>
            <div className="section-light flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
                <div className="font-semibold mt-1">{t("contact.hours")}</div>
              </div>
            </div>
            <div className="section-light flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                <div className="font-semibold mt-1">{t("contact.address")}</div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="section-light lg:col-span-3 grid sm:grid-cols-2 gap-4 reveal p-6 md:p-8 rounded-2xl border border-primary/20 bg-card">
            <div>
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input id="name" name="name" required maxLength={100} className="mt-2 h-12 bg-background/0 border-border" />
            </div>
            <div>
              <Label htmlFor="phone">{t("contact.phone")}</Label>
              <Input id="phone" name="phone" type="tel" required maxLength={30} className="mt-2 h-12 bg-background/0 border-border" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input id="email" name="email" type="email" required maxLength={255} className="mt-2 h-12 bg-background/0 border-border" />
            </div>
            <div className="sm:col-span-2">
              <Label>{t("services.eyebrow")}</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="mt-2 h-12 bg-background/0 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_KEYS.map((k) => (
                    <SelectItem key={k} value={k}>{t(`services.items.${k}.name`)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">{t("contact.message")}</Label>
              <Textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("contact.messagePh")}
                rows={6}
                maxLength={2000}
                className="mt-2 bg-background/0 border-border resize-none"
              />
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-13 py-3 text-base bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-medium"
              >
                {loading ? t("contact.sending") : t("contact.submit")}
              </Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">{t("contact.consent")}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
