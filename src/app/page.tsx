import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold selection:text-midnight">
      <Navbar />
      <Hero />
      <Metrics />
      <Clients />
      <Services />
      <About />
      <Projects />
      <Resources />
      <Contact />
      <Footer />
    </main>
  );
}
