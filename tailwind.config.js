const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      /*colors: {
        accent: '#39a9fa',
        icon: '#44403c',
        primary: '#fa8839',
        secondary: '#f9e616'
      },*/
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans]
      },
      typography: {
        DEFAULT: {
          css: {
            /*color: 'green'
             a: {
              color: 'var(--iwdf-link-color)',
              '&:hover': {
                color: 'var(--iwdf-link-hover-color)'
              }
            }*/
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
