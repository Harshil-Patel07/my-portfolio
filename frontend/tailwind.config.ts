import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero-image":"url('/images/heroimage.svg')"
      },
      colors: {
        brand:{
          black:"#101111",
          lightBlack:"#1C1C1C",
          darkGray:"#292929"
        }
      },
      boxShadow: {},
      content: {},
      screens: {},
      fontFamily: {
        Poppins:[ "Poppins"," sans-serif"],
        PlayWrite: ["Playwrite PL","cursive"]
      },
    },
  },
  plugins: [],
};
export default config;
