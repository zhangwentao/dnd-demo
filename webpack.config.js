const path = require('path');
const config = {
	mode: 'development',
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname,'./dist'),
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
	},
	devServer: {
		static: {
			directory: './dist'
    }
  }
};

module.exports = config;
