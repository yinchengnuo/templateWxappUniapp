<template>
	<view class="style">
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
				title: '关于样式'
			}
		},
		methods: {
			
		} 
	}
</script>

<style lang="scss" scoped>
	.style {
		@include page();
		.content {
			@include flex();
			font-size: 123rpx;
		}
	}
</style>
