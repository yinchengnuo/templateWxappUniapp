const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				'Vue': ['vue', 'default'],
				'G': [path.resolve(path.join(__dirname, 'G')), 'default'],
			}),
			new webpack.ProgressPlugin(percentage => {
				// percentage === 1 ? console.log('编译完成') : console.log(`编译进度：${(percentage * 100).toFixed(2)}%`)
			})
		]
	},
	chainWebpack: config => {
		config.module.rule('vue').use('vue-loader').loader('vue-loader').tap(options => {
			const compile = options.compiler.compile
			options.compiler.compile = (template, info) => {
				if (info.resourcePath.match(/^pages/)) {
					template = template.trim()
					template = template.replace(/^<[\d\D]+?>/g, _ => `${_}
						<custom-interactive ref="custom-interactive" style="position: fixed; z-index: 123;" />
					`)
				}
				return compile(template, info)
			}
			return options
		})
	}
}
