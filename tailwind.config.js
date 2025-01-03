/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(71, 194, 248)',
        titleBlue: 'rgb(56, 137, 219)', // Corrected from titleeBlue to titleBlue
        blueTick:'rgb(30, 161, 243)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Setting Poppins as the default sans-serif
      },
    },        
  },
  plugins: [],
}
