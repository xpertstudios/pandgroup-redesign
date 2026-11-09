import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#101E23",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "PandGroup — DERMS, Microgrids & Grid Modernization Advisory",
  description:
    "Independent energy advisory firm specializing in Distributed Energy Resource Management Systems (DERMS), DRMS, microgrid feasibility, and clean-tech strategy. Based in New York.",
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
    title: "PandGroup — A Smarter Grid Starts with Clearer Thinking",
    description:
      "Independent clean-energy consultancy guiding utilities, municipal stakeholders, and clean-tech developers through DERMS architecture and regulatory modernization.",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-sand text-pine antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
