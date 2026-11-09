import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FocusStrip from "@/components/FocusStrip";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Leadership from "@/components/Leadership";
import Clients from "@/components/Clients";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-sand text-pine selection:bg-lime selection:text-pine">
      <Navbar />
      <Hero />
      <FocusStrip />
      <Manifesto />
      <Services />
      <Methodology />
      <Leadership />
      <Clients />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
