import Vue from 'vue'

const __proto__ = { // uni 原型对象
	Emits: { // 自定义事件名称
		'Xxx': '__$EMIT_XXX'
	},
	Storage: { // 存储命名空间
		'Xxx': '__$STORAGE_XXX'
	},
	Globals: { // 全局变量名称
		'Xxx': '__$GLOBAL_XXX'
	},
	$loaded() { // 停止 loading
		uni.hideLoading()
	},
	$toasted() { // 停止 toast
		uni.hideToast()
	},
	$loading(title = '加载中') { // 显示 loading
		uni.$loaded()
		uni.showLoading({ title, mask: true })
	},
	$toast(title, icon = 'none') { // 显示 toast
		if (!title) return
		title = title.toString()
		uni.showToast({
			title,
			image: icon.includes('/') ? icon : '',
			icon: icon.includes('/') ? 'none' : icon
		})
	},
	$model(...args) {
		const conf = args.find(e => typeof e === 'object') || {}
		return new Promise((resolve, reject) => {
			uni.showModal({
				...conf,
				title: args.length > 1 ? args[0] : '提示',
				content: args.length > 1 ? args[1] : args[0],
				success: ({
					confirm
				}) => {
					confirm ? resolve() : reject()
				}
			})
		})
	},
	$clone(object) {
		if (!(typeof object === 'object')) return
		return JSON.parse(JSON.stringify(object))
	},
	$copy(data, title, icon) { // 复制到剪切板方法
		data = data.toString()
		uni.setClipboardData({
			data,
			success() {
				if (title) {
					uni.$toasted()
					uni.$toast(title, icon)
				}
			}
		})
	},
	$call(phoneNumber, uloading) { // 调起拨打电话方法
		!uloading && uni.$loading()
		uni.makePhoneCall({
			phoneNumber,
			complete: () => !uloading && uni.$loaded()
		})
	},
	$offset(selector) { // 获取元素尺寸方法
		if (!(this instanceof Vue)) return
		return new Promise((resolve, reject) => {
			uni.createSelectorQuery().in(this).select(selector).boundingClientRect(data => {
				data ? resolve(data) : reject('元素不存在')
			}).exec()
		})
	},
	$request(api, callback = () => {}, conf = {}) { // 快速网络请求
		const { uloading, endStillLoading } = conf
		return new Promise((resolve, reject) => {
			!uloading && uni.$loading()
			if (api.length) {
				Promise.all(api).then(res => { // 一般用于多个 get 请求
					callback(res.map(e => e.data))
				}).finally(() => !endStillLoading && uni.$loaded())
			} else {
				api.then(res => {
					if (res.code != 200) {
						reject(res)
						uni.$loaded()
					} else {
						resolve(res)
						callback(res.data)
					}
				}).finally(() => !endStillLoading && uni.$loaded())
			}
		})
	}
}
	
Object.setPrototypeOf(uni, __proto__) // 将 uni 原型设置为 __proto__ 对象
Object.entries(__proto__).forEach(([key, val]) => uni[key] = val) // https://github.com/dcloudio/uni-app/issues/1971
