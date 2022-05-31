const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: './src/index.js',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
module.exports = config
