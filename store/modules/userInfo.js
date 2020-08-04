export default {
	namespaced: true,
	state: {
		wxInfo: null
	},
	mutations: {
		SAVE_USER_WX_INFO(state, payload) {
			state.wxInfo = payload
		}
	}
}
