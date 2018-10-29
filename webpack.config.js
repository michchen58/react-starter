const path = require('path');

module.exports = env => ({
  entry: ['./src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist'),
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        options: {
          presets: ['@babel/react'],
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'eslint-loader',
      },
    ],
  },
  devServer: {
    contentBase: './public/',
    watchContentBase: true,
    open: false,
  },
  mode: env,
});
