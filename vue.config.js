const path = require("path");
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@axios': path.resolve(__dirname, 'src/plugins/axios.js'),
      },
    },
  }
}
