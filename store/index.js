import Vue from 'vue'  //引入 Vue
import Vuex from 'vuex'  //引入 Vuex

import app from '@/store/modules/app'

Vue.use(Vuex)

const $store = new Vuex.Store({
	modules: {
		app
	}
})

export default $store