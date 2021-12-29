const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#39a9fa',
        icon: '#44403c',
        primary: '#fa8839',
        secondary: '#f9e616'
      },
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans]
      },
      typography: {
        DEFAULT: {
          css: {
            /*color: 'green',
            a: {
              color: 'red',
              '&:hover': {
                color: 'green'
              }
            },
            h1: {
              color: 'var(--main-bg-color)'
            }*/
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
