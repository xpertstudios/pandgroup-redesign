import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#64BBE3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "PandGroup — DERMS, Microgrids & Grid Modernization Advisory",
  description:
    "At Pandgroup, we specialize in crafting tailor-made DERMS solutions that optimize grid stability, enhance energy reliability, and empower the seamless integration of renewable resources.",
  keywords: [
    "DERMS",
    "DRMS",
    "Microgrids",
    "Virtual Power Plants",
    "FERC 2222",
    "Grid Modernization",
    "Clean Tech Advisory",
    "New York Energy Consulting",
  ],
  authors: [{ name: "PandGroup LLC" }],
  openGraph: {
    title: "PandGroup — Tailor-made DERMS Solutions for an Evolving Grid",
    description:
      "At Pandgroup, we specialize in crafting tailor-made DERMS solutions that optimize grid stability, enhance energy reliability, and empower the seamless integration of renewable resources.",
    type: "website",
    url: "https://pandgroup.com",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-white text-brand-charcoal antialiased overflow-x-hidden min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
