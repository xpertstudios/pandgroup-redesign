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
        pine: {
          DEFAULT: "#101E23",
          deep: "#0B1519",
          light: "#172A31",
          surface: "#1E353E",
        },
        lime: {
          DEFAULT: "#C9F36A",
          hover: "#D6F785",
          muted: "#A8CE54",
        },
        sand: {
          DEFAULT: "#F4F3EB",
          light: "#FCFBF7",
          dark: "#E8E6DB",
        },
        sage: {
          DEFAULT: "#7E8E89",
          light: "#9CAAA5",
          dark: "#5A6863",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
