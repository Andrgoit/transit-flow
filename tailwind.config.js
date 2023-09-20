/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      krab: ['Krub', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-yelow': '#FFBE34',
        'primary-blue': '#091242',
        'secondary-gray': '#F4F4F4',
        'heading-color': '#1C1F35',
        'paragraph-color': '#666C89',
        'section-bg': '#f4f4f4',
      },
    },
  },
  plugins: [],
};
