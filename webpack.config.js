const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolveApp(pathname) {
  return path.resolve(__dirname, pathname);
}

module.exports = {
  entry: resolveApp('src/index'),
  output: {
    path: resolveApp('build'),
    publicPath: 'auto',
    filename: '[chunkhash].js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveApp('assets/index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@': resolveApp('src'),
      '@assets': resolveApp('assets'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    compress: true,
    port: 3000,
    watchFiles: 'src',
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [resolveApp('src/scss')],
            },
          },
        }],
      },
    ],
  },
};
