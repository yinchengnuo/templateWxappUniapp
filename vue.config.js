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
						// try {
						// 	const cssPath =  path.join(__dirname, `unpackage/dist/dev/mp-weixin/common/main.wxss`)
						// 	const cssList = (fs.readFileSync(cssPath)).toString().split('/*注释勿删*/')
						// 	fs.writeFileSync(cssPath, cssList[0] + (cssList[1] ? cssList[1] : ''))
						// 	console.log('编译完成')
						// } catch (e) {
						// 	console.log('编译完成')
						// }
						console.log('编译完成')
					}
				}
			})
		]
	}
}
