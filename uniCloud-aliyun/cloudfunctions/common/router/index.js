module.exports = (event, context, config = {}) => {
	// config 这里只配置了 prefix ，如有需要可自行拓展
	const fix = path => { // 判断 path 是否匹配
		if (config.prefix) { // 如果有路由前缀
			return event.path === config.prefix + path.replace(/\/$/g, '') // 就进行拼接
		} else { // 否则
			return event.path === path // 直接比较
		}
	}
	
	let _response = null // 网络请求响应对象 response
	const router = {
		interceptors: {
			request: {
				interceptors: [], // 请求拦截器集合
				use(fun, err) { this.interceptors.push(fun) }, // 注册拦截器
				async intercept(route) { // 执行拦截器
					return new Promise(async resolve => { // 返回 promise 对象
						__route = route // 将 route 对象赋值给对象 __route 以用于响应拦截器
						for (let i = 0; i < this.interceptors.length; i ++) { // 遍历执行拦截器
							await this.interceptors[i](__route) // 将 __route 传入拦截器函数
						}
						Boolean(router.response) ? resolve() : resolve(__route) // 如果没有在请求拦截器中终止请求，返回全局 __route 对象，否则返回 undefined
					})
				}
			}
		},
		async get(path, callback) { // get 方法相关处理
			const route = await this.interceptors.request.intercept({ params: event.queryStringParameters, interceptor: {}}) // 执行请求拦截器
			if (route && fix(path) && event.httpMethod === 'GET') { // 如果 route 对象不为空（没有被请求拦截器取消）、是 GET 请求且路由匹配
				await callback(route, event.headers) // 执行业务逻辑
			}
		},
		async post(path, callback) { // post 方法相关处理
			const route = await this.interceptors.request.intercept({ params: event.queryStringParameters, data: {}, interceptor: {}}) // 执行请求拦截器
			if (route && fix(path) && event.httpMethod === 'POST') { // 如果是 POST 请求且路由匹配
				try{
					route.data = { ...route.data, ...JSON.parse(event.body || "{}") } // 尝试序列化 json 请求体
				} catch (e) {
					route.daa = event.body // 序列化失败直接返回
				}
				await callback(route, event.headers) // 执行业务逻辑
			}
		}
		// 更多请求 method 自行拓展
	}
	
	Object.defineProperty(router, 'response', {
		get() {
			return _response
		},
		set(val) {
			if (val) {
				_response = val
			}
		}
	})
	
	return router
}
