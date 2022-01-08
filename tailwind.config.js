const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--iwdf-accent-color)',
        primary: 'var(--iwdf-primary-color)',
        warn: 'var(--iwdf-warn-color)'
      },
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans]
      },
      typography: {
        DEFAULT: {
          /*css: {
            color: 'green',
            a: {
              color: 'var(--iwdf-link-color)',
              '&:hover': {
                color: 'var(--iwdf-link-hover-color)'
              }
            },
            p: {
              margin: 0
            }
          }*/
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
