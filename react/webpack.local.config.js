const path = require("path")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
	devServer: {
	    host: '0.0.0.0',
	    port: 80,
	    disableHostCheck: false,
	    hot: true,
	},
	entry: {
		home: path.resolve(__dirname, "./src/js/index.js"),
	},
	mode: "development",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].js", 
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
	            		presets: [
	            			"@babel/preset-env",
	            			'@babel/preset-react',
	            		],
	            		plugins: [
							"@babel/plugin-syntax-dynamic-import",
							"@babel/plugin-transform-runtime",
						],
	          		}
				},
				exclude: /node_modules/,
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html")
		}),
	]
}