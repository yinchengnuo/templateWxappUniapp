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
		onerror: [],
		overtime: [],
		request(method, url, data) {
			let timer, requestTask, _watcher = { cancelHandle: null, cancel: () => _watcher.cancelHandle() }
			return new Proxy(new MyPromise((resolve, reject) => {
				requestTask = uni.request({
				    url: url[0] === '/' ? baseURL + url : url,
				    data,
					method,
					header: { ...this.interceptors.request.intercept({ headers: headers || {} }, method, url, data).headers },
				    success: res => {
						clearTimeout(timer)
						res.statusCode === 200 ? resolve(this.interceptors.response.intercept(res, method, url, data)) : reject(this.interceptors.response.intercept(res, method, url, data))
				    },
					fail: res => {
						clearTimeout(timer)
						_watcher.abort ? reject('网络请求失败：主动取消') : reject('网络请求失败：（URL无效|无网络|DNS解析失败|请求时间过长）')
						this.onerror.forEach(e => e(method, url, data, _watcher.abort ? '网络请求失败：主动取消' : '网络请求失败：（URL无效|无网络|DNS解析失败|请求时间过长）'))
					}
				})
				timer = setTimeout(() => {
					requestTask.abort()
					reject('网络请求时间超时')
					this.overtime.forEach(e => e(method, url, data))
				}, timeout)
				_watcher.cancelHandle = () => {
					_watcher.abort= true
					requestTask.abort()
				}
			}), { get: (target, prop) => prop === 'cancel' ? _watcher.cancel : Reflect.get(target, prop) })
		},
		interceptors: {
			request: {
				interceptors: [],
				use(fun) { this.interceptors.push(fun) },
				intercept(config, method, url, data) {
					this.interceptors.forEach(fun => config = fun(config, method, url, data))
					return config
				}
			},
			response: {
				interceptors: [],
				use(fun) { this.interceptors.push(fun) },
				intercept(response, method, url, data) {
					this.interceptors.forEach(fun => response = fun(response, method, url, data))
					return response.data
				}
			}
		}
	}, { set: (target, prop, value) => target[prop] ? target[prop].push(value) : true })
}