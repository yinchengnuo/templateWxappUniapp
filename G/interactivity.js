export default G => ({
	$loaded() { // 停止 loading
		uni.hideLoading()
	},
	$toasted() { // 停止 toast
		uni.hideToast()
	},
	$loading(title = '加载中', mask = true) { // 显示 loading
		uni.hideLoading()
		uni.showLoading({ title, mask })
	},
	$toast(title, icon = 'none', duration = 1500, mask = false) { // 显示 toast
		if (!title) return
		title = title.toString()
		setTimeout(() => {
			uni.showToast({
				mask,
				title,
				duration,
				image: icon.includes('/') ? icon : '',
				icon: icon.includes('/') ? 'none' : icon
			})
		})
	},
	$model(...args) { // 显示 model
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
	_$loading(title = '加载中', mask = true) { // 显示 loading
		if (!(this instanceof Vue)) return
		this.$refs['custom-interactive']['_$loading']()
	},
})
