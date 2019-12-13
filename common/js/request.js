import Vue from 'vue'
import $store from '@/store'
import uni_request from './uni_request.js'

let isisConnected = true
// const host = 'http://192.168.0.13'
const host = 'https://yinchengnuo.com'
// const port = 80
const port = 443
const url = '/dwbsapp'
const wshost = 'ws://192.168.0.13'
// const wshost = 'ws://47.102.113.25'
const wsport = 80
// const wsport = 39000
const wsurl = '/websocket'
// const wsurl = '/'

// uni.connectSocket({ url: `${wshost}:${wsport}${wsurl}` }) // 发起 websocket 连接
// uni.onNetworkStatusChange(res => {
// 	$store.commit('app/NETWORKTYPE_CHANGE', res.networkType) // 网络类型变化监听
// 	uni.closeSocket() // 关闭已有 websocket 
// 	uni.connectSocket({ url: `${wshost}:${wsport}${wsurl}` }) // 发起 websocket 连接
// })

uni.getNetworkType({ success(res) { $store.commit('app/NETWORKTYPE_CHANGE', res.networkType) }}) // 获取网络类型

const request = uni_request({
	timeout: 12345,
	baseURL: `${host}:${port}${url}`,
	headers: { Authorization: 'Bearer ' + $store.state.app.token }
})

request.interceptors.request.use(config => {
	return config
})

request.interceptors.response.use((response, ...args) => { // 拦截器
	uni.$emit('HIDELOADING') // 隐藏加载
	uni.stopPullDownRefresh() // 停止下拉刷新
	if (response.statusCode === 200) { 
		// Vue.prototype.$toast(`${response.statusCode}:${args[1]}`)
	} else { // 服务器响应不为 200 的统一处理方法
		try{
			Vue.prototype.$toast(`${response.statusCode}:${response.data}:${args[1]}`)
		}catch(e){}
	}
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