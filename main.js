import Vue from 'vue'
import App from './App'
import $router, { $route } from '@/common/js/uni_router.js'

Vue.prototype.$route = $route // 当前路由对象，保存路由当前信息
Vue.prototype.$router = $router // 路由对象，保存了实例方法

Vue.prototype.$offset = function (selector) { // 获取元素宽高位置信息
	return new Promise((resolve, reject) => {
		uni.createSelectorQuery().in(this).select(selector).boundingClientRect(data => {
			data ? data.x = data.left + data.width / 2 : ''
			data ? data.y = data.top + data.height / 2 : ''
			data ? resolve(data) : reject('元素不存在')
		}).exec()
	})
}

import CustomNav from './components/custom-nav.vue' //自定义头部导航栏交互组件
Vue.component('custom-nav', CustomNav) //注册自定义头部导航栏

Vue.config.productionTip = false
;( new Vue( { ...App } ) ).$mount()
