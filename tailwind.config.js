/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'helihop-blue': '#0077B6',
        'helihop-gold': '#FFDD00',
        'helihop-orange': '#FF5733',
        'helihop-dark': '#333333',
        'helihop-medium': '#777777',
        'helihop-light': '#DDDDDD',
        'helihop-white': '#FFFFFF',
        'helihop-offwhite': '#F8F9FA',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFDD00 0%, #FFC300 100%)',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
