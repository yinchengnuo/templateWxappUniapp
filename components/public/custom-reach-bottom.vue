<template>
	<view class="custom-reach-bottom">
		<text v-if="!nomore" class="cuIcon-loading1 loading"></text>
		<text>{{ nomore ? '没有更多了' : '加载中' }}</text>
	</view>
</template>

<script>
	export default {
		props: {
			nomore: Boolean
		}
	}
</script>

<style lang="scss" scoped>
	.custom-reach-bottom {
		@include flex();
		height: 88rpx;
		font-size: 26rpx;
		margin-top: 10rpx;
		background: #FFFFFF;
		color: $app-main-text-color;
		.loading {
			animation: bottom-loading 1s infinite linear;
			animation-fill-mode: forwards;
		}
		text {
			margin-left: 16rpx;
		}
	}
	@keyframes bottom-loading {
		0% {
			transform: rotateZ(0deg);
		}
		100% {
			transform: rotateZ(360deg);
		}
	}
</style>
