import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const keys = ["price", "time", "materials", "warranty", "process"];

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <section id="faq" className="py-20 md:py-28 border-b border-border">
      <div className="container-px max-w-3xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">{t("faq.eyebrow")}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">{t("faq.title")}</h2>
        </div>
        <Accordion type="single" collapsible className="reveal">
          {keys.map((k) => (
            <AccordionItem key={k} value={k} className="border-border">
              <AccordionTrigger className="text-left text-base hover:text-primary hover:no-underline">
                {t(`faq.items.${k}.q`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {t(`faq.items.${k}.a`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
