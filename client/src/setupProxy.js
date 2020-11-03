const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/auth/google',
        createProxyMiddleware({
          target: 'http://localhost:5000',
          changeOrigin: true,
        })
    );
    app.use(
      '/auth/logout',
      createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
      })
    );
    app.use(
        '/auth/api/*',
        createProxyMiddleware({
          target: 'http://localhost:5000',
          changeOrigin: true,
        })
    );
    app.use(
      '/userExpenses/add/',
      createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
      })
    );
    app.use(
      '/userExpenses/*',
      createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
      })
    );
    app.use(
      '/userIncomes/add/',
      createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
      })
    );
    app.use(
      '/userIncomes/currentUser',
      createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
      })
    );

};