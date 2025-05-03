/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          progress: {
            '0%': { width: '0%' },
            '100%': { width: '100%' },
          },
        },
        animation: {
          progress: 'progress 3s ease-in-out forwards',
        },
      },
    },
    plugins: [],
  }
  