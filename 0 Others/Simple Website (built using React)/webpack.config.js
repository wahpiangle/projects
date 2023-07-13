const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map', //use of source map theat helps locate error on the actual source file
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
