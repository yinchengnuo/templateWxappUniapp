const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
	chainWebpack: config => {
		config.module.rule('vue').use('vue-loader').loader('vue-loader').tap(options => {
			const compile = options.compiler.compile
			options.compiler.compile = (template, ...args) => {
				if (args[0].resourcePath.match(/^pages/)) {
					template = template.replace(/[\s\S]+?<[\d\D]+?>/, _ => `${_}
						<Loading ref="Loading" />
					`)
				}
				return compile(template, ...args)
			}
			return options
		})
	}
}