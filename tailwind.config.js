/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        russo: ['Russo One', 'sans-serif'],
        revalia: ['Revalia', 'san-serif'],
        redrose: ['Red Rose', 'serif'],
      },
      colors: {
        primary: '#E27FB8',
        secondaryfirst: '#DB66AA',
        secondary: '#915CDF',
        hover: '#E85AAA',
        modcol: '#ddf3f07e',
      }
    },
  },
  plugins: [],
}

