/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'cyan-dark': 'hsl(185, 75%, 39%)',
        'blue-desaturated-very-dark': 'hsl(229, 23%, 23%)',
        'blue-grayish-dark': 'hsl(227, 10%, 46%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
      },
      fontFamily: {
        'Kumbh-Sans': ['Kumbh Sans'],
      },
    },
  },
  plugins: [],
};
