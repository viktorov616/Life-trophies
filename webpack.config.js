const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const { NODE_ENV } = process.env;
const publicPath = '/public/assets/';
const jsName = 'bundle.js';
const plugins = [
  new ForkTsCheckerWebpackPlugin({
    tslint: './tslint.json',
  }),
];

if (NODE_ENV === 'production') {
  plugins.push(new CleanWebpackPlugin(['assets'], {
    root: path.join(__dirname, 'public'),
    verbose: true,
  }));
}

const clientConfig = {
  entry: {
    app: [
      '@babel/polyfill',
      './client/src/main.tsx',
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'client'),
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      api: path.join(__dirname, 'client/src/api'),
      components: path.join(__dirname, 'client/src/components'),
      constants: path.join(__dirname, 'client/src/constants'),
      interfaces: path.join(__dirname, 'client/src/interfaces'),
      pages: path.join(__dirname, 'client/src/pages'),
      src: path.join(__dirname, 'client/src'),
      stores: path.join(__dirname, 'client/src/stores'),
      utils: path.join(__dirname, 'client/src/utils'),
    },
    plugins: [
      new DirectoryNamedWebpackPlugin(),
    ],
  },
  plugins: [
    ...plugins,
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
  ],
  output: {
    path: path.join(__dirname, publicPath),
    filename: `[name].${jsName}`,
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: [/node_modules/, /public/],
      }, {
        test: /\.tsx?$/,
        use: [
          {
            // for hot module replacement
            loader: 'babel-loader',
            options: {
              babelrc: true,
              plugins: ['react-hot-loader/babel'],
            },
          }, {
            loader: 'ts-loader',
            options: {
              // Type ckeching in fork plugin
              transpileOnly: true,
            },
          },
        ],
        // loader: 'ts-loader',
        include: [path.resolve(__dirname, 'client/src'), path.resolve(__dirname, 'node_modules')],

      }, {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2|)$/,
        loader: 'file-loader?name=img/[name].[ext]',
      }, {
        test: /\.wav$/,
        loader: 'file-loader?name=sounds/[name].[ext]',
      },
    ],
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    disableHostCheck: true,
    hot: true,
    inline: true,
    proxy: {
      '/api': 'http://localhost:7777',
    },
  },
};

const serverConfig = {
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: [
      '@babel/polyfill',
      './server/start.js',
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'server'),
      'node_modules',
    ],
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      client$: path.join(__dirname, 'client'),
      api: path.join(__dirname, 'client/src/api'),
      components: path.join(__dirname, 'client/src/components'),
      constants: path.join(__dirname, 'client/src/constants'),
      interfaces: path.join(__dirname, 'client/src/interfaces'),
      pages: path.join(__dirname, 'client/src/pages'),
      src: path.join(__dirname, 'client/src'),
      stores: path.join(__dirname, 'client/src/stores'),
      utils: path.join(__dirname, 'client/src/utils'),
    },
    plugins: [
      new DirectoryNamedWebpackPlugin(),
    ],
  },
  plugins,
  output: {
    path: path.join(__dirname, publicPath),
    filename: `[name].${jsName}`,
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: [/node_modules/, /public/],
      }, {
        test: /\.tsx?$/,
        use: [
          {
            // for hot module replacement
            loader: 'babel-loader',
            options: {
              babelrc: true,
              plugins: ['react-hot-loader/babel'],
            },
          }, {
            loader: 'ts-loader',
            options: {
              // Type ckeching in fork plugin
              transpileOnly: true,
            },
          },
        ],
        // loader: 'ts-loader',
        include: [path.resolve(__dirname, 'client/src'), path.resolve(__dirname, 'node_modules')],

      }, {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2|)$/,
        loader: 'file-loader?name=img/[name].[ext]',
      }, {
        test: /\.wav$/,
        loader: 'file-loader?name=sounds/[name].[ext]',
      },
    ],
  },
};

process.noDeprecation = true;

module.exports = [clientConfig, serverConfig];
