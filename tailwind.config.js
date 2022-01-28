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
              color: 'var(--iwdf-accent-color)',
              '&:hover': {
                color: 'var(--iwdf-accent-color)'
              }
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
