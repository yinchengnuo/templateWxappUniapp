import Vue from 'vue'

import $ from '@/utils/request.js'
import $store from '@/store/index.js'

Vue.prototype.$ = $
Vue.prototype.$app = getApp
Vue.prototype.$store = $store

Vue.prototype.$toast = (title, conf = {}) => {
	title = title ? title : '请输入提示信息'
	title = title.toString()
	setTimeout(() => {
		uni.showToast({
			title,
			mask: false,
			icon: 'none',
			duration: 3210,
			...conf
		})
	})
}
Vue.prototype.$toasted = () => {
	uni.hideToast()
}

Vue.prototype.$loading = function() {
	if (this.$refs && this.$refs.Loading) {
		return this.$refs.Loading.loading()
	}
	if (this.$parent && this.$parent.$refs && this.$parent.$refs.Loading) {
		return this.$parent.$refs.Loading.loading()
	}
	uni.showLoading()
}
Vue.prototype.$loaded = function() {
	if (this.$refs && this.$refs.Loading) {
		return this.$refs.Loading.loaded()
	}
	if (this.$parent && this.$parent.$refs && this.$parent.$refs.Loading) {
		return this.$parent.$refs.Loading.loaded()
	}
	uni.hideLoading()
}

Vue.prototype.$copy = (data) => {
	data = data.toString()
	uni.setClipboardData({
		data
	})
}

Vue.prototype.$call = (phoneNumber) => {
	Vue.prototype.$loading()
	uni.makePhoneCall({
		phoneNumber,
		complete: () => Vue.prototype.$loaded()
	})
}

Vue.prototype.$preview = async (src) => {
	const urls = typeof src === 'string' ? [src] : src
	const filePath = async src => src.match(/^http/) ? src : (await uni.compressImage({
		src,
		quality: 100
	}))[1].tempFilePath
	for (let i = 0; i < urls.length; i++) {
		urls[i] = await filePath(urls[i])
	}
	uni.previewImage({
		urls
	})
}

Vue.prototype.$offset = function(selector) {
	if (!(this instanceof Vue)) throw new Error('必须在组件中执行')
	return new Promise((resolve, reject) => {
		uni.createSelectorQuery().in(this).select(`#${selector}`).boundingClientRect(data => {
			data ? resolve(data) : reject('元素不存在')
		}).exec()
	})
}

Vue.prototype.$clone = object => {
	if (!(typeof object === 'object')) return object
	return JSON.parse(JSON.stringify(object))
}

Vue.prototype.$debounce = function(func, delay = 666) {
	let timer;

	return function() {
		const context = this;
		const args = arguments;

		clearTimeout(timer);

		timer = setTimeout(() => {
			func.apply(context, args);
		}, delay);
	};
}