const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		bundle: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	module:{
		rules: [
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
		new ExtractTextPlugin("css/app.css"),
	]
}
