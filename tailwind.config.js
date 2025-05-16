/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'pulse-slower': 'pulse 4s infinite',
        'pulse-slowest': 'pulse 5s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        glow: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '0.7' },
        }
      },
      colors: {
        'primary': '#ec4d58',
        'light': '#fafafa',
        'dark': '#121212',
        'force': '#ec4d58',
        'usuarios': '#d64550',
        'progresion': '#e05d65',
        'bitacora': '#e97078',
        'misiones': '#ec8389',
        'comunidad': '#ef969b',
        'mentoria': '#f2a9ad',
        'realidad': '#f5bcbf',
        'tradicion': '#f8cfd1',
      },
      backgroundColor: {
        'modal': 'rgba(18, 18, 18, 0.9)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}