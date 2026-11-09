import Image from "next/image";

const CLIENTS = [
  {
    name: "Partner 1",
    src: "/images/image-3.png",
    width: 284,
    height: 80,
  },
  {
    name: "Partner 2",
    src: "/images/image-4.png",
    width: 238,
    height: 80,
  },
  {
    name: "Partner 3",
    src: "/images/image-5.png",
    width: 328,
    height: 80,
  },
];

export default function Clients() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-2">
            Trusted Experience
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-dark tracking-tight">
            Past Clients
          </h2>
        </div>

        {/* Client Logos: preserving original proportions and unclipped */}
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 lg:gap-20">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="p-4 bg-brand-card rounded-xl border border-brand-gray flex items-center justify-center transition-all hover:shadow-sm"
            >
              <div className="relative h-12 sm:h-14 w-auto flex items-center">
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
