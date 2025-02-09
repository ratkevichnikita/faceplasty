import type { Config } from "tailwindcss";

export default {
  content: [
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/flat-pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['var(--rubik)'],
        'montserrat': ['var(--font-montserrat)'],
        'lato': ['var(--font-lato)'],
      },
      colors: {
        purple: '#C055F7',
        white: '#fff',
        black: '#270236',
        error: '#BC0505',
        orange: '#FFE1AB'
      },
    },
  },
  plugins: [],
} satisfies Config;
