import Vue from 'vue'

export default {
	namespaced: true,
	state: {
		list: [],
		recorded: {}
	},
	mutations: {
		SET_LIST(state, payload) {
			state.list = payload.map(e => ({
				...e,
				icon: `/static/${e.page}/${e.name}.svg`
			}))
			uni.stopPullDownRefresh()
		},
		UPDATE_FUNCTION(state, payload) {
			const item = state.list.find(e => e.name === payload.name)
			if (item) {
				Object.assign(item, payload)
			}
			state.recorded = {
				...payload,
				icon: `/static/${payload.page}/${payload.name}.svg`
			}
		}
	},
	actions: {
		getApp({
			commit
		}) {
			Vue.prototype.$loading()
			Vue.prototype.$('/functions').then((data) => {
				uni.stopPullDownRefresh()
				commit('SET_LIST', data)
			}).finally(() => Vue.prototype.$loaded())
		}
	}
}