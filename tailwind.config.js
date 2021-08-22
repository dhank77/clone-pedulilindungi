const colors = require('tailwindcss/colors')


module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: '5rem'
      },
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: theme => ({
        'banner-home': "url('https://pedulilindungi.id/assets/banner-home-vaccine.svg')",
      }),
      height: {
        banner: '550px',
      },
      colors: {
        blue: colors.sky,
      },
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui']
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
