const dbCmd = uniCloud.database().command
const DB_access_token = uniCloud.database().collection('access_token')

// https://21d91afa-8266-426f-ada2-b23e9f16be9d.bspapp.com/http/access_token

exports.main = async (event, context) => {
	
	const AppID = 'wxb0566d7e65e76589'
	const AppSecret = '18a564e87cc37cd62d58f3f40fcc6500'
	const { data: { access_token }} = await uniCloud.httpclient.request(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${AppID}&secret=${AppSecret}`, {
		method: 'GET', contentType: 'json', dataType: 'json',
	})
	
	await DB_access_token.where({
		access_token: (await DB_access_token.where({ _id: dbCmd.exists(true) }).get()).data[0].access_token
	}).update({
		access_token
	})
	
	return access_token
};
