import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
        title: ["var(--font-roca)"],
        detail: ["var(--font-miss-katherine)"],
      },
      colors: {
        primary: {
          "50": "#fcf3f6",
          "100": "#fae9f0",
          "200": "#f7d3e0",
          "300": "#f2afc6",
          "400": "#e67399",
          "500": "#dd577f",
          "600": "#ca385d",
          "700": "#af2746",
          "800": "#91233a",
          "900": "#792234",
          "950": "#490e1a",
        },
        secondary: {
          "50": "#fffde7",
          "100": "#fffdc0",
          "200": "#fff884",
          "300": "#ffeb3d",
          "400": "#ffd809",
          "500": "#f6be00",
          "600": "#d49200",
          "700": "#a96600",
          "800": "#8b5008",
          "900": "#64370b",
          "950": "#452103",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
