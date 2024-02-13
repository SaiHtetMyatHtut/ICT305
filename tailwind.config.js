const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          "display": 'none',
        },
        '.no-scrollbar': {
          "-ms-overflow-style": 'none',
          "scrollbar-width": 'none',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
}