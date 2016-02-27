var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'app.scss'
  ],

  devtool: 'eval-source-map',

  module: {
    loaders: [{
      test: /\.s?(c|a)ss$/,
      exclude: 'node_modules',
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      // loader: 'raw-loader!style-loader!css-loader!sass-loader'
    },
    {
      test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader : 'file-loader'
    }]
  },
  resolve: {
    root: [
      path.resolve('./static/scss')
    ],
    extensions: ['', '.css', '.scss', '.sass']
  },
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'bundle.css'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};