/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // 'lg':{'max': '1800px'} ,
      'md': {'max' : '1000px'},
      'sm': {'max':'540px'}
    },
  },
  plugins: [],
}