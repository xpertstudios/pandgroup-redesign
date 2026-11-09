import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "What is the Climate Leadership and Community Protection Act (CLCPA)? — PandGroup Blog",
  description:
    "An overview of New York Senate bill S6599: decarbonization targets, offshore wind mandates, and challenges facing utilities and commercial real estate.",
};

export default function ClcpaPost() {
  return (
    <div className="pt-28 sm:pt-32 bg-white">
      {/* Header */}
      <section className="bg-brand-dark text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-brand-sky hover:underline uppercase tracking-wider mb-2"
          >
            <ArrowLeft size={14} />
            <span>Back to Blog</span>
          </Link>
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block">
            Regulatory Policy &amp; Decarbonization
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            What is the Climate Leadership and Community Protection Act (CLCPA)?
          </h1>
          <div className="flex items-center gap-4 text-xs text-brand-gray/70 pt-2">
            <span>By PandGroup Editorial</span>
            <span>&bull;</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white text-brand-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-brand-gray">
            <Image
              src="/images/Rectangle-12-1.png"
              alt="New York State Climate Leadership and Community Protection Act"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-brand-muted space-y-6 text-base sm:text-lg leading-relaxed">
            <p>
              NY State has passed Senate bill S6599 titled the Climate Leadership and Community Protection Act (CLCPA). This bill mandates that New York State go totally carbon-neutral by 2050.
            </p>
            <p>
              Carbon neutrality is achieving a net-zero carbon footprint—balancing greenhouse gas emissions with carbon removal or simply eliminating carbon emissions altogether across transportation, energy generation, agriculture, and industrial processes.
            </p>

            <h2 className="font-heading font-bold text-2xl text-brand-dark pt-4">
              Core Statutory Milestones &amp; Generation Targets
            </h2>
            <p>
              In order to accomplish a true zero-carbon grid, all carbon-based generation must be phased out and replaced with renewable sources of power by 2040 (with an interim milestone of 70% renewable electricity by 2030).
            </p>
            <p>
              The legislation also increases targets for distributed solar from 3,000 MW by 2023 to 6,000 MW by 2025, alongside 9,000 MW of offshore wind within the NYISO territory. Complete electrification of vehicle fleets and domestic building heat pumps (replacing natural gas) will drive surging peak electric demand.
            </p>

            <div className="bg-brand-card p-6 sm:p-8 rounded-2xl border-l-4 border-brand-sky border border-brand-gray my-8">
              <h3 className="font-heading font-bold text-lg text-brand-dark mb-2">
                The Demand vs. Capacity Challenge
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                NYC represents just 0.86% of the land area within New York State, but accounts for over one-third of total statewide electricity demand. Balancing this localized demand requires smart DERMS architectures and microgrid capabilities.
              </p>
            </div>

            <p>
              PandGroup works with regional utilities, building portfolios, and developers to structure CLCPA compliance roadmaps, interconnection evaluations, and DER aggregation frameworks to meet these regulatory deadlines without service disruption.
            </p>
          </div>

          <div className="pt-8 border-t border-brand-gray flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-brand-sky hover:bg-brand-sky/90 text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md transition-all shadow-sm"
            >
              <span>Schedule Regulatory Compliance Consultation</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href="/can-new-york-city-really-go-100-renewables"
              className="text-xs font-semibold text-brand-sky hover:underline"
            >
              Read: NYC 100% Renewables &rarr;
            </Link>
          </div>
        </div>
      </article>

      {/* Why Choose Us CTA Component */}
      <WhyChooseUs />
    </div>
  );
}
