import TopBar from "@/components/landing/TopBar";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Advantages from "@/components/landing/Advantages";
import Services from "@/components/landing/Services";
import Portfolio from "@/components/landing/Portfolio";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";
import Reviews from "@/components/landing/Reviews";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import { useReveal } from "@/hooks/useReveal";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  useReveal();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.title = "Laeproff — Premium laepaigaldus | Pingullaed, ripplaed, akustika";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "Laeproff — premium laepaigaldus Eestis. Pingullaed, ripplaed, akustilised laed, valgustuse integreerimine. Tasuta konsultatsioon ja 10-aastane garantii."
    );

    document.documentElement.lang = i18n.language?.split("-")[0] ?? "et";

    const ldId = "ld-laeproff";
    document.getElementById(ldId)?.remove();
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = ldId;
    s.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Laeproff",
      description: "Premium ceiling installation in Estonia.",
      telephone: "+372 555 0000",
      email: "info@laeproff.ee",
      address: { "@type": "PostalAddress", addressLocality: "Tallinn", addressCountry: "EE" },
      areaServed: "EE",
    });
    document.head.appendChild(s);
  }, [i18n.language]);

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Advantages />
      <Services />
      <Portfolio />
      <HowItWorks />
      <FAQ />
      <Reviews />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
