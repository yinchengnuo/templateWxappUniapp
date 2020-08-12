import util from './util.js'
import native from './native.js'
import namespace from './namespace.js'
import interactivity from './interactivity.js'

const G = new Proxy({}, {
	get(target, key) {
		return map[key] || Reflect.get(target, key)
	}
})

var map = {
	...util(G),
	...native(G),
	...namespace(G),
	...interactivity(G)
}

export default G
