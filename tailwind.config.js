module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    // animation: {
    // 	ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) 4'
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
