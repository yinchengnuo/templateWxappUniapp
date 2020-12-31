const DBCmd = uniCloud.database().command

// https://21d91afa-8266-426f-ada2-b23e9f16be9d.bspapp.com/http/index/module1

module.exports = async (event, context) => {
	const router = require('router')(event, context, { prefix: '/module1'})
	
	await router.get('/', async data => {
		router.response = { code: 200, data, message: 'https://21d91afa-8266-426f-ada2-b23e9f16be9d.bspapp.com/http/index/module1' }
	})
	
	return router.response
}
