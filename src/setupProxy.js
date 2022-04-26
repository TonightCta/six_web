const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://61.capital/api',
            changeOrigin: true,
            logLevel: 'debug',
            pathRewrite: {
                '^/api': ''
            },
        })
    )
}