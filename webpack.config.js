const path = require('path');
const webpack = require('webpack');
const { argv } = require('yargs');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;
const distPath = path.join(__dirname, '/public');

const config = {
  entry: {
    main: './source/scripts/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: distPath
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: 'html-loader'
    }, {
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }]
    }, {
      test: /\.(css|sass)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            minimize: isProduction
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              autoprefixer({
                browsers: ['ie >= 11', 'last 4 version']
              })
            ],
            sourceMap: true
          }
        },
        'resolve-url-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(gif|png|jpe?g|ico)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '/images/[name].[ext]'
        }
      }, {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 70
          }
        }
      }]
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      options: {
        name: 'fonts/[name].[ext]'
      }
    }, {
      test: /\.svg$/,
      loader: {
        loader: 'url-loader',
        query: {
          limit: 2048,
          name: 'images/[name].[ext]'
        }
      }
    }, {
      test: /\.(otf|ttf|eot)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]'
      }
    }]
  },
  plugins: [
    new webpack.PrefetchPlugin('react'),
    new webpack.ContextReplacementPlugin(/moment[\\]locale$/, /ru/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${__dirname}/source/styles/[name].(css|sass)`,
      chunkFilename: `${__dirname}/source/styles/[id].(css|sass)`
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './source/views/index.html'
    })
  ],
  optimization: isProduction ? {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false,
            warnings: false,
            drop_console: true,
            unsafe: true
          }
        }
      })
    ]
  } : {},
  devServer: {
    contentBase: distPath,
    port: 9000,
    compress: true,
    open: false,
    inline: false // true - включает HMR
  }
};
module.exports = config;
