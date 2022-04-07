const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm' : '320px', // Iphone 4 Resolution
      'md': '768px', // Las Ipad Mini comienza en 768px
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      'title-font': 'Playfair\\ Display',
    },
    colors: {
      'primary': '#6C8E7D',
      'secondary': '#D39242',
      'error' : '#FF6363',
      'success' : '#26AE60',
      'background' : '#F0F0F0',
      'white' : '#fff',
      'gray': {
        '200' : '#CECECE',
        '300' : '#F4F4F4',
        '400' : '#B8B8B8',
        '500' : '#0000004d'
      },
      'title-color' : '#000000DE',
      'p-color': '#000000BF',
      'terciary-p-color': '#00000099',
      'input-border-color' : '#CECECE',
      'input-disabled-color': '#F4F4F4',
      'title-yellow' : '#FFB458',
    },
    extend: {
      spacing:{
        '480' : '480px',
        '768' : '768px',
        '158' : '632px',
        '137' : '548px',
        '100' : '400px',
        '95' : '380px',
        '77' : '308px',
        '50' : '200px',
        '32' : '128px',
        '30' : '120px',
        '29' : '116px',
        '27' : '108px',
        '25' : '100px',
        '15' : '60px'
      },
      fontFamily: {
        'sans': ['inter, Playfair Display', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

