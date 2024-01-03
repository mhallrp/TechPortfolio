/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-roboto)", "Arial", "san-serif"],
      oswald: ["var(--font-oswald)"],
    },
    extend: {
      boxShadow: {
        nav: "0rem 0.5rem 5rem 0rem rgba(0, 0, 0, 0.10)",
        skill: "0rem 0.5rem 5rem 0rem rgba(0, 0, 0, 0.08)",
      },
      gridTemplateColumns: {
        nav: "1fr auto 1fr",
      },
      colors: {
        primary: "#f5fcff",
        secondary: "#0292b1",
        grey: "#484848",
        skillbg: "#f0f8fc",
      },
      lineHeight: {
        rem: "3.5rem",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-4rem)", opacity: 0 },
        },
        slideDown: {
          "0%": { transform: "translateY(-4rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        "slide-down": "slideDown 0.2s ease-out forwards",
        "slide-up": "slideUp 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
