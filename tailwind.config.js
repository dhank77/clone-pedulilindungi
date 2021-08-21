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
      container:{
        center: true,
        padding: '5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
