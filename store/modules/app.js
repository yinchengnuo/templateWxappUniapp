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
				icon: `https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/${e.type}/${e.name}.svg`
			}))
		},
		UPDATE_FUNCTION(state, payload) {
			const item = state.list.find(e => e.name === payload.name)
			if (item) {
				Object.assign(item, payload)
			}
			state.recorded = {
				...payload,
				icon: `https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/${payload.type}/${payload.name}.svg`
			}
		}
	},
	actions: {
		getApp({
			state,
			commit
		}) {
			return new Promise((resolve, reject) => {
				Vue.prototype.$('/functions').then((data) => {
					commit('SET_LIST', data)
					setTimeout(() => {
						resolve(state)
					})
				}).catch((e) => {
					reject(e)
				})
			})
		}
	}
}