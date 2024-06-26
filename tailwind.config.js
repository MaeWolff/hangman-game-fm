/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ["MouseMemoirs"],
      serif: ["MouseMemoirs"],
      mono: ["MouseMemoirs"],
      display: ["MouseMemoirs"],
      body: ["MouseMemoirs"],
    },
    extend: {
      colors: {
        game: {
          "dark-navy": "#261676",
          blue: "#2463FF",
        },
      },
      backgroundImage: {
        desktop: "url('/assets/svg/background-desktop.svg')",
        tablet: "url('/assets/svg/background-tablet.svg')",
        mobile: "url('/assets/svg/background-mobile.svg')",
      },
    },
  },
  plugins: [],
};
