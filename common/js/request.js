import Vue from 'vue'
import $store from '@/store'
import uni_request from './uni_request.js'

const host = 'https://yinchengnuo.com'
const port = 443
const url = '/dwbsapp'

const request = uni_request({
	timeout: 12345,
	baseURL: `${host}:${port}${url}`,
	headers: { Authorization: 'Bearer ' + $store.state.app.token }
})

request.interceptors.request.use(async config => {
	await new Promise(resolve => setTimeout(() => resolve(), 3456))
	return config
})

request.interceptors.response.use((response, ...args) => { // 拦截器
	uni.$emit('HIDELOADING') // 隐藏加载
	uni.stopPullDownRefresh() // 停止下拉刷新
	if (response.statusCode === 200) {
		// Vue.prototype.$toast(`${response.statusCode}:${args[1]}`)
	} else { // 服务器响应不为 200 的统一处理方法
		console.log(134)
	}
	return response
})

request.interceptors.response.use(async (response, ...args) => { // 拦截器
	await new Promise(resolve => setTimeout(() => resolve(), 3456))
	return response
})

request.onerror = (...args) => { // 请求失败统一处理方法
	uni.$emit('HIDELOADING') // 隐藏加载
	uni.stopPullDownRefresh() // 停止下拉刷新
	try{
		Vue.prototype.$toast(`请求错误,请检查您的网络环境::URL无效|无网络|DNS解析失败|请求时间过长:${args[1]}`) // 弹出文字提示
	}catch(e){}
}

export default request