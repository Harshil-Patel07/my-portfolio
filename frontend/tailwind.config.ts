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
        "hero-image": "url('/images/heroimage.svg')",
        "about-hero-image":"url('/images/about-hero.jpg')",
        "gradientBg":""
      },
      colors: {
        brand: {
          black: "#101111",
          lightBlack: "#1C1C1C",
          darkGray: "#292929",
          gray:"#98989A"
        }
      },
      boxShadow: {},
      content: {},
      screens: {},
      fontFamily: {
        Poppins: ["Poppins", " sans-serif"],
        PlayWrite: ["Playwrite PL", "cursive"]
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'shake': 'shake 0.7s linear infinite alternate',
        'opacityAnim': 'opacityAnim 0.7s linear',
      
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'shake': {
          from: { rotate: "-5deg" },
          to: { rotate: "5deg" },
        },
        'opacityAnim': {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
   
      }
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.pause-animation': {
          'animation-play-state': 'paused',
        },
      });
    },
  ],
};
export default config;
