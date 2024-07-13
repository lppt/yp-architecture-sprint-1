const {
  container: { ModuleFederationPlugin },
  HtmlRspackPlugin,
} = require('@rspack/core');
const path = require('path');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'hidden-source-map',
  output: {
    publicPath: 'http://localhost:3004/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'ecmascript',
                jsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './ImagePopup': './src/components/ImagePopup.js',
        './AddPlacePopup': './src/components/AddPlacePopup.js',
        './Card': './src/components/Card.js',
        './Main': './src/components/Main.js',
      },
      remotes: {
        'utils': 'utils@http://localhost:3002/remoteEntry.js',
      },
    }),
    new HtmlRspackPlugin({
      template: './public/index.html',
    }),
  ],
};