import Image from "next/image";

// Real client brands from PandGroup's past work
const CLIENTS = [
  {
    name: "Commercial & Utility Partner 1",
    src: "/images/image-3.png",
    width: 284,
    height: 80,
  },
  {
    name: "Commercial & Utility Partner 2",
    src: "/images/image-4.png",
    width: 238,
    height: 80,
  },
  {
    name: "Commercial & Utility Partner 3",
    src: "/images/image-5.png",
    width: 328,
    height: 80,
  },
];

export default function Clients() {
  return (
    <section className="py-14 sm:py-18 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-1">
            Proven Industry Track Record
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
            Past Clients &amp; Partners
          </h2>
        </div>

        {/* Client Logos: natural proportions preserved */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-18">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="p-4 bg-brand-offwhite rounded-xl border border-brand-border/60 flex items-center justify-center transition-all hover:border-brand-sky/40 hover:shadow-sm"
            >
              <div className="relative h-11 sm:h-13 w-auto flex items-center">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="max-h-11 w-auto object-contain filter grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
