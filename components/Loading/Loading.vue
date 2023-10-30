<template>
	<view class="index flex">
		<LoadingSpin />
	</view>
</template>

<script>
	export default {
		name: "Loading",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		position: fixed;
		background: rgba(0, 0, 0, .3);
	}
</style>