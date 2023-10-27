import Vue from 'vue'

export default {
	namespaced: true,
	state: {
		openid: uni.getStorageSync('openid'),
		openid_time: uni.getStorageSync('openid_time'),
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
				openid,
				openid_time
			},
			commit
		}) {
			if (!(openid && openid_time && ((Date.now() - openid_time) < (1000 * 60 * 60 * 24)))) {
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