import Vue from 'vue'
import App from '@/App'
import mixin from '@/mixin/global.js'
import $store from '@/store/index.js'
import * as filters from '@/utils/filters.js'
import $storage from '@/utils/uni_storage/uni_storage.js'
import router, { route } from '@/utils/uni_router/uni_router.js'
import '@/utils/router.js'

Vue.prototype.$route = route
Vue.prototype.$router = router
Vue.prototype.$storage = $storage
Vue.prototype.$store = G.$store = $store

Vue.mixin(mixin)
Object.setPrototypeOf(Vue.prototype, G)
Object.keys(filters).forEach(e => Vue.filter(e, filters[e]))

Vue.config.productionTip = false

App.mpType = 'app'

;(new Vue({ ...App })).$mount()
