const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
      open: true,
      overlay: {
          warnings: false,
          errors: true
      },
      proxy: {
          '/API': {
              target: `http://localhost:3001`,
              secure: false,
              changeOrigin: true,
              pathRewrite: {
              '^/API': ''
              },
          }
      }
  }
})
