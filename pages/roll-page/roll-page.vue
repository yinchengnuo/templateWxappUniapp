<template>
	<view class="roll-page">
		<view class="roll-wrapper">
			测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字, 测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.roll-page {
		height: 100%;
		@include flex();
		overflow: hidden;
		position: relative;
		.roll-wrapper {
			width: auto;
			font-size: 56vw;
			white-space: nowrap;
			justify-content: flex-start;
			animation: right-left 40s linear infinite;
			transform: rotateZ(90deg) translateX(calc(50% + 50vh));
		}
	}
	@keyframes right-left {
		0% {
			transform: rotateZ(90deg) translateX(calc(50% + 50vh));
		}
		100% {
			transform: rotateZ(90deg) translateX(calc(-50% - 50vh));
		}
	}
</style>
