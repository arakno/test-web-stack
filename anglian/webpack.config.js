const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

require('es6-promise').polyfill();

const PATHS = {
  css: 'css/app.css',
  scss: 'src/scss/',
  js: 'js/main.js',
  src: 'src/',
  drupal: '../drupal/web/themes/anglian/css/',
  build: `${__dirname}/build`,
};

module.exports = {
  entry: {
    'body.css': './src/scss/main.scss',
    'header.css': './src/scss/header.scss',
    'form.css': './src/scss/form.scss',
    'footer.css': './src/scss/footer.scss',
    'main.js': './src/main.js',
  },

  // change path to PATHS.build or just __dirname so it builds on local
  output: {
    path: path.resolve(`${PATHS.drupal}`),
    filename: '[name]',
  },

  plugins: [
    // Stylelint plugin
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: '',
      files: '**/*.s?(a|c)ss',
      syntax: 'scss',
      failOnError: false,
      quiet: false,
    }),

    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'PROD',
      test: /\.(jpe?g|png|gif|svg)$/i,
    }),

    // define where to save the file
    new ExtractTextPlugin({
      filename: '[name]', // path.resolve(`${PATHS.drupal}[name]`),
      allChunks: true,
    }),

    new DashboardPlugin({ port: 6001 }),

  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        include: path.resolve(`${PATHS.scss}`),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 35000,
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          // apply multiple loaders and options eg. "htmllint-loader",
          {
            loader: 'html-loader',
            options: {
              minimize: false,
              removeComments: false,
            },
          },
        ],
      },
    ],
  },

  // stats: 'normal', // minimal
  // Add --host 0.0.0.0 to webpack devserver to expose localhost to LAN
  devServer: {
    contentBase: './',
    inline: true,
    progress: true,
    host: '0.0.0.0',
    open: 'http://localhost:6001',
    watchOptions: {
      watch: true,
      hot: true,
      ignored: /node_modules/,
    },
  },

  stats: {
    // Colored output
    colors: true,
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};