var path              = require('path');
var config            = require('config');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var configPlugin = new webpack.DefinePlugin({
  GA_CODE:    JSON.stringify(config.get('analytics.ga')),
  'process.env': {
    NODE_ENV: JSON.stringify(config.get('env'))
  }
});

module.exports = {
  cache: true,
  output: {
    path: config.get('webpack.output.path'),
    publicPath: '/assets/',
    filename: 'app.[hash].js',
  },
  module: {
    loaders: [
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=8192' },
      { test: /\.ico$/, loader: 'url-loader'}
    ]
  },
  plugins: [
    configPlugin,
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      env: config.get('env'),
      filename: config.get('webpack.output.htmlPath'),
      template: 'src/templates/index.html'
    }),
  ]
}
