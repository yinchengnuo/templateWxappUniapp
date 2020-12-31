module.exports = (event, context, config = {}) => {
	// config 这里只配置了 prefix ，如有需要可自行拓展
	const fix = path => { // 判断 path 是否匹配
		if (config.prefix) { // 如果有路由前缀
			return event.path === config.prefix + path.replace(/\/$/g, '') // 就进行拼接
		} else { // 否则
			return event.path === path // 
		}
	}
	let __promise = null // 响应拦截器状态
	let __responseIntercepting = false // 响应拦截器是否正在工作状态，防止在响应拦截器给 router 赋值 response 爆栈
	let __response = null // 数据劫持 response 中转对象
	let __route // 全局 route 对象，用于请求拦截器和相应拦截器之间传参
	let __responseByRequest = false // router 对象 response 对象是否由请求拦截器赋予
	const router = {
		response: null, // 网络请求响应对象 response
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
						__responseByRequest = Boolean(router.response) // 将 router 对象 response 对象是否由请求拦截器赋予标记为 true
						__responseByRequest ? resolve() : resolve(__route) // 如果没有在请求拦截器中终止请求，返回全局 __route 对象，否则返回 undefined
					})
				}
			},
			response: {
				interceptors: [], // 相应拦截器集合
				use(fun, err) { this.interceptors.push(fun) }, // 注册拦截器
				async intercept(response, route) { // 执行拦截器
					return new Promise(async resolve => { // 返回 promise 对象
						for (let i = 0; i < this.interceptors.length; i ++) { // 遍历执行拦截器
							await this.interceptors[i](response, route) // 将 route 传入拦截器函数
						}
						resolve(response) // 返回响应拦截器对请求响应结果的处理
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
			if (fix(path) && event.httpMethod === 'POST') { // 如果是 POST 请求且路由匹配
				try{
					event.__data = JSON.parse(event.body || "{}") // 尝试序列化 json 请求体
				} catch (e) {
					event.__datadata = event.body // 序列化失败直接返回
				}
				await callback({ data: event.__data, params: event.queryStringParameters }, event.headers) // 执行业务逻辑
			}
		}
		// 更多请求 method 自行拓展
	}
	
	Object.defineProperty(router, 'response', {
		get() {
			return __response
		},
		async set(response) {
			// 这里可以根据 __responseByRequest 判断是在请求拦截器中被赋值，还是在业务逻辑处理结束被赋值，进而决定是否被响应拦截，这里作者采用的是全部拦截
			if (__responseIntercepting) { // 当响应拦截器正在执行，表示在响应拦截器中赋值了 response
				__response = response // 响应拦截器处理后的 response 对象赋给 router
			} else { // 当响应拦截器没有执行
				this.__responseIntercepting = true // 标记正在执行
				// __promise = new Promise(async resolve => {
				// 	const responseIntercepted = await router.interceptors.response.intercept(response, __route) // 执行响应拦截器
				// 	if (!__response) { // 如果 __response 为空，表示没有响应拦截器
				// 		__response = responseIntercepted // 将 response 对象赋给 router
				// 	}
				// 	resolve(__response)
				// })
				const responseIntercepted = await router.interceptors.response.intercept(response, __route) // 执行响应拦截器
				if (!__response) { // 如果 __response 为空，表示没有响应拦截器
					__response = responseIntercepted // 将 response 对象赋给 router
				}
			}
		}
	})
	return router
}
