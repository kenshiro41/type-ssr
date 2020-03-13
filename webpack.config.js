const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ROOT_PATH = './';
const CLIENT_PATH = './client';
const DIST_PATH = './dist/public';
const dirPath = (...pathName) => {
  return path.resolve(__dirname, ...pathName);
};
module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [dirPath(ROOT_PATH), 'node_modules']
  },
  entry: {
    bundle: dirPath(CLIENT_PATH, 'index.tsx')
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.client.json'
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  output: {
    path: dirPath(DIST_PATH)
  }
  // watch: true
};
