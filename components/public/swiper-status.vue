<template>
	<view class="swiper-status">
		<view v-if="page === 1">{{ '... 加载中 ...'  }}</view>
		<view v-else-if="page === 0">{{ '- 暂无' + (unit ? unit : '订单') + ' -' }}</view>
		<view v-else-if="page === -1">{{ '- 网络崩溃了 下拉刷新重试 -' }}</view>
	</view>
</template>

<script>
	export default {
		props: {
			page: Number,
			unit: String
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-status {
		@include flex();
		width: 100%;
		height: 100%;
		background: #F8F8F8;
		color: $app-sec-text-color;
	}
</style>
