const DBCmd = uniCloud.database().command

// https://21d91afa-8266-426f-ada2-b23e9f16be9d.bspapp.com/http/index/module2

module.exports = async (event, context) => {
	const router = require('router')(event, context, { prefix: '/module2' })
	
	await router.get('/', async data => {
		router.response = { code: 200, message: 'https://21d91afa-8266-426f-ada2-b23e9f16be9d.bspapp.com/http/index/module2' }
	})
	
	return router.response
}
