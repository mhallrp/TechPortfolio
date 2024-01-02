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
