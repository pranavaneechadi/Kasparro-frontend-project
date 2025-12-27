/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Next.js App Router (app/) and top-level components
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // include other common locations
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
