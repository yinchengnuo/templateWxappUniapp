module.exports = {
	chainWebpack: config => {
		config.module.rule('vue').use('vue-loader').loader('vue-loader').tap(options => {
			const compile = options.compiler.compile
			options.compiler.compile = (template, ...args) => {
				if (args[0] && args[0].resourcePath && args[0].resourcePath.match(/^pages/)) {
					template = template.replace(/[\s\S]+?<[\d\D]+?>/, _ => `${_}
						<Notify ref="Notify" />
						<Loading ref="Loading" />
						<ADFloat ref="ADFloat" />
					`)
				}
				return compile(template, ...args)
			}
			return options
		})
	}
}