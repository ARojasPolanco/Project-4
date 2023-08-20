/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Nunito': ['Nunito', 'sans-serif']
    },
    colors: {
      'primary-100': '#5DA399',
      'primary-200': '#40867d',
      'primary-300': '#004840',
      'accent-100': '#FF6B6B',
      'accent-200': '#8f001a',
      'text-light-100': '#333333',
      'text-light-200': '#5c5c5c',
      'light-100': '#E0E7E9',
      'light-200': '#d6dddf',
      'light-300': '#aeb5b7',
      'primary-dark-100': '#2E8B57',
      'primary-dark-200': '#61bc84',
      'primary-dark-300': '#c6ffe6',
      'accent-dark-100': '#8FBC8F',
      'accent-dark-200': '#345e37',
      'text-dark-100': '#FFFFFF',
      'text-dark-200': '#e0e0e0',
      'dark-100': '#1E1E1E',
      'dark-200': '#2d2d2d',
      'dark-300': '#454545',
      'dark-blue': '#0F0F2D',
      'light-purple': '#555A88',
      'salmon': '#D85D5D',
      'very-dark-blue': '#0F0F2D'
    }
  },
  plugins: [],
}

