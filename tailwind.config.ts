import type { Config } from "tailwindcss";

export const NAVBAR_HEIGHT_REM = 4.5;
export const FOOTER_HEIGHT_REM = 4.5;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: "rgb(var(--text-primary) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        backgroundStart: "rgb(var(--background-start) / <alpha-value>)",
        backgroundEnd: "rgb(var(--background-end) / <alpha-value>)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        navbar: `${NAVBAR_HEIGHT_REM}rem`,
        footer: `${FOOTER_HEIGHT_REM}rem`,
      },
      spacing: {
        layoutOffset: `${NAVBAR_HEIGHT_REM + FOOTER_HEIGHT_REM}rem`,
      },
    },
  },
  plugins: [],
};
export default config;
