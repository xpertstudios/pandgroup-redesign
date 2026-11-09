import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PandGroup — Clean Energy Consulting & DERMS Solutions",
  description:
    "PandGroup is a leading clean energy consultancy specializing in DERMS architecture, grid modernization, and renewable energy strategy. Based in New York.",
  keywords: [
    "DERMS",
    "clean energy",
    "grid modernization",
    "energy consulting",
    "renewable energy",
    "New York",
  ],
  openGraph: {
    title: "PandGroup — Clean Energy Consulting & DERMS Solutions",
    description:
      "Expert energy consultancy specializing in DERMS, grid modernization, and clean-tech strategy.",
    type: "website",
    url: "https://pandgroup.com",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
