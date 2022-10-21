import path from 'path'
import { cwd  } from 'process'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const webpackConfig = {
  output: {
    path: path.join(cwd(), 'dist/'),
    filename: '[name].[contenthash].js',
    crossOriginLoading: 'anonymous',
    clean: true
  },
  devtool: 'source-map',
  devServer: {
    port: 4001,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
    static: {
      directory: path.join(cwd(), 'dist'),
    },
  },
  resolve: {
    modules: [path.join(cwd(), 'src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      base: '/'
    }),
  ]
}

export default webpackConfig
