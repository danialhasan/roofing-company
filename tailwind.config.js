const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'soft-white': '#FAFAFA',
        'soft-black': '#2D3748',
        'softer-black': '#1A202C',
        'accent-orange': '#FF9F1C',
        'form-outline': '#41B4E6'
      },
      height: {
        "100v": "100vh",
      },
      margin: {
        "xlNav": "-640px",
        "lgNav": "-512px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}