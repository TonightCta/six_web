const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'https://debugmanage.first.vip/api1',
            changeOrigin: true,
            logLevel: 'debug',
            pathRewrite: {
                '^/api': ''
            },
        })
    )
}