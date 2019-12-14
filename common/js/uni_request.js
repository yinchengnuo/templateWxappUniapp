const STATUS={PENDING:0,FULFILLED:1,REJECTED:2};class MyPromise{constructor(a){this.status=STATUS.PENDING,this.resolveData=null,this.rejectData=null,this.onFulfilledList=[],this.onRejectedList=[],this.onResolve=a=>{this.status===STATUS.PENDING&&(this.status=STATUS.FULFILLED,this.resolveData=a,this.onFulfilledList.forEach(a=>a(this.resolveData)))},this.onReject=a=>{this.status===STATUS.PENDING&&(this.status=STATUS.REJECTED,this.rejectData=a,this.onRejectedList.forEach(a=>a(this.rejectData)))},this.resolvePromise=(a,b,c)=>{if(a instanceof Promise)a.status===STATUS.PENDING?a.then(a=>{this.resolvePromise(a,b,c)},c):a.status===STATUS.FULFILLED?b(a.resolveData):c(a.rejectData);else if(null!==a&&a instanceof Object)try{let d=a.then;d instanceof Function?d.call(a,a=>{this.resolvePromise(a,b,c)},c):b(a)}catch(a){c(a)}else b(a)};try{a(this.onResolve.bind(this),this.onReject.bind(this))}catch(a){this.onReject(a)}}then(a,b){let c;return c=this.status===STATUS.PENDING?new Promise((c,d)=>{this.onFulfilledList.push(()=>{if(!(a instanceof Function))c(this.resolveData);else{let b=a(this.resolveData);this.resolvePromise(b,c,d)}}),this.onRejectedList.push(()=>{if(!(b instanceof Function))d(this.rejectData);else{let a=b(this.rejectData);this.resolvePromise(a,c,d)}})}):this.status===STATUS.FULFILLED?new Promise((b,c)=>{if(!(a instanceof Function))b(this.resolveData);else{let d=a(this.resolveData);this.resolvePromise(d,b,c)}}):new Promise((a,c)=>{if(!(b instanceof Function))c(this.rejectData);else{let d=b(this.rejectData);this.resolvePromise(d,a,c)}}),c}catch(a){a instanceof Function&&(this.status===STATUS.PENDING?this.onRejectedList.push(()=>{null!==this.rejectData&&a(this.rejectData)}):(this.status=STATUS.REJECTED)&&null!==this.rejectData&&a(this.rejectData))}}

export default function ({ baseURL, timeout, headers }) {
	return new Proxy({
		get(url, data) { return this.request('GET', url, data) },
		post(url, data) { return this.request('POST', url, data) },
		put(url, data) { return this.request('PUT', url, data) },
		delete(url, data) { return this.request('DELETE', url, data) },
		connect(url, data) { return this.request('CONNECT', url, data) },
		head(url, data) { return this.request('HEAD', url, data) },
		options(url, data) { return this.request('OPTIONS', url, data) },
		reace(url, data) { return this.request('TRACE', url, data) },
		onerror: [], // 请求错误钩子函数集合
		overtime: [], // 超时钩子函数集合
		request(method, url, data) {
			let timer, requestTask, _watcher = { abort: false, cancelHandle: null, cancel: () => _watcher.cancelHandle() }
			return new Proxy(new MyPromise((resolve, reject) => { // 返回经过 Proxy 后的 Promise 对象使其可以监听到是否调用 cancel 方法
				this.interceptors.request.intercept({ headers: headers || {} }, method, url, data).then(({ headers: header }) => { // 等待请求拦截器里的方法执行完
					if (_watcher.abort) { // 如果请求已被取消,停止执行,返回 reject
						reject('网络请求失败：主动取消')
						return
					}
					requestTask = uni.request({
					    url: url[0] === '/' ? baseURL + url : url,
					    data,
						method,
						header,
					    success: res => {
							clearTimeout(timer)
							res.statusCode === 200 ? this.interceptors.response.intercept(resolve, res, method, url, data) : this.interceptors.response.intercept(reject, res, method, url, data)
					    },
						fail: async res => {
							clearTimeout(timer)
							_watcher.abort ? reject('网络请求失败：主动取消') : reject('网络请求失败：（URL无效|无网络|DNS解析失败|请求时间过长）')
							for (let i = 0; i < this.onerror.length; i ++) {
								await this.onerror[i](method, url, data, _watcher.abort ? '网络请求失败：主动取消' : '网络请求失败：（URL无效|无网络|DNS解析失败|请求时间过长）')
							}
						}
					})
					timer = setTimeout(async () => {
						requestTask.abort()
						reject('网络请求时间超时')
						for (let i = 0; i < this.overtime.length; i ++) {
							await this.overtime[i](method, url, data)
						}
					}, timeout)
				})
				_watcher.cancelHandle = () => { // _watcher.cancel 要执行的方法
					_watcher.abort= true // 将请求标记为 已取消状态
					requestTask ? requestTask.abort() : '' // 如果 requestTask 存在就取消,不存在说明正在等待请求拦截器里的异步函数
				}
			}), { get: (target, prop) => prop === 'cancel' ? _watcher.cancel : Reflect.get(target, prop) }) // 如果调用 cancel 方法,返回 _watcher.cancel 方法
		},
		interceptors: { // 拦截器
			request: {
				interceptors: [],
				use(fun) { this.interceptors.push(fun) },
				async intercept(config, method, url, data) {
					for (let i = 0; i < this.interceptors.length; i ++) {
						config = await this.interceptors[i](config, method, url, data)
					}
					return config
				}
			},
			response: {
				interceptors: [],
				use(fun) { this.interceptors.push(fun) },
				async intercept(STATUS, response, method, url, data) {
					for (let i = 0; i < this.interceptors.length; i ++) {
						response = await this.interceptors[i](response, method, url, data)
					}
					return STATUS(response.data)
				}
			}
		}
	}, { set: (target, prop, value) => target[prop] ? target[prop].push(value) : true })
}