const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.ProgressPlugin(percentage => {
				console.log(`编译进度：${(percentage * 100).toFixed(2)}%`)
				if (percentage === 1) {
					if (process.env.NODE_ENV === 'development') {
						console.log('编译完成')
					}
				}
			})
		]
	}
}
