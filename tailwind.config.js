/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '320px', 
      },
      colors: {
       'blue':'#0065FF',
       'gray':'#E5E5E5',
       'dark-gray': '#434343',
      },
      spacing: {
        '15': '3.75rem',
        '25': '6.5rem',
      }
    },
  },
  plugins: [],
}

