const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    entry: ['./src/index.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './public/dist')
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: 'babel-loader',
          options: {
            presets: ['@babel/react']
          }
        }
      ]
    },
    devServer: {
      contentBase: './public/',
      watchContentBase: true,
      open: true
    },

    mode: env
  }
};
