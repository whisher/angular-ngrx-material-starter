const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {},
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
