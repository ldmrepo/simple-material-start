const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.js$/,
            exclude: /node-modules/,
            use: ['babel-loader']
          }
        ],
    },
    plugins:[
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "public/index.html")
        })
    ],
    optimization: {
      splitChunks: { chunks: 'all'}
    }
}