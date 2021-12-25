module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#39a9fa',
        icon: '#44403c',
        primary: '#fa8839',
        secondary: '#f9e616'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
