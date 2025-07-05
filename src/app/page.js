import Image from "next/image";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Rates from "./sections/Rates";
import FAQ from "./sections/FAQ";
import ContactForm from "./sections/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F0E8]">
      <Hero />
      <About />
      <Services />
      <Rates />
      <FAQ />
      <ContactForm />
    </div>
  );
}
