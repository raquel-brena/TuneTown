/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "oil-black-100": "#161616",
        "oil-black-200": "#1B1B1B",
        "oil-black-300": "#262626",
      },
      boxShadow: {
        moon: " inset 14px -1px 9.8px #759EBD",
      },
    },
  },
  plugins: [],
};

