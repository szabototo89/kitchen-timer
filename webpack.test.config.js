var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',

  resolve: {
    root: [
      path.resolve('./spec'),
      path.resolve('./src'),
      path.resolve('./typings')
    ],
    extensions: ['', '.js', '.ts', '.tsx', '.d.ts']
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: 'node_modules',
        loader: 'ts-loader'
      }
    ]
  }

  //plugins: [
  //  new BrowserSyncPlugin({
  //    host: 'localhost',
  //    port: 3000,
  //
  //    files: ['./karma_html/**/*.html'],
  //
  //    server: {
  //      baseDir: ['karma_html/report-summary-filename']
  //    }
  //  }, {
  //    reload: false
  //  })
  //]
};