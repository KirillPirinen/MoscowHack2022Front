const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const rules = {
	js: {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
		},
	},
	image: {
		test: /\.(gif|png|jpe?g|svg)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'content/assets/[hash].[ext]',
				},
			},
		],
	},
	svg: {
		test: /\.svg$/,
		use: [
			{
				loader: 'raw-loader',
			},
		],
	},
	html: {
		test: /\.html$/,
		use: [
			{
				loader: 'html-loader',
				options: { minimize: true },
			},
		],
	},
	css: {
		test: /\.css$/,
		use: ['style-loader', 'css-loader'],
	},
};

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
		publicPath: "/",
    filename: '[name].[hash].js',
  },
	devServer: {
		historyApiFallback: true,
		open: true
	},
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
		new Dotenv()
  ],
  module: {
    rules: [rules.js, rules.image, rules.css],
  },
};
