const _storage = '_$storage'
const isArray = i => Object.prototype.toString.call(i) === '[object Array]'
const isObject = i =>  Object.prototype.toString.call(i) === '[object Object]'

const state = JSON.parse(uni.getStorageSync(_storage) || '{}')
const stateUpdataHandler = () => uni.setStorageSync(_storage, JSON.stringify(state)) // 状态更新回调
const proxy = state => { // 递归代理器
	Object.keys(state).forEach(e => (isArray(state[e]) || isObject(state[e]) ? state[e] = proxy(state[e]) : '' ));
	return new Proxy(state, {
		get(target, key) {  //代理get
			if (key === 'all') {
				return () => JSON.parse(JSON.stringify(state))
			} else if (key === 'has') {
				return key => Reflect.has(state, key)
			} else if (key === 'clear') {
				return () => {
					let keys = Object.keys(state)
					for(let i = 0; i < keys.length; i ++) { delete state[keys[i]] }
					keys = null
					stateUpdataHandler()
				}
			}
			return Reflect.get(target, key)
		},
		set(target, key, value) {  //代理set
			if (Reflect.get(target, key) === value) {  // 当 newValue === oldValue 时
				return true
			} else if (isArray(value) || isObject(value)) { // 当 value 为数组过对象
				Reflect.set(target, key, proxy(value))
				stateUpdataHandler()
				return true
			} else {
				Reflect.set(target, key, value)
				stateUpdataHandler()
				return true
			}
			return false
		},
		deleteProperty (target, key) { // 代理 delete
			Reflect.deleteProperty(target, key)
			stateUpdataHandler()
			return true
		}
	})
}

export default proxy(state)