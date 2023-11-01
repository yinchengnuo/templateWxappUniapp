import Vue from 'vue'

export default {
	namespaced: true,
	state: {
		openid: ''
	},
	mutations: {
		SET_USER_INFO(state, payload) {
			uni.setStorageSync('openid', payload.openid)
			uni.setStorageSync('openid_time', Date.now())
			Object.keys(payload).forEach(key => {
				Vue.prototype.$set(state, key, payload[key])
			})
			setTimeout(() => uni.$emit('LOGON'))
		}
	},
	actions: {
		login({
			state: {
				openid
			},
			commit
		}) {
			if (!openid) {
				uni.login().then(({
					code
				}) => {
					Vue.prototype.$loading()
					Vue.prototype.$('/login', {
						code
					}).then((data) => {
						commit('SET_USER_INFO', data)
					}).finally(() => Vue.prototype.$loaded())
				})
			}

		}
	}
}