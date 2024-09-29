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
    extend: {},
    fontFamily:{
      nano: ["var--font-nano"]
    },
    fontFamily:{
      mario: ["var--font-mario"]
    },
    fontSize: {
      '10xl': '10rem',
      '11xl': '12rem',
      '12xl': '14rem',
      // Add more custom sizes as needed
    },
  },
  plugins: [],
}