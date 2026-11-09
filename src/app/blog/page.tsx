import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "Our Blog — PandGroup",
  description:
    "Energy management insights, regulatory analysis on CLCPA, and deep dives into New York City's renewable grid transition.",
};

const POSTS = [
  {
    slug: "can-new-york-city-really-go-100-renewables",
    title: "Can New York City Really Go 100% Renewables?",
    excerpt:
      "There are roughly 8.3 million people living in NYC within a 300 square mile area. As a result, NYC is one of the toughest cities to find open real estate for development. Finding underutilized real estate like abandoned islands and open rail yards is critical for solar, tidal, and hybrid storage.",
    image: "/images/Rectangle-11-1.png",
    category: "Clean Energy Development",
    date: "Energy Insights",
    readTime: "6 min read",
  },
  {
    slug: "what-is-the-climate-leadership-and-community-protection-act",
    title: "What is the Climate Leadership and Community Protection Act (CLCPA)?",
    excerpt:
      "NY State passed Senate bill S6599 titled the Climate Leadership and Community Protection Act. This bill mandates that New York State go totally carbon-neutral by 2050. Exploring how distributed solar, offshore wind, and total electrification will shape the power grid.",
    image: "/images/Rectangle-12-1.png",
    category: "Policy & Mandates",
    date: "Regulatory Advisory",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-28 sm:pt-32 bg-white">
      {/* Header */}
      <section className="bg-brand-dark text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-3">
            Our Blog
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            Thought leadership &amp; regulatory analysis.
          </h1>
          <p className="text-brand-gray/80 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            Perspectives on grid modernization, renewable real estate in New York City, and climate law compliance.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 sm:py-28 bg-white text-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-brand-card rounded-2xl overflow-hidden border border-brand-gray shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <Link href={`/${post.slug}`} className="relative aspect-[16/10] w-full block bg-brand-gray">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-dark/90 text-brand-sky text-xs font-semibold px-3 py-1 rounded-full border border-brand-sky/30">
                    {post.category}
                  </div>
                </Link>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-brand-muted mb-3">
                    <span className="font-medium text-brand-sky">{post.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-2xl text-brand-dark mb-4 group-hover:text-brand-sky transition-colors leading-snug">
                    <Link href={`/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-brand-muted leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-brand-gray flex items-center justify-between">
                    <Link
                      href={`/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:underline"
                    >
                      <span>Read Article</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA Component */}
      <WhyChooseUs />
    </div>
  );
}
