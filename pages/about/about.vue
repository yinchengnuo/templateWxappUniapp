<template>
	<view class="about">
		<custom-nav :title="title" />
		<view class="content">
			{{ title }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '关于本项目'
			}
		},
		onLoad(e) {
			console.log(e)
		}
	}
</script>

<style lang="scss" scoped>
	.about {
		@include page();
		.content {
			@include flex();
			font-size: 123rpx;
		}
	}
</style>
