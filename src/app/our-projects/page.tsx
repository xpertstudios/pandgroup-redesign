import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "Our Projects — PandGroup Predevelopment Initiatives",
  description:
    "Explore predevelopment clean-tech projects including Urban Retail Microgrids, Zero Carbon Adventures, and The Bronx Mobility Hub.",
};

const PROJECTS = [
  {
    title: "Urban Retail Microgrids",
    location: "Red Hook / Carroll Gardens (Brooklyn) & Financial District (Manhattan)",
    status: "Pre-Development Concept",
    description:
      "A proposed predevelopment-stage investment project at the intersection of Red Hook, Carroll Gardens (Brooklyn), and the Financial District (Manhattan), retrofitting an existing commercial factory and event space into an urban food hall, battery energy storage, rooftop solar, and EV fast charging to serve Brooklyn's evolving waterfront economy.",
    image: "/images/slide5_img0.png",
    highlights: ["Rooftop Solar Array", "Battery Energy Storage System (BESS)", "DC Fast EV Charging", "Adaptive Commercial Reuse"],
  },
  {
    title: "Zero Carbon Adventures",
    location: "Catskills, New York",
    status: "Off-Grid Pilot Concept",
    description:
      "Sunset Camp reimagines the outdoor retreat experience. Their carbon-free retreat combines thoughtful design, sustainable comfort, and the raw beauty of the Catskills. Two premium inflatable tents, complete with wood-burning stoves and comfortable amenities, create an intimate escape powered completely off-grid by renewable power.",
    image: "/images/Rectangle-3.png",
    highlights: ["100% Carbon-Free Footprint", "Renewable Off-Grid Power", "Low-Impact Sustainable Infrastructure"],
  },
  {
    title: "The Bronx Mobility Hub",
    location: "Concourse Yard, The Bronx, NY",
    status: "Pre-Development Proposal",
    description:
      "The Bronx Solar Mobility Hub proposes a full-yard platform above Concourse Yard that preserves transit operations while creating new space for solar generation, fast EV charging, and, if feasible, a 10 MW battery energy storage system.",
    image: "/images/slide4_img0.png",
    highlights: ["10 MW Battery Energy Storage", "Full Transit Yard Air Rights", "Fast EV Charging Plaza", "Solar Canopy Generation"],
  },
];

export default function OurProjectsPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-white">
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-sky/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-3">
            Portfolio &amp; Concepts
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            Pre-development clean energy infrastructure &amp; urban initiatives.
          </h1>
          <p className="text-brand-offwhite/85 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            From Brooklyn waterfront retail microgrids to regional transit air-rights hubs and off-grid sustainable retreats across New York.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 sm:py-28 bg-white text-brand-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="grid lg:grid-cols-12 gap-10 items-center bg-brand-offwhite p-6 sm:p-10 rounded-3xl border border-brand-border shadow-sm hover:shadow-md transition-all"
            >
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-brand-border aspect-[16/10] w-full bg-brand-navy">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-navy/95 text-brand-sky text-xs font-semibold px-3 py-1 rounded-full border border-brand-sky/30">
                    {proj.status}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-muted">
                  <MapPin size={15} className="text-brand-sky shrink-0" />
                  <span>{proj.location}</span>
                </div>

                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy leading-tight">
                  {proj.title}
                </h2>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  {proj.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {proj.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white text-brand-slate border border-brand-border px-3 py-1.5 rounded-md font-medium"
                    >
                      &bull; {h}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-brand-sky hover:bg-brand-skyhover text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md transition-all shadow-sm"
                  >
                    <span>Inquire About Project</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Component */}
      <Clients />

      {/* Why Choose Us CTA Component */}
      <WhyChooseUs />
    </div>
  );
}
