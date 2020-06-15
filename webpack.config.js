/** @format */
let path = require('path');
module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	externals: {
		react: 'commonjs react',
		'react-dom': 'commonjs react-dom'
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'build'),
		libraryTarget: 'commonjs2'
	},
	performance: {
		hints: false
	},
	optimization: {
		splitChunks: {
			minSize: 10000,
			maxSize: 250000
		}
	}
};
