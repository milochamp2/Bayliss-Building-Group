import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1C1C1E",
          50: "#F5F5F5",
          100: "#E8E8E9",
          200: "#C4C4C6",
          300: "#A0A0A3",
          400: "#5E5E62",
          500: "#1C1C1E",
          600: "#19191B",
          700: "#111112",
          800: "#0D0D0E",
          900: "#080809",
        },
        accent: {
          DEFAULT: "#C2662D",
          50: "#FBF0E9",
          100: "#F5D9C6",
          200: "#EBB38D",
          300: "#E08D54",
          400: "#D4762E",
          500: "#C2662D",
          600: "#A85626",
          700: "#7E4120",
          800: "#542B15",
          900: "#2A160B",
        },
        surface: {
          DEFAULT: "#FAFAF9",
          warm: "#F5F3F0",
          muted: "#E8E6E3",
        },
        grey: {
          DEFAULT: "#6B6B6F",
          light: "#9A9A9E",
          dark: "#3A3A3D",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-sm": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-lg": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "heading": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-sm": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "card": "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03)",
        "card-hover": "0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)",
        "elevated": "0 20px 50px -12px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
