/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7BDCB5",
        secondary: "#2F8F6B",
        tertiary: "#FF8C82",
        neutral: "#7C857E",
      },
      fontFamily: {
        // Connects to the variable you defined in layout.js
        romens: ["var(--font-romens)", "sans-serif"], 
        forfelast: [" var(--font-forfelast)", "sans-serif"],
        heqra: ["var(--font-heqra)", "sans-serif"],
        vitta: ["var(--font-vitta)", "sans-serif"],
        forfelast_italic: ["var(--font-forfelast_italic)", "sans-serif"],
      },
    },
  },
  
  plugins: [],
};