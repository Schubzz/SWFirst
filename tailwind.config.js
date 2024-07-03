/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-small': '0 1px 2px rgba(31, 255, 201, 0.1)',
      },
      dropShadow: {
        'accent': '2px 2px 6px rgba(31, 255, 201, 0.5)',
      },
      backgroundImage: {
        'network': "url('./network.webp')",
      },
      colors: {
        'custom-dark': '#1D1A1B',
        'accent': '#1FFFC9'
      },
    },
  },
  plugins: [],
}

