const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}", // for Angular projects
    ],
    theme: {
      extend: {
        keyframes: {
          slideInLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          slideInRightScale: {
            '0%': { transform: 'translateX(100%) scale(0.8)', opacity: '0' },
            '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
          },
          slideInUp:{
              '0%':{transform :'translateY(100%)',opacity:'0'},
              '100%':{transform :'translateY(0)',opacity:'1'},
          },
          slideInDown:{
              '0%':{transform :'translateY(-100%)',opacity:'0'},
              '100%':{transform :'translateY(0)',opacity:'1'},
          },
          wave: {
            '0%': { transform: 'rotate(0.0deg)' },
            '10%': { transform: 'rotate(14deg)' },
            '20%': { transform: 'rotate(-8deg)' },
            '30%': { transform: 'rotate(14deg)' },
            '40%': { transform: 'rotate(-4deg)' },
            '50%': { transform: 'rotate(10deg)' },
            '60%': { transform: 'rotate(0.0deg)' },
            '100%': { transform: 'rotate(0.0deg)' },
          },
        },
        animation: {
          slideInLeft: 'slideInLeft 1s ease-out forwards',
          slideInRightScale: 'slideInRightScale 1s ease-out forwards',
          slideInUp:'slideInUp 1s ease-out forward',
          slideInDown:'slideInDown 1s ease-out forward',
          wave: 'wave 2s infinite',
        },
      },
    },
    plugins: [],
  }
  