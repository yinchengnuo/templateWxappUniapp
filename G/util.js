export default G => ({
	$clone(object) {
		if (!(typeof object === 'object')) return
		return JSON.parse(JSON.stringify(object))
	},
	$request(api, callback = () => {}, conf = {}) { // 快速网络请求
		const { uloading, endStillLoading } = conf
		return new Promise((resolve, reject) => {
			!uloading && G.$loading()
			if (api.length) {
				Promise.all(api).then(res => { // 一般用于多个 get 请求
					callback(res.map(e => e.data))
				}).finally(() => !endStillLoading && G.$loaded())
			} else {
				api.then(res => {
					if (res.code != 200) {
						reject(res)
						G.$loaded()
					} else {
						resolve(res)
						callback(res.data)
					}
				}).finally(() => !endStillLoading && G.$loaded())
			}
		})
	}
})