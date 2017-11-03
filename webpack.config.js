const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const proxy = require('http-proxy-middleware')
module.exports = {
	entry :{
		bundle:__dirname + '/app/main.js'
	},
	output:{
		path:__dirname + '/build',
		filename:'bundle.js'
	},
	devtool:'source-map',
	devServer:{
		contentBase:'./public',
		inline:true,
		proxy: {
            '*':{
            	target:'https://m.lagou.com',
                changeOrigin:true,//是否跨域
                secure: false}//默认true不接受HTTPS
            
        }
	},
	module:{
		rules:[
			{
				test:/(\.jsx|\.js)$/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['es2015','react']
					}
				},
				exclude:/node_modules/
			},
			{
				test:/(\.css|\.scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use:[
						{
							loader:"css-loader",
							options:{
								modules:true
							}
							
						},{
							loader:'sass-loader',

						},{
	                        loader: "postcss-loader"
	                    }
					]
				})
			}

		]
	},
	plugins:[
		new webpack.BannerPlugin('帅帅帅'),
		new HtmlWebpackPlugin({
			template:__dirname + '/app/index.temp.html'
		}),
        new ExtractTextPlugin("style.css")

	]
}