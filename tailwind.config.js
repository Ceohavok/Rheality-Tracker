/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        financial: '#FFD700', // Yellow
        mental: '#4A5568', // Light dark grey
        wellness: '#DC2626', // Red
        productivity: '#2563EB', // Blue
      }
    },
  },
  plugins: [],
}