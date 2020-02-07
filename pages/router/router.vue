<template>
	<view class="router">
		<custom-nav :title="title" />
		<view class="content">
			<view class="t">使用 _router</view>
			<button @tap="copy">https://ext.dcloud.net.cn/plugin?id=1089</button>
			<view class="t">使用前：</view>
			<rich-text :nodes="nodesBefore"></rich-text>
			<view class="t">使用后：</view>
			<rich-text :nodes="nodesAfter"></rich-text>
			<view class="t">解决问题：</view>
			<view class="p">1. 传值需要手动拼接</view>
			<view class="p">2. 传值类型为非字符串时会被强制转换为字符串类型</view>
			<view class="p">3. 传值类型为对象时，需要手动 JSON.stringify()/JSON.parse()</view>
			<view class="p">4. 不支持路由拦截</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '关于路由',
				nodesBefore: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; overflow: scroll;">// 在起始页面跳转到test.vue页面并传递参数
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
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; overflow: scroll;">// 在起始页面跳转到test.vue页面并传递参数
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
			copy() {
				uni.setClipboardData({ data: 'https://ext.dcloud.net.cn/plugin?id=1089' })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.router {
		@include page();
		.content {
			padding: 0rpx 25rpx 25rpx;
			background: #FFFFFF;
			button {
				font-size: 24rpx;
			}
			.t {
				@include flex();
				height: 88rpx;
				font-size: 44rpx;
				text-align: center;
			}
			.p {}
		}
	}
</style>
