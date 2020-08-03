import $store from '@/store'
import uni_request from '@/utils/tools/uni_request.js'

let baseURL

if (process.env.NODE_ENV === 'development') {
	baseURL = 'https://yinchengnuo.com/dwbsapp'
} else {
	baseURL = 'https://yinchengnuo.com/dwbsapp'
}

const request = uni_request({
	baseURL
})

request.interceptors.request.use(async (config, ...args) => { // 请求拦截器
	// ...
	if (!$store.state.app.token) { // 如果没得 token
		// await new Promise(resolve => ))
	}
	config.header.Authorization = 'Bearer ' + $store.state.app.token // 把 token 放在请求头
	return config
})

request.interceptors.response.use(async (response, ...args) => { // 响应拦截器
	// ...
	return response
})

request.onerror = (...args) => console.log(args) // 错误监听

export default request
