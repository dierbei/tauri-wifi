// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {
//         keyframes: {
//           progress: {
//             '0%': { width: '0%' },
//             '100%': { width: '100%' },
//           },
//         },
//         animation: {
//           progress: 'progress 3s ease-in-out forwards',
//         },
//       },
//     },
//     plugins: [],
//   }
  
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'zoom-fade': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      animation: {
        'zoom-fade': 'zoom-fade 1s ease-out forwards',
        'rotate-slow': 'spin 6s linear infinite',
        'gradient-move': 'gradient-move 10s ease infinite'
      }
    }
    
  },
  plugins: [],
};
