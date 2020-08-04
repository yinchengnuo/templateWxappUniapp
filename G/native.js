import Vue from 'vue'

export default G => ({
	$copy(data, title, icon) { // 复制到剪切板方法
		data = data.toString()
		uni.setClipboardData({
			data,
			success() {
				if (title) {
					G.$toasted()
					G.$toast(title, icon)
				}
			}
		})
	},
	$call(phoneNumber, uloading) { // 调起拨打电话方法
		!uloading && G.$loading()
		uni.makePhoneCall({
			phoneNumber,
			complete: () => !uloading && G.$loaded()
		})
	},
	async $preview(src) {
		const urls = typeof src === 'string' ? [src] : src
		const filePath = async src => src.match(/^http/) ? src : (await uni.compressImage({ src, quality: 100 }))[1].tempFilePath
		for (let i = 0; i < urls.length; i++) {
			urls[i] = await filePath(urls[i])
		}
		uni.previewImage({ urls })
	},
	$offset(selector) { // 获取元素尺寸方法
		if (!(this instanceof Vue)) return
		return new Promise((resolve, reject) => {
			uni.createSelectorQuery().in(this).select(selector).boundingClientRect(data => {
				data ? resolve(data) : reject('元素不存在')
			}).exec()
		})
	}
})
