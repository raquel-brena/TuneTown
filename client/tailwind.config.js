/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        base: "var(--base)",
        theme: "var(--theme)",
        fume: "var(--fume)",
        stroke: "var(--stroke)",
        contrast: "var(--contrast)",
        post: "var(--post)",
        puro: "var(--puro)",
      },
      textColor: {
        theme: "var(--theme)",

      },
      borderColor: {
        theme: "var(--theme)",
      },
    },
  },
  plugins: [],
};

