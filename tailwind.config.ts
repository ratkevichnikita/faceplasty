import type { Config } from "tailwindcss";

export default {
  content: [
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/flat-pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: { max: '1460px' },
      // => @media (max-width: 1527px) { ... }
      ls: { max: '1024px' },

      lg: { max: '991px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '540px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'rubik': ['var(--rubik)'],
        'montserrat': ['var(--font-montserrat)'],
        'lato': ['var(--font-lato)'],
      },
      colors: {
        purple: 'var(--purple)',
        white: '#fff',
        black: '#0A1412',
        error: '#BC0505',
        main: '#5F998A',
        orange: 'var(--orange)'
      },
      boxShadow: {
        cardShadow: '0px 4px 20px 0px #80808026',
      },
      backgroundColor: {
        green: '#5F998A',
        gray: 'rgba(30,30,30,0.2)'
      },
      backgroundImage: {
        main: 'linear-gradient(to bottom, #5F998A, #0D574F)'
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s linear forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
