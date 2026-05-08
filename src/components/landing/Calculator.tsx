import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator as CalcIcon, ArrowRight } from "lucide-react";
import { useLead } from "@/context/LeadContext";

const SERVICE_KEYS = ["stretch", "suspended", "acoustic", "lighting", "repair", "multilevel"] as const;
const RATES: Record<string, number> = {
  stretch: 25,
  suspended: 30,
  acoustic: 45,
  lighting: 35,
  repair: 28,
  multilevel: 50,
};

const Calculator = () => {
  const { t } = useTranslation();
  const { prefillAndScroll } = useLead();
  const [type, setType] = useState<string>("stretch");
  const [area, setArea] = useState<number>(20);
  const [lamps, setLamps] = useState<number>(4);
  const [pipes, setPipes] = useState<number>(2);

  const rate = RATES[type] ?? 25;
  const breakdown = useMemo(() => {
    const base = Math.max(0, area) * rate;
    const lampsCost = Math.max(0, lamps) * 10;
    const pipesCost = Math.max(0, pipes) * 5;
    return { base, lampsCost, pipesCost, total: base + lampsCost + pipesCost };
  }, [area, lamps, pipes, rate]);

  const buildPrefill = () => {
    const typeName = t(`services.items.${type}.name`);
    return t("calcPrefill", {
      type: typeName,
      area,
      lamps,
      pipes,
      price: breakdown.total,
    });
  };

  const handleOrder = () => {
    prefillAndScroll({ service: type, message: buildPrefill() });
  };

  return (
    <div id="calculator" className="relative rounded-2xl border border-primary/30 bg-card/95 backdrop-blur-xl p-6 md:p-8 shadow-[var(--shadow-elevated)]">
      <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="flex items-center gap-3 mb-1">
        <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center border border-primary/30">
          <CalcIcon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold">{t("calc.title")}</h2>
          <p className="text-xs text-muted-foreground">{t("calc.subtitle")}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">
        <div className="col-span-2">
          <Label className="text-xs">{t("calc.type")}</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="mt-1.5 h-11 bg-background/60 border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_KEYS.map((k) => (
                <SelectItem key={k} value={k}>
                  {t(`services.items.${k}.name`)} — {t("calc.from")} {RATES[k]} €/m²
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-xs">{t("calc.area")}</Label>
          <Input
            type="number"
            min={1}
            value={area}
            onChange={(e) => setArea(Number(e.target.value) || 0)}
            className="mt-1.5 h-11 bg-background/60 border-border"
          />
        </div>
        <div>
          <Label className="text-xs">{t("calc.lamps")}</Label>
          <Input
            type="number"
            min={0}
            value={lamps}
            onChange={(e) => setLamps(Number(e.target.value) || 0)}
            className="mt-1.5 h-11 bg-background/60 border-border"
          />
        </div>
        <div className="col-span-2">
          <Label className="text-xs">{t("calc.pipes")}</Label>
          <Input
            type="number"
            min={0}
            value={pipes}
            onChange={(e) => setPipes(Number(e.target.value) || 0)}
            className="mt-1.5 h-11 bg-background/60 border-border"
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-background/60 border border-border p-4">
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">{t("calc.estimate")}</span>
          <span className="text-3xl md:text-4xl font-bold text-primary">
            {t("calc.from")} {breakdown.total.toLocaleString()} €
          </span>
        </div>
        <ul className="text-xs text-muted-foreground space-y-1 border-t border-border pt-3">
          <li className="flex justify-between"><span>{t("calc.base", { area, rate })}</span><span>{breakdown.base} €</span></li>
          <li className="flex justify-between"><span>{t("calc.lampsLine", { count: lamps })}</span><span>{breakdown.lampsCost} €</span></li>
          <li className="flex justify-between"><span>{t("calc.pipesLine", { count: pipes })}</span><span>{breakdown.pipesCost} €</span></li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-5">
        <Button onClick={handleOrder} className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 font-medium">
          {t("calc.ctaOrder")} <ArrowRight className="ml-1.5 h-4 w-4" />
        </Button>
        <Button onClick={handleOrder} variant="outline" className="h-11 border-primary/40 text-foreground hover:bg-primary/10">
          {t("calc.ctaContact")}
        </Button>
      </div>
      <p className="text-[10px] text-muted-foreground mt-3 text-center">{t("calc.disclaimer")}</p>
    </div>
  );
};

export default Calculator;
