/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // Important for Next.js + App Router structure
    "./app/**/*.{js,ts,jsx,tsx}",  // Optional: in case you use /app
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF9000",
        secondary: "#2F3C4F",
        dark: "#1f2937",
        light: "#f9fafb"
      },
      fontFamily: {
        'space': ['"Space Mono"', 'monospace'],
        'kaushan': ['"Kaushan Script"', 'cursive'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
