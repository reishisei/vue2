const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        open: true,
        // overlay: {
        //     warnings: false,
        //     errors: true
        // },
        // client: {
        //     // overlay: {
        //     //     warnings: false,
        //     //     errors: true,
        //     // }
        // },
        proxy: {
            // '/api': {
            //     target: `http://45.78.63.84:3000`,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/api': ''
            //     }
            // }
        },
        //   disableHostCheck: true
    }
})
