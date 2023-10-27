import Vue from 'vue'

export default async (url = '/', data = {}, config = {}) => {
	if (!Vue.prototype.$store.state.user.openid && url !== '/login') {
		await new Promise(resolve => uni.$once('LOGON', resolve))
	}
	return new Promise((resolve, reject) => {
		uni.request({
			data,
			method: 'POST',
			url: url.startsWith('http') ? url :
				'https://fc-mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.next.bspapp.com/mp/toolbox365' +
				url,
			...config,
			header: {
				...(config.header || {}),
				openid: Vue.prototype.$store.state.user.openid
			},
			success({
				data
			}) {
				if (data) {
					if (data.success) {
						resolve(data.result)
					} else {
						const message = data.mesage || (data.error ?
							`${data.error.code}: ${data.error.message}` : '网络出问题了，请稍后重试')
						Vue.prototype.$toast(message)
						reject(message)
					}
				} else {
					Vue.prototype.$toast('网络出问题了，请稍后重试')
					reject('网络出问题了，请稍后重试')
				}
			},
			fail() {
				Vue.prototype.$toast('网络出问题了，请稍后重试')
				reject('网络出问题了，请稍后重试')
			}
		})
	})
}