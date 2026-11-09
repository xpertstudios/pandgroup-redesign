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
        brand: {
          navy: "#142433",       // Primary Deep Navy
          navydark: "#0D1822",   // Ultra-deep background
          sky: "#64BBE3",        // Signature Light Blue
          skyhover: "#4FAAD5",   // Darker sky blue on hover
          purple: "#7B3FA1",     // Refined Purple accent
          purplelight: "#9A5EC0",
          offwhite: "#F8FAFC",   // Warm off-white
          slate: "#344454",      // Dark Slate body text
          muted: "#5B6C7D",      // Muted slate secondary text
          border: "#E2E8F0",     // Clean border
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
