module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/random-workout/'
  : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/sass/variables.scss";`
      }
    }
  }
};