/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        Hero:"url(Assets/imgs/Background.png)"
      }
    },
  },
  plugins: [],
}

