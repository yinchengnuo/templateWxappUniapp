<template>
	<view class="request">
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
				title: '关于网络'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.request {
		@include page();
		.content {
			@include flex();
			font-size: 123rpx;
		}
	}
</style>
