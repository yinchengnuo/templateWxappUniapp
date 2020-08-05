const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

function getFilePathList(filePath) {
	const result = []
	function finder(filePath) {
		fs.readdirSync(filePath).forEach(val => {
			const dirFilePath = path.join(filePath, val)
			const stats = fs.statSync(dirFilePath)
			stats.isDirectory() && finder(dirFilePath)
			stats.isFile() && result.push(dirFilePath)
		})
	}
	finder(filePath)
	return result.filter(e => e.match(/wxss$/g))
}

module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				'G': [path.resolve(path.join(__dirname, 'G')), 'default']
			}),
			new webpack.ProgressPlugin(percentage => {
				console.log(`编译进度：${(percentage * 100).toFixed(2)}%`)
				if (percentage === 1) {
					const env = process.env.NODE_ENV === 'development' ? 'dev' : 'build'
					const mainWxssPath = path.join(__dirname, `unpackage/dist/${env}/mp-weixin/common/main.wxss`)
					let mainWxss = (fs.readFileSync(mainWxssPath)).toString()
					const pageWxssPaths = getFilePathList(path.join(__dirname, `unpackage/dist/${env}/mp-weixin/pages`))
					pageWxssPaths.forEach(e => mainWxss = mainWxss.replace((fs.readFileSync(e)).toString(), ''))
					fs.writeFileSync(mainWxssPath, mainWxss)
					console.log('编译完成')
				}
			})
		]
	}
}
