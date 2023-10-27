import Vue from 'vue'

Vue.mixin({
	onLoad() {
		const types = ["实用工具", "每日随机", "数据集合"]
		const [type, name] = this.__route__.replace(/^(.|)pages\//, '').split('/')
		types.includes(type) && Vue.prototype.$('/record', {
			name
		}).then((data) => {
			data && Vue.prototype.$store.commit('app/UPDATE_FUNCTION', data)
		})
	}
})