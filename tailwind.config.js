module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1220px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      fontFamily: {
        primary: ['"IBM Plex Sans"', 'sans-serif'],
        secondary: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        color: {
          red: '#B40C0C',
          yellow: '#F5E45C',
          silver: '#697077',
          primary: '#121619',
          green: '#28A820',
          pink: '#FF5B5B',
        }
      },
      animationDelay: {
        450: "450ms",
        750: "750ms",
        1050: "1050ms",
      },
      keyframes: {
        loader: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      flex: {
        '170': '0 0 170px'
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}