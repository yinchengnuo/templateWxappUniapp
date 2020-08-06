export default function ({ baseURL, timeout = 56 * 1000, header: headers, statusCode = [200, 401] }) {
	return {
		get(url, data, header, ...args) { return this.request('GET', url, data, { ...header, ...headers }, ...args) },
		post(url, data, header, ...args) { return this.request('POST', url, data, { ...header, ...headers }, ...args) },
		put(url, data, header, ...args) { return this.request('PUT', url, data, { ...header, ...headers }, ...args) },
		delete(url, data, header, ...args) { return this.request('DELETE', url, data, { ...header, ...headers }, ...args) },
		connect(url, data, header, ...args) { return this.request('CONNECT', url, data, { ...header, ...headers }, ...args) },
		head(url, data, header, ...args) { return this.request('HEAD', url, data, { ...header, ...headers }, ...args) },
		options(url, data, header, ...args) { return this.request('OPTIONS', url, data, { ...header, ...headers }, ...args) },
		reace(url, data, header, ...args) { return this.request('TRACE', url, data, { ...header, ...headers }, ...args) },
		uploadFile(url, data, header, ...args) { return this.file('uploadFile', url, data || {}, { ...header, ...headers }, ...args) },
		downloadFile(url, data, header, ...args) { return this.file('downloadFile', url, data || {}, { ...header, ...headers }, ...args) },
		onerror: () => {}, // 请求错误钩子函数集合
		file(method, url, data, header, reqIntercept, resIntercept) {
			let timer, // timer 检测超时定时器
				requestTask, // requestTask 网络请求 task 对象
				aborted = false, // aborted 请求是否已被取消
				overtime = false, // overtime 请求是否超时
				abort = () => { // abort 取消请求方法
					aborted = true // 将请求状态标记为已取消
					requestTask ? requestTask.abort() : '' // 执行取消请求方法
				},
				progressUpdateHandle,
				onProgressUpdate = e => progressUpdateHandle = e // progressUpdateHandle 监听上传进度变化回调，onProgressUpdate 监听上传进度变化方法
			return new Proxy(new Promise((resolve, reject) => { // 返回经过 Proxy 后的 Promise 对象使其可以监听到是否调用 abort 和 onProgressUpdate 方法
				this.interceptors.request.intercept({ header: header || {}, body: data.formData || {} }, method, url, data, reqIntercept).then(async ({ header, body, cancel }) => { // 等待请求拦截器里的方法执行完
					if (aborted || cancel) { // 如果请求已被取消,停止执行,返回 reject
						await this.onerror(method, url, data, '网络请求失败：主动取消')
						return reject('网络请求失败：主动取消')
					}
					requestTask = uni[method]({
						url: url[0] === '/' ? baseURL + url : url,
						name: data.name,
						header,
						filePath: data.filePath,
						formData: body,
					    success: async res => {
							clearTimeout(timer)
							!statusCode.includes(res.statusCode) ? await this.onerror(method, url, data, `网络请求异常：服务器响应异常：状态码：${res.statusCode}`) : '',
							this.interceptors.response.intercept(statusCode.includes(res.statusCode) ? resolve : reject, {
								success: statusCode.includes(res.statusCode), ...res,
							}, method, url, data, reject, resIntercept) // 执行响应拦截器
					    },
						fail: async res => {
							clearTimeout(timer)
							!overtime && await this.onerror(method, url, data, aborted ? '网络请求失败：主动取消' : '网络请求失败：（URL无效|无网络|DNS解析失败）')
							aborted ? reject('网络请求失败：主动取消') : reject('网络请求失败：（URL无效|无网络|DNS解析失败）')
						}
					})
					requestTask.onProgressUpdate(progressUpdateHandle) // 监听下载进度变化
					timer = setTimeout(async () => { // 请求超时执行方法
						overtime = true // 将状态标记为超时，不会被 fail 中的 onerror 重复执行
						requestTask.abort() // 执行取消请求方法
						await this.onerror(method, url, data, '网络请求失败：超时取消')
						reject('网络请求时间超时') // reject 原因
					}, timeout) // 设定检测超时定时器
				})
			}), { get: (target, prop) => {
				if (prop === 'abort') {
					return abort
				} else {
					if (Reflect.get(target, prop) && Reflect.get(target, prop).bind) {
						return Reflect.get(target, prop).bind(target)
					} else {
						return Reflect.get(target, prop)
					}
				}
			} }) // 如果调用 cancel 方法,返回 _watcher.cancel 方法
		},
		request(method, url, data, header, reqIntercept, resIntercept) {
			let timer, // timer 检测超时定时器
				requestTask, // requestTask 网络请求 task 对象
				aborted = false, // aborted 请求是否已被取消
				overtime = false, // overtime 请求是否超时
				abort = () => { // timer 检测超时定时器，requestTask 网络请求 task 对象，aborted 请求是否已被取消，abort 取消请求方法
					aborted = true // 将请求状态标记为已取消
					requestTask ? requestTask.abort() : '' // 执行取消请求方法
				}
			return new Proxy(new Promise((resolve, reject) => { // 返回经过 Proxy 后的 Promise 对象使其可以监听到是否调用 abort 方法
				this.interceptors.request.intercept({ header: header || {}, body: data || {} }, method, url, data, reqIntercept).then(async ({ header, body: data, cancel }) => { // 等待请求拦截器里的方法执行完
					if (aborted || cancel) { // 如果请求已被取消,停止执行,返回 reject
						await this.onerror(method, url, data, '网络请求失败：主动取消')
						return reject('网络请求失败：主动取消')
					}
					requestTask = uni.request({
					    url: url[0] === '/' ? baseURL + url : url,
					    data, method, header,
					    success: async res => { // 网络请求成功
							clearTimeout(timer) // 清除检测超时定时器
							!statusCode.includes(res.statusCode) ? await this.onerror(method, url, data, `网络请求异常：服务器响应异常：状态码：${res.statusCode}`) : '' 
							this.interceptors.response.intercept(statusCode.includes(res.statusCode) ? resolve : reject, {
								success: statusCode.includes(res.statusCode), ...res,
							}, method, url, data, reject, resIntercept) // 执行响应拦截器
					    },
						fail: async res => { // 网络请求失败
							clearTimeout(timer) // 清除检测超时定时器
							!overtime && await this.onerror(method, url, data, aborted ? '网络请求失败：主动取消' : '网络请求失败：（URL无效|无网络|DNS解析失败）')
							aborted ? reject('网络请求失败：主动取消') : reject('网络请求失败：（URL无效|无网络|DNS解析失败）')
						}
					})
					timer = setTimeout(async () => { // 请求超时执行方法
						overtime = true // 将状态标记为超时，不会被 fail 中的 onerror 重复执行
						requestTask.abort() // 执行取消请求方法
						await this.onerror(method, url, data, '网络请求失败：超时取消')
						reject('网络请求时间超时') // reject 原因
					}, timeout  || 12345) // 设定检测超时定时器
				})
			}), { 
				get: (target, prop) => {
					if (prop === 'abort') {
						return abort
					} else {
						if (Reflect.get(target, prop) && Reflect.get(target, prop).bind) {
							return Reflect.get(target, prop).bind(target)
						} else {
							return Reflect.get(target, prop)
						}
					}
				}
			}) // 如果调用 abort 方法,返回 abort 方法
		},
		interceptors: { // 拦截器
			request: {
				interceptors: [],
				use(fun, err) { this.interceptors.push(fun) },
				async intercept(config, method, url, data, reqIntercept) {
					if (!reqIntercept) { // 如果请求允许被拦截
						for (let i = 0; i < this.interceptors.length; i ++) {
							config = await this.interceptors[i](config, method, url, data)
						}
					}
					return config
				}
			},
			response: {
				interceptors: [],
				use(fun, err) { this.interceptors.push(fun) },
				async intercept(STATUS, response, method, url, data, reject, resIntercept) {
					try{
						if (!resIntercept) { // 如果请求允许被拦截
							for (let i = 0; i < this.interceptors.length; i ++) {
								response = await this.interceptors[i](response, method, url, data)
							}
						}
						if (response.success) {
							return STATUS(typeof response.data === 'string' ? JSON.parse(response.data) : response.data)
						} else {
							delete response.success
							return STATUS(response, method, url, data)
						}
					}catch(e){
						reject(e)
					}
				}
			}
		}
	}
}