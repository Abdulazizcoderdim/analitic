/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: '#ff5b14',
        lighBlue: '#348A8E',
      },
      backgroundColor: {
        brown: '#ff5b14',
        lighBlue: '#348A8E',
        middleBlue: '#1B4446',
      },
      animation: {
        scalePulse: 'scalePulse 1s ease-in-out infinite',
        downAnimation: 'downAnimation 2s ease-in-out infinite',
        animateMarquee: 'marquee 50s linear infinite',
        leftRigt: 'leftRigt 2s ease-in-out infinite',
      },
      keyframes: {
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        downAnimation: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        leftRigt: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
};
