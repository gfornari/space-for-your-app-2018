const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const RenameWebpackPlugin = require('rename-webpack-plugin');
const common = require('./webpack.common.js');
const env = require('./env.prod.json');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      API_URL: JSON.stringify(env.API_URL)
    }),
    new RenameWebpackPlugin({
      originNameReg: 'index.html',
      targetName: '200.html'
    })
  ]
});