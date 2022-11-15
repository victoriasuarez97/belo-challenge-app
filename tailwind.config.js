/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        spacing: {
          sm: '8px',
          md: '12px',
          lg: '16px',
          xl: '24px',
      },
      colors: {
        primary: {
          100: '#F4F4F8',
          200: '#E6E6E6',
          300: '#e3e3e3'
        },
        secondary: {
          200: '#F6AE2D'
        },
        red: {
          100: '#000000',
          200: '#FE4A49',
          300: '#e3e3e3'
        },
        green: {
          100: '#000000',
          200: '#2AB7CA',
          300: '#e3e3e3'
        },
        yellow: {
          100: '#000000',
          200: '#FED766',
          300: '#e3e3e3'
        }
      }
    },
  },
  plugins: [],
}