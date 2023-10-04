/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primery: "#130f40",
        secondory: "#ff6348",
      },
    },
  },
  plugins: [],
};
