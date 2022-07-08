const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    compress: true,
    port: 8000,
    watchFiles: 'src',
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
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
