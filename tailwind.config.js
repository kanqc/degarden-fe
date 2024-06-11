/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "380px",
        md: "640px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#e8677b",
        "primary-light": "#ff8c9e",
        secondary: "#f5c810",
        "bg-color": "#fafafa",
        star: "url(#yellow-gradient)",
        subTitle: "#2C3847",
      },
      animation: {
        "appear-from-top": "appear-from-top 0.5s linear forwards",
        "show-mobile-menu": "show-mobile-menu 0.5s ease-in-out forwards",
        "hide-mobile-menu": "hide-mobile-menu 0.5s ease-in-out forwards",
        "show-mobile-cate": "show-mobile-cate 0.5s ease-in-out forwards",
      },
      keyframes: {
        "appear-from-top": {
          "0%": { transform: "translate(0,-10%)", opacity: 0 },
          "100%": { transform: "translate(0,0)", opacity: 1 },
        },
        "show-mobile-menu": {
          "0%": { transform: "translate(-150%,0)" },
          "100%": { transform: "translate(0,0)" },
        },
        "hide-mobile-menu": {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-200%,0)" },
        },
        "show-mobile-cate": {
          "0%": { "max-height": "0px" },
          "100%": { "max-height": "1200px" },
        },
      },
    },
  },
  plugins: [],
};
