/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",    // Path to your components and app
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: ['"Playfair Display"', 'serif'],
        manrope: ['"Manrope"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
