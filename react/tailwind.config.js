/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        White: "hsl(0, 0%, 100%)",
        Lightgray: "hsl(212, 45%, 89%)",
        Grayishblue: "hsl(220, 15%, 55%)",
        Darkblue: "hsl(218, 44%, 22%)",
      },

      fontSize: {
        15: "15px",
      },
    },
  },
  plugins: [],
};
