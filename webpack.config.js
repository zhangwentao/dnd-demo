const path = require('path');
const config = {
	entry: path.resolve(__dirname, './src/index.jsx'),
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'main.js',	
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				options: {
					 presets: ['@babel/preset-env','@babel/preset-react']
				}
			}
		]
	}
};

module.exports = config;
