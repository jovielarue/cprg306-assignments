/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#F6F5F1",
        text: "#452a31",
        blue: "#C0D6EA",
        pink: "#F8B8DE",
      },
    },
  },
  plugins: [],
};
