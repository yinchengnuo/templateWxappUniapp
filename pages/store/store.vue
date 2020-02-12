<template>
	<view class="store">
		<custom-nav :title="title" />
		<view class="content">
			<view class="p">uni-app 支持 Vuex。不需要安装开箱即用，但是需要注意的是在 main.js 中，你只能使用：</view>
			<rich-text :nodes="code1"></rich-text>
			<view class="p">而不是：</view>
			<rich-text :nodes="code2"></rich-text>
			<view class="p">同时，uni-app 也是使用 webpack 处理 js 文件的。因此，当我们的项目需要模块化的状态管理时。我们就可以使用一些 webpack 的 API 来加速我们的项目开发：</view>
			<rich-text :nodes="code3"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		onShareAppMessage (res) {  //分享小程序
			return {
				title: '滚动吧！滚动君！',
				path: '/pages/index/index'
			}
		},
		data() {
			return {
				title: '关于状态',
				code1: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">Vue.prototype.$store = store
</pre>	
				`,
				code2: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">new Vue({
  store,
  ...App
})
</pre>	
				`,
				code3: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  modules
})
</pre>	
				`,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.store {
		@include page();
	}
</style>
