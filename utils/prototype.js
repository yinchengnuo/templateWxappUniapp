import Vue from 'vue'

import $ from '@/utils/request.js'
import $store from '@/store/index.js'

Vue.prototype.$ = $
Vue.prototype.$app = getApp
Vue.prototype.$store = $store

Vue.prototype.$toast = (title, conf = {}) => {
	title = title + ''
	setTimeout(() => {
		uni.showToast({
			title,
			mask: false,
			icon: 'none',
			duration: 3456,
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

Vue.prototype.$errorImage = function() {
	this.$loaded.call(this)
	this.$toast.call(this, '哎呀！加载失败了...请稍后再试呢，先看看美女叭...')
	this.src = ''
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

Vue.prototype.$preview = async (url, current) => {
	const urls = typeof url === 'string' ? [url] : url
	uni.previewImage({
		urls,
		current
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