const { NONAME } = require('dns');
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
          css: {
            a: {
              color: 'var(--iwdf-link-color)',
              'text-decoration': 'none',
              '&:hover': {
                color: 'var(--iwdf-link-hover-color)'
              }
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
