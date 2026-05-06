import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone").max(30),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.string().min(1, "Please select a service"),
  date: z.string().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const services = [
  "Stretch Ceilings",
  "Suspended Ceilings",
  "Acoustic Solutions",
  "Lighting Integration",
  "Repair & Replacement",
  "Not sure yet",
];

const BookingForm = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Booking request received — we'll call you within 1 business hour.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="book" className="py-24 md:py-32 container-px max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-card via-card to-secondary/40">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid lg:grid-cols-5 gap-10 p-8 md:p-14">
          <div className="lg:col-span-2 reveal">
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Book Service</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Let's plan your<br />ceiling together.
            </h2>
            <p className="text-muted-foreground mb-8">
              Free site visit. Fixed-price estimate within 48 hours. No deposit until you approve the design.
            </p>
            <ul className="space-y-3">
              {["Free on-site measurement", "3D visualization included", "Same-week installation slots"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 grid sm:grid-cols-2 gap-4 reveal">
            <div className="sm:col-span-1">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" required maxLength={100} className="mt-2 bg-background/60 border-border h-12" />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" required maxLength={30} className="mt-2 bg-background/60 border-border h-12" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required maxLength={255} className="mt-2 bg-background/60 border-border h-12" />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="service">Type of service</Label>
              <Select name="service" required>
                <SelectTrigger className="mt-2 bg-background/60 border-border h-12">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="date">Preferred date</Label>
              <Input id="date" name="date" type="date" className="mt-2 bg-background/60 border-border h-12" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Project details (optional)</Label>
              <Textarea id="message" name="message" maxLength={1000} rows={4} className="mt-2 bg-background/60 border-border resize-none" />
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 text-base gradient-ember text-primary-foreground hover:opacity-90 shadow-[var(--shadow-ember)]"
              >
                {loading ? "Sending..." : "Book Service"}
              </Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                By submitting you agree to be contacted by Laeproff. We never share your data.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
