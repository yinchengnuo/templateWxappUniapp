module.exports = (event, context, config) => {
	// config 这里只配置了 prefix ，如有需要可自行拓展
	const fix = path => { // 判断 path 是否匹配
		if (config.prefix) { // 如果有路由前缀
			return event.path === config.prefix + path.replace(/\/$/g, '') // 就进行拼接
		} else { // 否则
			return event.path === path // 
		}
	} 
	return new proxy({
		interceptors: {
			request: {
				interceptors: [],
				use(fun, err) { this.interceptors.push(fun) },
				async intercept(config, method, url, data, reqIntercept) {
					
				}
			},
			response: {
				interceptors: [],
				use(fun, err) { this.interceptors.push(fun) },
				async intercept(STATUS, response, method, url, data, reject, resIntercept) {
					
				}
			}
		},
		async get(path, callback) { // get 方法相关处理
			if (fix(path) && event.httpMethod === 'GET') { // 如果是 GET 请求且路由匹配
				await callback({ params: event.queryStringParameters }, event.headers) // 执行业务逻辑
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
	}, {
		
	})
}
