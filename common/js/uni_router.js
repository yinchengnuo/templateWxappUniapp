const modulesFiles = require.context('@/pages', true, /\.vue$/)

export const $route = { // 当前路由对象所在的 path 等信息<===!!!不一定准确!!!===>
	fullPath: modulesFiles.keys()[0].replace(/^\./, '/pages'),
	path: modulesFiles.keys()[0].replace(/\.vue$/, '').replace(/^\./, ''),
	query: {}
}

const $router = {
	route: $route, // 当前路由对象所在的 path 等信息,
	afterEach: to => {}, // 全局后置守卫
	beforeEach: (to, next) => next(), // 全局前置守卫
	routes: modulesFiles.keys().map(e => e = e.replace(/^\./, '/pages')), // 路由表
	_getFullPath(route) { // 根据传进来的路由名称获取完整的路由名称
		return new Promise((resolve, reject) => {
			const fullPath = this.routes.find(e => RegExp(route + '.vue').test(e)).replace(/\.vue$/, '')
			fullPath ? resolve(fullPath) : reject(`路由 ${ route + '.vue' } 不存在于 pages 目录中`)
		})
	},
	_formatData(query) { // 序列化路由传参
		let queryString = '?'
		Object.keys(query).forEach(e => {
			if (typeof query[e] === 'object') {
				queryString += `${e}=${JSON.stringify(query[e])}&`
			} else {
				queryString += `${e}=${query[e]}&`
			}
		})
		return queryString.length === 1 ? '' : queryString.replace(/&$/, '')
	},
	_beforeEach(path, fullPath, query) { // 处理全局前置守卫
		return new Promise(resolve => {
			this.beforeEach({ path, fullPath, query }, resolve)
		})
	},
	_next(next) { // 处理全局前置守卫 next 函数传经来的方法
		return new Promise((resolve, reject) => {
			if (typeof next === 'function') { // 当 next 为函数时, 表示重定向路由, 
				reject('在全局前置守卫 next 中重定向路由')
				Promise.resolve().then(() => next(this)) // 此处一个微任务的延迟是为了先触发重定向的reject
			} else if (next === false) { // 当 next 为 false 时, 表示取消路由
				reject('在全局前置守卫 next 中取消路由')
			} else {
				resolve()
			}
		})
	},
	pop(delta) {
		uni.navigateBack({ delta })
	},
	_routeTo(UNIAPI, path, query, notBeforeEach, notAfterEach) {
		return new Promise((resolve, reject) => {
			this._getFullPath(path).then((fullPath) => { // 检查路由是否存在于 pages 中
				const routeTo = url => { // 执行路由
					UNIAPI({ url }).then(([err]) => {
						if (err) { // 路由未在 pages.json 中注册
							reject(err.errMsg)
							return
						} else { // 跳转成功, 将路由信息赋值给 $route
							Object.assign($route, { path, fullPath, query })
							resolve($route) // 将更新后的路由对象 resolve 出去
							!notAfterEach && this.afterEach($route) // 如果没有禁止全局后置守卫拦截时, 执行全局后置守卫拦截
						}
					})
				}
				if (notBeforeEach) { // notBeforeEach 当不需要被全局前置守卫拦截时
					routeTo(`${fullPath}${this._formatData(query)}`)
				} else {
					this._beforeEach(path, fullPath, query).then((next) => { // 执行全局前置守卫,并将参数传入
						this._next(next).then(() => { // 在全局前置守卫 next 没传参
							routeTo(`${fullPath}${this._formatData(query)}`)
						}).catch(e => reject(e)) // 在全局前置守卫 next 中取消或重定向路由
					})
				}
			}).catch(e => reject(e)) // 路由不存在于 pages 中, reject
		})
	},
	// path 路由名 //  query 路由传参 // isBeforeEach 是否要被全局前置守卫拦截 // isAfterEach 是否要被全局后置守卫拦截
	push(path, query = {}, notBeforeEach, notAfterEach) {
		return this._routeTo(uni.navigateTo, path, query, notBeforeEach, notAfterEach)
	},
	replace(path, query = {}, notBeforeEach, notAfterEach) {
		return this._routeTo(uni.redirectTo, path, query, notBeforeEach, notAfterEach)
	},
	switchTab(path, query = {}, notBeforeEach, notAfterEach) {
		return this._routeTo(uni.switchTab, path, query, notBeforeEach, notAfterEach)
	},
	reLaunch(path, query = {}, notBeforeEach, notAfterEach) {
		return this._routeTo(uni.reLaunch, path, query, notBeforeEach, notAfterEach)
	}
}

Object.setPrototypeOf($route, $router) // 让 $route 继承 $router

export default $router