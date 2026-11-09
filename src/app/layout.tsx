import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#142433",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pandgroup-redesign.vercel.app"),
  title: "PandGroup — Clean Energy & DERMS Technology Advisory",
  description:
    "PandGroup is an independent energy consultancy specializing in Distributed Energy Resource Management Systems (DERMS), DRMS, microgrid feasibility, and clean-tech strategy. Based in New York.",
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
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/images/pandgroup-logo-light.png",
  },
  openGraph: {
    title: "PandGroup — A Smarter Grid Starts with Clearer Thinking",
    description:
      "Expert DERMS solutions, microgrid engineering, and strategic clean-tech advisement for utilities and energy operators.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/Rectangle-19.png",
        width: 1200,
        height: 630,
        alt: "PandGroup Clean Energy Systems",
      },
    ],
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-white text-brand-slate antialiased overflow-x-hidden min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
