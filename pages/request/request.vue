<template>
	<view class="request">
		<custom-nav :title="title" />
		<view class="content">
			<view class="t">使用 _request</view>
			<view class="p">对 uni-app 中的网络请求进行了封装，支持异步拦截器、上传下载、超时取消、主动取消，错误捕获、超时监听等。项目链接（作者：尹成诺）：</view>
			<button class="url" @tap="copy">https://ext.dcloud.net.cn/plugin?id=946</button>
			<view class="t">使用前：</view>
			<rich-text :nodes="nodesBefore"></rich-text>
			<view class="t">使用后：</view>
			<rich-text :nodes="nodesAfter"></rich-text>
			<view class="t">解决问题：</view>
			<view class="p">1. 实现了拦截器便于网络请求前后对数据或响应的统一处理</view>
			<view class="p">2. 实现了可以主动取消网络请求</view>
			<view class="p">3. 实现了全局错误监听</view>
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
				title: '关于网络',
				nodesBefore: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">uni.request({
  url: 'https://www.example.com/request',
  data: {
    text: 'uni.request'
  },
  header: {
    'custom-header': 'hello'
  },
  success: (res) => {
    console.log(res.data)
  }
})
</pre>
				`,
				nodesAfter: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">this.$request.get('/request', { 
  text: 'uni.request'
}).then(res => {
  console.log(res.data)
})
</pre>
				`
			}
		},
		methods: {
			copy() { uni.setClipboardData({ data: 'https://ext.dcloud.net.cn/plugin?id=946' }) }
		}
	}
</script>

<style lang="scss" scoped>
	.request {
		@include page();
	}
</style>
