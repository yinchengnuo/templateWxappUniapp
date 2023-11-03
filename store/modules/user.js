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
			commit
		}) {
			Vue.prototype.$loading()
			Promise.all([uni.getPushClientId(), uni.login()]).then(([{
				cid
			}, {
				code
			}]) => {
				Vue.prototype.$('/login', {
					cid,
					code
				}).then((data) => {
					commit('SET_USER_INFO', data)
				}).finally(() => {
					Vue.prototype.$loaded()
				})
			}).catch((e) => {
				Vue.prototype.$loaded()
				Vue.prototype.$toast(e.message)
			})
		}
	}
}