const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const path = require('path');
module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: 'hidden-source-map',
  output: {
    publicPath: 'http://localhost:3002/',
    clean: true,
  },
  module: {},
  cache: false,
  plugins: [
    new ModuleFederationPlugin({
      name: 'utils',
      filename: 'remoteEntry.js',
      exposes: {
        './react': 'react',
        './react-dom': 'react-dom',
        './api': './src/api.js',
        './react-router-dom':'react-router-dom',
        './CurrentUserContext':'./src/CurrentUserContext.js',
        './PopupWithForm':'./src/components/PopupWithForm.js'
      },
    }),
  ],
};