var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: [
    'index.tsx'
  ],

  devtool: 'eval-source-map',

  module: {
    loaders: [{
      test: /\.tsx?$/,
      exclude: 'node_modules',
      loader: 'ts-loader'
    }]
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./typings')
    ],
    extensions: ['', '.js', '.ts', '.tsx', '.d.ts']
  },
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'static' }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ]
};