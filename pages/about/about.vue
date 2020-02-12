<template>
	<view class="about">
		<custom-nav :title="title" />
		<view class="content">
			<view class="t">这一切，都要从那只蝙蝠说起...</view>
			<view class="p">本项目是本人入行前端半年以来，使用 uni-app 从事微信小程序开发的一些总结和心得。非常感谢 uni-app 官方的努力，使得使用 Vue 语法开发小程序变得十分方便。
			同时本项目也是对我在 uni-app 插件市场发布的若干插件的整合。这些插件或大或小都是为了开发起来更便捷，更快速。甚至有些插件做出来就是为了少写那几行代码，少打那几个单词。
			毕竟生活不易，人生苦短。所以花点时间做一些自己用起来安心的插件，是为了为了节约更多的时间。一些插件在插件市场获得了一些好评，也因此结识了许多新朋友，感谢认可。
			同时一些插件的开发也都是为了满足本人工作中的业务需求，插件的功能都比较简练，但是非常实用。如果没有满足你的需求，非常遗憾。而如果你在使用过程中发现了问题，或者出现了BUG。
			欢迎在插件市场留言！非常感谢！</view>
			<view class="p">开源地址：</view>
			<button class="url" @tap="copy">https://github.com/yinchengnuo/templateWxappUniapp</button>
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
				title: '关于本项目'
			}
		},
		methods: {
			copy() { uni.setClipboardData({ data: 'https://github.com/yinchengnuo/templateWxappUniapp' }) }
		}
	}
</script>

<style lang="scss" scoped>
	.about {
		@include page();
	}
</style>
