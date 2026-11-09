import Image from "next/image";

const CLIENTS = [
  {
    name: "Client Partner 1",
    src: "/images/image-3.png",
    width: 284,
    height: 80,
    aspectClass: "w-36 sm:w-44 h-12 sm:h-14",
  },
  {
    name: "Client Partner 2",
    src: "/images/image-4.png",
    width: 238,
    height: 80,
    aspectClass: "w-32 sm:w-40 h-12 sm:h-14",
  },
  {
    name: "Client Partner 3",
    src: "/images/image-5.png",
    width: 328,
    height: 80,
    aspectClass: "w-40 sm:w-48 h-12 sm:h-14",
  },
];

export default function Clients() {
  return (
    <section className="py-14 sm:py-18 bg-sand-light border-y border-sand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-sand-dark">
          <div>
            <span className="text-sage-dark font-mono text-xs uppercase tracking-widest font-semibold block mb-1">
              Industry Relationships
            </span>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-pine tracking-tight">
              Past Clients &amp; Institutional Collaborators
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-sage-dark max-w-md">
            Trusted by utilities, municipal programs, and clean-tech developers across regional distribution networks.
          </p>
        </div>

        {/* Client Logos: Preserving original proportions & unclipped */}
        <div className="pt-10 flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-12 lg:gap-16">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="relative p-4 rounded-2xl bg-sand border border-sand-dark flex items-center justify-center transition-all duration-300 hover:border-pine/30 hover:shadow-md"
            >
              <div className={`relative ${client.aspectClass} flex items-center justify-center`}>
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
