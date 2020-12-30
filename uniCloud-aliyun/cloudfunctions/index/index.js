const module1 = require('./modules/module1.js') // module1 模块
const module2 = require('./modules/module2.js') // module2 模块

// https://21d91afa-8266-426f-ada2-b23e9f16be9d.bspapp.com/http/index

exports.main = async (event, context) => {
	const router = require('router')(event, context)
	
	router.interceptors.request.use(() => {
		
	})
	
	router.response = await module1(event, context) // module1 模块
	router.response = await module2(event, context) // module2 模块

	await router.get('/', async data => {
		router.response = { code: 200, message: 'GET success', data, event, context: {
			env: context.env, body: context.body, logger: context.logger, headers: context.headers,
			basement: context.basement, requestId: context.requestId, SPACEINFO: context.SPACEINFO,
		}}
	})
	
	await router.post('/', async data => {
		router.response = { code: 200, message: 'POST success', data, event, context: {
			env: context.env, body: context.body, logger: context.logger, headers: context.headers,
			basement: context.basement, requestId: context.requestId, SPACEINFO: context.SPACEINFO,
		}}
	})
	
	return router.response || new Error('404 not found')
}
