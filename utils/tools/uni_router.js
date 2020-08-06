import Vue from 'vue'

export const route = { // 当前路由对象所在的 path 等信息。默认为首页
	fullPath: '/pages/index/index',
	path: '/index',
	type: 'push',
	query: {}
}

let _$ROUTING = false // 标记路由状态 防止连点
let onchange = () => {} // 路由变化监听函数
const _$UNI_ACTIVED_PAGE_ROUTES = [] // 页面数据缓存
let _$UNI_ROUTER_PUSH_POP_FUN = () => {} // pushPop resolve 函数
const _c = obj => JSON.parse(JSON.stringify(obj)) // 简易克隆方法

Vue.mixin({
	onShow() {
		_$ROUTING = false
		const pages = getCurrentPages().map(e => `/${e.route}`).reverse() // 获取页面栈
		if (pages[0]) { // 当页面栈不为空时执行
			let old = _c(route) // 保存旧路由
			const back = pages[0] != route.fullPath
			const now = _$UNI_ACTIVED_PAGE_ROUTES.find(e => e.fullPath == pages[0]) // 如果路由没有被缓存就缓存
			now ? Object.assign(route, now) : _$UNI_ACTIVED_PAGE_ROUTES.push(_c(route)) // 已缓存就用已缓存的更新 route 对象
			_$UNI_ACTIVED_PAGE_ROUTES.splice(pages.length, _$UNI_ACTIVED_PAGE_ROUTES.length) // 最后清除无效缓存
			if (back) { // 当当前路由与 route 对象不符时，表示路由发生返回
				if (pages.length === 1) { // 如果页面栈只有一个页面，表示正处于 tabbar 页面
					Object.assign(route, { fullPath: pages[0], path: `/${pages[0].split('/')[3]}`, query: {}, type: "switchTab" })
				}
				onchange(route, old)
			}
		}
	}
})

const router = new Proxy({
	route: route, // 当前路由对象所在的 path 等信息,
	afterEach: to => {}, // 全局后置守卫
	beforeEach: (to, next) => next(), // 全局前置守卫
	_getFullPath(route) { // 根据传进来的路由名称获取完整的路由名称
		return new Promise((resolve, reject) => {
			const split = route.split('/')
			const name = `/${split[split.length - 1]}`
			resolve(`/pages${route}${name}`)
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
	_beforeEach(path, fullPath, query, type) { // 处理全局前置守卫
		return new Promise(resolve => {
			this.beforeEach({ path, fullPath, query, type }, resolve)
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
	_routeTo(UNIAPI, type, path, query, notBeforeEach, notAfterEach) {
		return new Promise((resolve, reject) => {
			if (_$ROUTING) {
				reject('路由进行中')
				return
			}
			this._getFullPath(path).then((fullPath) => { // 检查路由是否存在于 pages 中
				const routeTo = url => { // 执行路由
					const temp = _c(route) // 将 route 缓存起来
					Object.assign(route, { path, fullPath, query, type }) // 在路由开始执行前就将 query 放入 route, 防止少数情况出项的 onLoad 执行时，query 还没有合并
					_$ROUTING = true
					UNIAPI({ url }).then(([err]) => {
						if (err) { // 路由未在 pages.json 中注册
							Object.assign(route, temp) // 如果路由跳转失败，就将 route 恢复
							_$ROUTING = false
							reject(err)
							return
						} else { // 跳转成功, 将路由信息赋值给 route
							resolve(route) // 将更新后的路由对象 resolve 出去
							onchange({ path, fullPath, query, type }, temp)
							!notAfterEach && this.afterEach(route) // 如果没有禁止全局后置守卫拦截时, 执行全局后置守卫拦截
						}
					})
				}
				if (notBeforeEach) { // notBeforeEach 当不需要被全局前置守卫拦截时
					routeTo(`${fullPath}${this._formatData(query)}`)
				} else {
					this._beforeEach(path, fullPath, query, type).then((next) => { // 执行全局前置守卫,并将参数传入
						this._next(next).then(() => { // 在全局前置守卫 next 没传参
							routeTo(`${fullPath}${this._formatData(query)}`)
						}).catch(e => reject(e)) // 在全局前置守卫 next 中取消或重定向路由
					})
				}
			}).catch(e => reject(e)) // 路由不存在于 pages 中, reject
		})
	},
	pop(data) {
		if (typeof data === 'object') {
			_$UNI_ROUTER_PUSH_POP_FUN(data)
		}
		uni.navigateBack({ delta: typeof data === 'number' ? data : 1 })
	},
	// path 路由名 //  query 路由传参 // isBeforeEach 是否要被全局前置守卫拦截 // isAfterEach 是否要被全局后置守卫拦截
	push(path, query = {}, notBeforeEach, notAfterEach) {
		return this._routeTo(uni.navigateTo, 'push', path, query, notBeforeEach, notAfterEach)
	},
	pushPop(path, query = {}, notBeforeEach, notAfterEach) {
		return new Promise(resolve => {
			_$UNI_ROUTER_PUSH_POP_FUN(null)
			_$UNI_ROUTER_PUSH_POP_FUN = resolve
			this._routeTo(uni.navigateTo, 'pushPop', path, query, notBeforeEach, notAfterEach)
		})
	},
	replace(path, query = {}, notBeforeEach, notAfterEach) {
		return this._routeTo(uni.redirectTo, 'replace', path, query, notBeforeEach, notAfterEach)
	},
	switchTab(path, query = {}, notBeforeEach, notAfterEach) {
		return this._routeTo(uni.switchTab, 'switchTab', path, query, notBeforeEach, notAfterEach)
	},
	reLaunch(path, query = {}, notBeforeEach, notAfterEach) {
		return this._routeTo(uni.reLaunch, 'reLaunch', path, query, notBeforeEach, notAfterEach)
	}
}, {
	set(target, key, value) {
		if (key == 'onchange') {
			onchange = value
		}
		return Reflect.set(target, key, value)
	}
})

Object.setPrototypeOf(route, router) // 让 route 继承 router

export default router
