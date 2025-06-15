// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightOrange: '#F57C00', // not used in tokens, kept for utility
        lightOrange: '#FEF2E9',
        lightPeach: '#FAC090',   // not used in tokens, kept for utility
        deepRed: '#A70039',
        pink: '#F06292',         // not used in tokens, kept for utility
        lightPink: '#FBD0DE',
        white: '#FFFFFF',
        mutedPurpleGray: '#D7C1C8', // not used in tokens, kept for utility
        lightGray: '#F3ECEF',
        cardWhite: '#F8F6F6',
        pageWhite: '#F2F0F0',
        cardGrey: '#E9E6E6',
        cardDarkGrey: '#D1CCCC',
        pageBlack: '#2A2626',
        pageOrange: '#F98B00',
        pageYellow: '#FFE678',
        pageRed: '#A70039',
        pageDarkRed: '#7E002B',
        pageVeryDarkRed: '#56001D',
        overlayBlack: '#3C393C'
      },
      fontFamily: {
        ibm: ['"IBM Plex Mono"', 'monospace'],
        mori: ['"PP Mori"', 'sans-serif']
      },
      fontSize: {
        h1: ['64px', { lineHeight: '100%', letterSpacing: '-0.03em' }],
        h2: ['32px', { lineHeight: '140%' }],
        h3: ['24px', { lineHeight: '140%' }],
        h4: ['18px', { lineHeight: '100%' }],
        body: ['14px', { lineHeight: '160%' }]
      }
    }
  },
  plugins: []
};

export default config;
