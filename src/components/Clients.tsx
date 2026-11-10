import Image from "next/image";

// Real client brands from PandGroup's past work on pandgroup.com
const CLIENTS = [
  {
    name: "Clean Energy Transition Client Partner",
    src: "/images/image-3.png",
    width: 284,
    height: 80,
  },
  {
    name: "Grid Technology & Infrastructure Partner",
    src: "/images/image-4.png",
    width: 238,
    height: 80,
  },
  {
    name: "Renewable Energy Systems Partner",
    src: "/images/image-5.png",
    width: 328,
    height: 80,
  },
];

export default function Clients() {
  return (
    <section className="py-16 sm:py-20 bg-brand-offwhite/40 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-1.5">
            Proven Industry Track Record
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
            Past Clients &amp; Partners
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-lg mx-auto">
            Trusted by municipal clean-tech initiatives, renewable developers, and utility operators across North America.
          </p>
        </div>

        {/* Client Logos: natural proportions preserved on high-contrast cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto items-center">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-brand-border/80 shadow-xs hover:border-brand-sky/40 hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-[96px]"
            >
              <div className="relative h-12 w-auto flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
