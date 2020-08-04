import util from './util.js'
import native from './native.js'
import namespace from './namespace.js'
import interactivity from './interactivity.js'

const G = new Proxy({}, {
	get(target, key) {
		const item = list.find(e => e[0] === key)
		return item ? item[1] : Reflect.get(target, key)
	}
})

var list = Object.entries({
	...util(G),
	...native(G),
	...namespace(G),
	...interactivity(G)
})

export default G
