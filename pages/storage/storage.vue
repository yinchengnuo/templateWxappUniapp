<template>
	<view class="storage">
		<custom-nav :title="title" />
		<view class="content">
			<view class="t">使用 _storage</view>
			<view class="p">对 uni-app 中的操作本地存储方法做了封装。使用 Proxy 代理的方式使得可以通过操作对象的方式方便的同步操作本地存储。项目链接（作者：尹成诺）：</view>
			<button class="url" @tap="copy">https://ext.dcloud.net.cn/plugin?id=1126</button>
			<view class="t">使用前：</view>
			<rich-text :nodes="nodesBefore"></rich-text>
			<view class="t">使用后：</view>
			<rich-text :nodes="nodesAfter"></rich-text>
			<view class="t">解决问题：</view>
			<view class="p">1. 存取存储前后需要手动 JSON.stringify() / JSON.parse()</view>
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
				title: '关于存储',
				nodesBefore: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">// set
uni.setStorageSync('storage_key', JSON.stringify({ 
  a: 1,
  b: 2
}))
// get
console.log(JSON.parse(uni.getStorageSync('storage_key')))
</pre>
				`,
				nodesAfter: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">// set
this.$storage.storage_key = {
  a: 1,
  b: 2
}
// get
console.log(this.$storage.storage_key)
</pre>
				`,
			}
		},
		methods: {
			copy() { uni.setClipboardData({ data: 'https://ext.dcloud.net.cn/plugin?id=1126' }) }
		}
	}
</script>

<style lang="scss" scoped>
	.storage {
		@include page();
	}
</style>
