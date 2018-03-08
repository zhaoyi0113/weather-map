const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './main.jsx',
    './assets/scss/main.scss',
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '',
  },

  context: resolve(__dirname, 'app'),

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/',
  },

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(jsx?)$/,
      exclude: /node_modules/,
    },
    {
      test: /\.(jsx?)$/,
      loaders: [
        'babel-loader',
      ],
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      // exclude: /node_modules/,
      // use: ExtractTextPlugin.extract({
      //   fallback: 'style-loader',
      //   use: [
      //       'css-loader',
      //       {
      //         loader: 'sass-loader',
      //         query: {
      //           sourceMap: false,
      //         },
      //       },
      //     ],
      //   publicPath: '../',
      // }),
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=images/[name].[ext]' },
    {
      test: /\.(eot|ttf)(\?.*$|$)/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        },
      },
    },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: {
        loader: 'url-loader',
        options: { limit: 10000, mimetype: 'application/font-woff', name: 'fonts/[name].[ext]' },
      },
    },
    { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: { limit: 10000, mimetype: 'application/octet-stream', name: 'fonts/[name].[ext]' },
      },
    },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]' },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.(jsx?)$/,
      options: {
        eslint: {
          configFile: resolve(__dirname, '.eslintrc'),
          cache: false,
        },
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
