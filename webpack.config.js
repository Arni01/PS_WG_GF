const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ESBuildMinifyPlugin } = require('esbuild-loader')
// const CopyWebpackPlugin = require('copywe')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  }

  if (isProd) {
    config.minimizer = [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        css: true, // Apply minification to CSS assets
      }),
    ]
  }

  return config
}

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[chunkhash].${ext}`

const cssLoaders = (isModule, loader) => {
  const loaders = [
    MiniCssExtractPlugin.loader,

    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        url: true,
        import: true,
        // localIdentName: '[path][name]__[local]--[hash:base64:5]',
        // localIdentContext: path.resolve(__dirname, 'src'),
      },
    },
    'postcss-loader',
  ]

  if (loader) {
    loaders.push(loader)
  }

  return loaders
}

const plugins = () => {
  const base = [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public/*.*',
    //       to: '[name][ext]',
    //       noErrorOnMissing: true,
    //     },
    //   ],
    // }),
    new HTMLWebpackPlugin({
      // filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
      filename: './index.html',
    }),
    new MiniCssExtractPlugin(),
    //   {
    //   filename: `styles.css`,
    // }
  ]

  return base
}

// const fixtures = path.resolve(__dirname, 'fixtures')

module.exports = {
  entry: {
    app: './index.js',
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, './dist'),
    // filename: `bundle.js`,
    filename: 'index.js',
    // assetModuleFilename: 'public/[hash][ext][query]',
    publicPath: isDev ? '/' : './',
  },
  externals: {
    React: 'react',
  },
  mode: isDev ? 'development' : 'production',
  context: path.resolve(__dirname, 'src'),
  devServer: {
    // watchFiles: 'src/**.html',
    compress: true,
    historyApiFallback: true,
    port: 3000,
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-jsx',
            ],
          },
          // loader: 'esbuild-loader',
          // options: {
          //   loader: 'jsx',
          //   target: 'es2015',
          //   // jsxFactory: 'React.createElement',
          //   // jsxFragment: 'Fragment',
          // },
        },
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       // options: {
      //       //   name: '[name].[ext]',
      //       //   // useRelativePath: true,
      //       //   publicPath: './',
      //       // },
      //     },
      //   ],
      // },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
      // {
      //   test: /\.(ttf|otf)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: { name: '[name].[ext]' },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: isDev
      //       ? '[path][name][ext]'
      //       : '[path][name][contenthash][ext]',
      //   },
      // },
      // CSS, PostCSS, Sass
      // {
      //   test: /\.css$/,
      //   use: cssLoaders(),
      // },
      // {
      //   test: /\.module.css$/,
      //   // include: /\.module\.css$/,
      //   use: cssLoaders(true),
      // },
      // {
      //   test: /\.(s[ca]ss)$/,
      //   use: cssLoaders(false, 'sass-loader'),
      // },
      // {
      //   test: /\.html/,
      //   type: 'asset/resource',
      //   // generator: {
      //   //   filename: 'static/[hash][ext][query]',
      //   // },
      // },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'mustache-loader',
      //       options: {
      //         delimiters: '{# #}',
      //       },
      //     },
      //     {
      //       loader: 'html-loader',
      //       options: {
      //         // interpolate: true,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  // optimization: optimization(),
  target: 'web',
  plugins: plugins(),
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
}
