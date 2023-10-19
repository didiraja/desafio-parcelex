/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-parcelex': {
          300: "#71f9ff",
          500: "#3f939a",
        },
        'blue-gray': {
          300: "#417a9a",
          500: "#35516d",
          700: '#0c1923',
        },
      },
    },
  },
  plugins: [],
}

