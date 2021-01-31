const dbCmd = uniCloud.database().command
const DB_access_token = uniCloud.database().collection('access_token')

// https://21d91afa-8266-426f-ada2-b23e9f16be9d.bspapp.com/http/index

exports.main = async (event, context) => {
	const router = require('router')(event, context)
	
	router.interceptors.request.use(async route => { // 请求拦截器
		route.params.requestAppend = { message: '请求拦截器追加数据' }
		route.interceptor.interceptorAppend = { message: '请求拦截器传递给路由业务处理的数据' }
		// router.response = { code: 233, message: '请求拦截器响应', route }
	})
	
	router.response = await (require('./modules/module1.js')(event, context)) // module1 模块
	router.response = await (require('./modules/module2.js')(event, context)) // module2 模块

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
	
	await router.post('/msg_sec_check', async ({ data: { content }}) => {
		const access_token = (await DB_access_token.where({ _id: dbCmd.exists(true) }).get()).data[0].access_token
		const { data } = await uniCloud.httpclient.request(`https://api.weixin.qq.com/wxa/msg_sec_check?access_token=${access_token}`, {
			method: 'POST', contentType: 'json', dataType: 'json', data: { content }
		})
		router.response = { code: 200, message: "检查一段文本是否含有违法违规内容。", data }
	})
	
	;(async () => { // 响应拦截器相关处理
		if (router.response.data) {
			router.response.data.responseAppend = { message: '响应拦截器追加数据' }
		} else {
			router.response.data = {
				responseAppend: { message: '响应拦截器追加数据' },
			}
		}
		
	})()
	
	return router.response || new Error('404 not found')
}
