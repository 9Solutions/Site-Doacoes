const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/java-api',
        createProxyMiddleware({
            target: 'http://44.200.115.110:8080',
            changeOrigin: true,
        })
    );

    app.use(
        '/lambda-services',
        createProxyMiddleware({
            target: 'https://f9zmnx2q3a.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
        })
    );
};
