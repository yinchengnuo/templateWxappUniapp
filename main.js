import Vue from 'vue'
import App from '@/App'
import mixin from '@/mixin/global.js'
import $store from '@/store/index.js'
import * as filters from '@/utils/filters.js'
import $storage from '@/utils/tools/uni_storage.js'
import router, { route } from '@/utils/tools/uni_router.js'
import '@/utils/router.js'

Vue.prototype.$route = route
Vue.prototype.$store = $store
Vue.prototype.$router = router
Vue.prototype.$storage = $storage

Vue.mixin(mixin)
Object.setPrototypeOf(Vue.prototype, G)
Object.keys(filters).forEach(e => Vue.filter(e, filters[e]))

;(new Vue({ ...App })).$mount()
