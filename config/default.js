var path = require('path');

module.exports = {
  env: (process.env.NODE_ENV || 'development'),
  devServer: {
    port: 5000
  },
  webpackServer: {
    port: 8888
  },
  webpack: {
    output: {
      path: path.join(__dirname, '../build/assets'),
      htmlPath: 'index.html'
    }
  },
  analytics: {
    ga: 'UA-45414156-1'
  }
};
