const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://207.148.75.139:1000/api',
            changeOrigin: true,
            logLevel: 'debug',
            pathRewrite: {
                '^/api': ''
            },
        })
    )
}