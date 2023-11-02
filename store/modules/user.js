import Vue from 'vue'

export default {
	namespaced: true,
	state: {
		openid: ''
	},
	mutations: {
		SET_USER_INFO(state, payload) {
			uni.setStorageSync('openid', payload.openid)
			Object.keys(payload).forEach(key => {
				Vue.prototype.$set(state, key, payload[key])
			})
			setTimeout(() => uni.$emit('LOGON'))
		}
	},
	actions: {
		async login({
			state: {
				openid
			},
			commit
		}) {
			if (!openid) {
				console.log((await uni.getPushClientId()).cid)
				uni.onPushMessage((res) => {
					console.log(res)
				})
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