/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxsm: 7,
        xsm: 9,
        lg: 11,
      },
      colors: {
        purple: "#9333ea",
        gray: "#F3F4F6",
        red: "#F04444",
      },
    },
  },
  plugins: [],
};
