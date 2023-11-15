<template>
	<view class="index">
		<ad-custom v-if="show" unit-id="adunit-8b304cf8af7361f2" @error="error"></ad-custom>
	</view>
</template>

<script>
	export default {
		name: "ADFloat",
		data() {
			return {
				show: true
			};
		},
		methods: {
			error() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		right: 8rpx;
		bottom: 33%;
		position: fixed;
		z-index: 9999999999;
	}
</style>