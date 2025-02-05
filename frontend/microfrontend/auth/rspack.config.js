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
    publicPath: 'http://localhost:3001/',
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
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/components/App.js',
        './Login': './src/components/Login.js',
        './Register': './src/components/Register.js'
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