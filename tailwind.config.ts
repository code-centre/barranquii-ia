import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        principleViolet: '#0C6BFA',
        gradientBannerPurple: '#963CF2',
        gradientBannerBlue: '#3CF2F1',
        greenApp: '#4DB368',
        secondaryText: '#618ADC',
        blueBorder: '#1FCFF1'
      }
    },
  },
  plugins: [],
};
export default config;
