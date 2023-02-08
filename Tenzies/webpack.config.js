const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader')

module.exports = {
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015'
      })
    ]
  },
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
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2015'
        }
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  mode: 'production',
};
