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
        nav:'0rem 0.5rem 5rem 0rem rgba(0, 0, 0, 0.10)'
      },
      gridTemplateColumns: {
        nav: '1fr auto 1fr'
      },
      colors: {
        primary: "#f5fcff",
        secondary: "#0292b1",
        grey: "#484848",
      },
      lineHeight: {
        rem:'3.5rem',
      },
    },
  },
  plugins: [],
};
