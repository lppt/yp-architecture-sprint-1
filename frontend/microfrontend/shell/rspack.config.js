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
    publicPath: 'http://localhost:3000/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg|svg|json)$/,
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
      name: 'shell',
      remotes: {
        'utils': 'utils@http://localhost:3002/remoteEntry.js',
        'auth': 'auth@http://localhost:3001/remoteEntry.js',
        'profile': 'profile@http://localhost:3003/remoteEntry.js',
        'dashboard': 'dashboard@http://localhost:3004/remoteEntry.js',
      },
    }),
    new HtmlRspackPlugin({
      template: './public/index.html',
    }),
  ],
};