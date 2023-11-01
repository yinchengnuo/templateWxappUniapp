<template>
	<view v-if="ing" class="index flex">
		<LoadingSpin />
	</view>
</template>

<script>
	export default {
		name: "Loading",
		data() {
			return {
				ing: false
			};
		},
		methods: {
			loading() {
				this.ing = true
			},
			loaded() {
				this.ing = false
			}
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
		z-index: 999999999;
		background: rgba(255, 255, 255, .6);
	}
</style>