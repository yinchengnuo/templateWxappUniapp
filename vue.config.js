const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				'G': [path.resolve(path.join(__dirname, 'G')), 'default']
			}),
			new webpack.ProgressPlugin(percentage => {
				percentage === 1 ? console.log('编译完成') : console.log(`编译进度：${(percentage * 100).toFixed(2)}%`)
			})
		]
	}
}
