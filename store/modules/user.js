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
			setTimeout(() => {
				uni.$emit('LOGON')
				Vue.prototype.$set(state, 'LOGON', true)
			})
		}
	},
	actions: {
		async login(Store, payload = {}) {
			Vue.prototype.$loading()
			Promise.all([uni.getPushClientId(), uni.login()]).then(([{
				cid
			}, {
				code
			}]) => {
				Vue.prototype.$('/login', {
					cid,
					code,
					openid: payload.openid
				}).then((data) => {
					Store.commit('SET_USER_INFO', data)
				}).finally(() => {
					Vue.prototype.$loaded()
				})
			}).catch((e) => {
				Vue.prototype.$loaded()
				Vue.prototype.$toast(e.message)
			})
		},
		async getCityWeather(Store) {
			if (!Store.state.LOGON) {
				await new Promise(resolve => uni.$on('LOGON', resolve))
			}
			uni.request({
				url: "https://api.oioweb.cn/api/weather/GetWeather"
			}).then(({
				data: {
					result: {
						city,
						condition: {
							tips
						}
					}
				}
			}) => {
				Store.state.city = city.city_name
				Store.state.country = city.country
				Store.state.province = city.economize
				Vue.prototype.$('/setting', {
					city: Store.state.city,
					country: Store.state.country,
					province: Store.state.province
				}).then(data => {
					Store.commit('SET_USER_INFO', data)
				})
				uni.request({
					url: "https://api.lolimi.cn/API/weather/?city=" + Store.state.city
				}).then(({
					data: {
						data
					}
				}) => {
					Vue.prototype.$set(Store.state, 'weather', {
						...data,
						living: [{
							tips
						}, ...data.living]
					})
				})
			})
		}
	}
}