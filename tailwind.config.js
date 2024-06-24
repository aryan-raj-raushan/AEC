/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#428BC1",
        secondary: "#050138",
        "primary-light": "rgba(66, 139, 193, 0.20)",
        "primary-extra-light": "rgba(66,139,193,0.05)",
        "primary-text-light": "rgba(2, 0, 20, 0.30)",
        "primary-text": "#020014",
        "pink": "#D64F92",
        "pink-light": "#ECD6E2",
        "brand-blue": "#0A1C8F",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
      boxShadow: {
        primary:
          "-2px -2px 8px 0px rgba(0, 0, 0, 0.05), 2px 2px 8px 0px rgba(0, 0, 0, 0.05);",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      } 
    },
  },
  plugins: [],
};
