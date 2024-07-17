/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['node_modules/preline/dist/*.js', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
    require('preline/plugin'),
  ],
}

