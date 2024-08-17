import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
};
export default config;
