module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      translate: {
        reverseFull: '-100%',
      },
      keyframes: {
        typing: {
          from: {
            width: '0%',
          },
          to: {
            width: '100%',
          },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': {
            'border-color': 'black',
          },
        },
      },
      animation: {
        typing:
          ' typing 3.5s steps(30, end), blink-caret .5s step-end infinite',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
