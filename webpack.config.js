const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry: [
		'./src/index.js', './src/print.js'
	],
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: 'dist',
		compress: true,
		port: 9000
	},
	module:{
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		},
		{
			test:/\.css$/,
			use:ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
		},
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: [
			{
				loader:'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: './images/'
				}
			}
			]
		}
		]
	},
	plugins: [
	new CleanWebpackPlugin(['dist'],{
			exclude: ['index.html']
		}),
	new webpack.optimize.UglifyJsPlugin(),
	new ExtractTextPlugin("css/app.css"),
	]
}
