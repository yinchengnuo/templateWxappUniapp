export default {
	onShareAppMessage(res) {
		return {
			title: '滚动吧！滚动君！',
			path: '/pages/index/index'
		}
	},
	onShow() {
		uni.showShareMenu({
			withShareTicket: true,
			menus: ['shareAppMessage', 'shareTimeline']
		})
	}
}
