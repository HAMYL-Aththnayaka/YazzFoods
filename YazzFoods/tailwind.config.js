/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",        // Add this to watch your HTML
    "./public/**/*.{js,ts}",    // Add this if you have JS in public
    "./src/**/*.{js,jsx,ts,tsx}" 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}