import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "Can New York City Really Go 100% Renewables? — PandGroup",
  description:
    "An analysis of renewable development in New York City: using abandoned islands, tidal channels, and rail yards for hybrid solar and battery storage.",
};

export default function NyRenewablesPost() {
  return (
    <div className="pt-24 sm:pt-28 bg-white">
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-brand-sky hover:underline uppercase tracking-wider mb-2"
          >
            <ArrowLeft size={14} />
            <span>Back to Blog</span>
          </Link>
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block">
            Clean Energy Development
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Can New York City Really Go 100% Renewables?
          </h1>
          <div className="flex items-center gap-4 text-xs text-brand-offwhite/70 pt-2">
            <span>By PandGroup Editorial</span>
            <span>&bull;</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white text-brand-slate">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md border border-brand-border bg-brand-navy">
            <Image
              src="/images/Rectangle-11-1.png"
              alt="New York City Skyline and Renewable Energy Integration"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-brand-muted space-y-6 text-base sm:text-lg leading-relaxed">
            <p>
              There are roughly 8.3 million people living in NYC within a 300 square mile area. As a result, NYC is one of the toughest cities to find open real estate for development. Additionally, since real estate is scarce, the cost of land comes at a premium.
            </p>
            <p>
              The key would be finding underutilized real estate in the NYC service area. There is a need for a development company that focuses on this issue. In order to accomplish this, a developer would need to build renewable generation at unique locations in NYC.
            </p>

            <h2 className="font-heading font-bold text-2xl text-brand-navy pt-4">
              Unlocking Underutilized Waterfronts and Transit Corridors
            </h2>
            <p>
              The focus would be on developing abandoned Islands, and open-air railroad and train yards. In NYC there are 42 islands, 6 major waterways, 25 train yards, and 11 railroad yards. These areas represent prime opportunities for Solar and Tidal farms with Hybrid Storage.
            </p>
            <p>
              The waterways in NYC are both tidal and flowing (Tidal Straits), which are prime for Tidal energy systems. Coupled with localized Distributed Energy Resource Management Systems (DERMS) and battery storage, these sites can alleviate transmission congestion across Zone J.
            </p>

            <div className="bg-brand-offwhite p-6 sm:p-8 rounded-2xl border-l-4 border-brand-sky border border-brand-border my-8">
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                The Role of DERMS in Dense Urban Centers
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Interconnecting tidal power, rooftop solar, and distributed battery systems requires software systems capable of dynamic load aggregation, automated demand response, and real-time distribution modeling.
              </p>
            </div>

            <p>
              PandGroup is actively evaluating clean-tech feasibility, microgrid architectures, and pre-development models across the New York metropolitan region to turn these underutilized geographical assets into resilient clean energy hubs.
            </p>
          </div>

          <div className="pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-brand-sky hover:bg-brand-skyhover text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md transition-all shadow-sm"
            >
              <span>Discuss NYC Project Development</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href="/what-is-the-climate-leadership-and-community-protection-act"
              className="text-xs font-semibold text-brand-sky hover:underline"
            >
              Next: What is the CLCPA? &rarr;
            </Link>
          </div>
        </div>
      </article>

      {/* Why Choose Us CTA Component */}
      <WhyChooseUs />
    </div>
  );
}
