const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpack = require('./webpack.base')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const {styleLoaders} = require('./tools')

// Handle array of configurations
const [backgroundConfig, mainConfig] = baseWebpack

// Development config for background service worker
const backgroundDevConfig = merge(backgroundConfig, {
  watch: true,
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
})

// Development config for main application
const mainDevConfig = merge(mainConfig, {
  watch: true,
  module: {
    rules: styleLoaders({ sourceMap: false })
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new FriendlyErrorsPlugin()
  ]
})

module.exports = [backgroundDevConfig, mainDevConfig]
