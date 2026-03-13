import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        vt:    ['"VT323"', 'monospace'],
      },
      colors: {
        rpg: {
          bg:      '#0a0a1a',
          bg2:     '#0f0f2e',
          panel:   '#111132',
          border:  '#4444cc',
          border2: '#2222aa',
          gold:    '#f0c040',
          gold2:   '#c8a020',
          white:   '#e8e8ff',
          gray:    '#8888cc',
          green:   '#40e040',
          red:     '#e04040',
          blue:    '#4080e0',
        },
      },
      animation: {
        blink:   'blink 0.7s step-end infinite',
        bob:     'bob 1.2s ease-in-out infinite',
        glow:    'glow 2s ease-in-out infinite alternate',
        fadeIn:  'fadeIn 0.3s ease',
        scanin:  'scanIn 0.4s ease',
      },
      keyframes: {
        blink:  { '50%': { opacity: '0' } },
        bob:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-4px)' } },
        glow:   {
          from: { textShadow: '0 0 8px rgba(240,192,64,.4), 2px 2px 0 #000' },
          to:   { textShadow: '0 0 20px rgba(240,192,64,.9), 0 0 40px rgba(240,192,64,.3), 2px 2px 0 #000' },
        },
        fadeIn:  { from: { opacity: '0', transform: 'translateY(6px)' }, to: { opacity: '1', transform: 'none' } },
        scanIn:  { from: { opacity: '0', transform: 'translateY(-8px)' }, to: { opacity: '1', transform: 'none' } },
      },
    },
  },
  plugins: [],
}
export default config
