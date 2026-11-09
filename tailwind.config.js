/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PandGroup original brand color system
        brand: {
          sky: "#64BBE3",        // Main signature blue from Elementor buttons/accents
          teal: "#09AEB8",       // Primary Astra palette color 0
          gold: "#FFD763",       // Astra palette color 1 (accent amber)
          dark: "#1A2530",       // Deep slate navy for headers and dark surfaces
          charcoal: "#3A3A3A",   // Body dark neutral (Astra color 2)
          muted: "#4B4F58",      // Secondary text (Astra color 3)
          gray: "#F1F1F1",       // Light background (Astra color 4)
          card: "#F8FAFB",       // Subtle card surface (Astra color 6)
          light: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Josefin Sans", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Open Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
