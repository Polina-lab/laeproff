import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Portfolio from "@/components/landing/Portfolio";
import BookingForm from "@/components/landing/BookingForm";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { useReveal } from "@/hooks/useReveal";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Laeproff — Professional Ceiling Installation & Finishing";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "Stretch, suspended, acoustic and lit ceilings. Premium materials, expert installation, 10-year warranty. Book a free estimate."
    );

    const ldId = "ld-laeproff";
    if (!document.getElementById(ldId)) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = ldId;
      s.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Laeproff",
        description: "Ceiling installation and finishing services.",
        telephone: "+1-000-000-0000",
        email: "hello@laeproff.com",
      });
      document.head.appendChild(s);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Portfolio />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
