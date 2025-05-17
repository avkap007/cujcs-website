// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightOrange: '#F57C00',
        lightPeach: '#FAC090',
        deepRed: '#A70039',
        pink: '#F06292',
        white: '#FFFFFF',
        mutedPurpleGray: '#D7C1C8',
      },
      fontFamily: {
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
