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
      nano: ["var--font-nano"],
      mario: ["var--font-mario"],
      gatwick: ["var--font-gatwick"],

    },
    fontSize: {
      '2xs': '.5rem',
      '5xl': '3rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
      '11xl': '12rem',
      '12xl': '14rem',
      // Add more custom sizes as needed
    },
  },
  plugins: [
  ],
}