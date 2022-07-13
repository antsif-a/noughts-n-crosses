const path = require('path');

const resolveApp = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  entry: resolveApp('src/index'),
  mode: 'development',
  resolve: {
    alias: {
      '@': resolveApp('src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    compress: true,
    port: 8000,
    watchFiles: 'src',
    hot: true,
    historyApiFallback: true,
  },
  output: {
    path: resolveApp('public'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['public/assets/scss'],
            },
          },
        }],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              ref: true,
            },
          },
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
};
