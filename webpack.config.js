const path = require('path');
const config = {
	mode: 'development',
	entry: './src/index.jsx',
	/* ./dist/main.js 是webpack默认的output设置
	output: {
		path: path.resolve(__dirname,'./dist'), // output 目录必须是绝对路径
		filename: 'main.js',	
	},
	*/
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
