<template>
	<view class="router">
		<custom-nav :title="title" />
		<view class="content">
			<view class="t">使用 _router</view>
			<view class="p">对 uni-app 中的路由 api 进行了简单封装，定义了全局导航守卫方法、序列化传参、路由状态保存、错误捕获等。
			使用起来极其方便，无需配置路由表， 也无需进行二次封装。代码也不复杂，源码只有不到100行，比较适合中小型项目快速开发。项目链接（作者：尹成诺）：</view>
			<button class="url" @tap="copy">https://ext.dcloud.net.cn/plugin?id=1089</button>
			<view class="t">使用前：</view>
			<rich-text :nodes="nodesBefore"></rich-text>
			<view class="t">使用后：</view>
			<rich-text :nodes="nodesAfter"></rich-text>
			<view class="t">解决问题：</view>
			<view class="p">1. 传值需要手动拼接</view>
			<view class="p">2. 传值类型为非字符串时会被强制转换为字符串类型</view>
			<view class="p">3. 传值类型为对象时，需要手动 JSON.stringify() / JSON.parse()</view>
			<view class="p">4. 不支持路由拦截</view>
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
				title: '关于路由',
				nodesBefore: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">// 在起始页面跳转到test.vue页面并传递参数
// this.id: 666
// this.bool: true
uni.navigateTo({
  url: \`test?id=\${this.id}&bool=\${this.bool}\`
})

// 在test.vue页面接受参数
export default {
  onLoad ({ id, bool }) {
    console.log(id) // '666'
    console.log(bool) // 'true'
  }
}
</pre>			
				`,
				nodesAfter: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">// 在起始页面跳转到test.vue页面并传递参数
// this.id: 666
// this.bool: true
this.$router.push('/test', {
  id: this.id,
  bool: this.bool
})

// 在test.vue页面接受参数
export default {
  onLoad () {
    const { id, bool } = this.$route.query
    console.log(id) // 666
    console.log(bool) // true
  }
}
</pre>				
				`
			}
		},
		methods: {
			copy() { uni.setClipboardData({ data: 'https://ext.dcloud.net.cn/plugin?id=1089' }) }
		}
	}
</script>

<style lang="scss" scoped>
	.router {
		@include page();
	}
</style>
