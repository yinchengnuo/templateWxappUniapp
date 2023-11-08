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
		async login(Store) {
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
			Promise.all([uni.request({
				url: "https://api.oioweb.cn/api/weather/GetWeather"
			}), uni.request({
				url: "https://api.vvhan.com/api/weather"
			})]).then(([{
				data: {
					result: {
						city,
						condition: {
							tips
						}
					}
				}
			}, {
				data: {
					info
				}
			}]) => {
				Store.state.city = city.city_name
				Store.state.country = city.country
				Store.state.province = city.economize
				Vue.prototype.$('/setting', {
					city: Store.state.city,
					country: Store.state.country,
					province: Store.state.province
				})
				info.tips = [tips, info.tip]
				Vue.prototype.$set(Store.state, 'weather', info)
			})
		}
	}
}