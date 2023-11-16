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
	computed: {
		vip() {
			return this.$store.state.user.vip
		}
	},
	watch: {
		vip: {
			immediate: true,
			handler() {
				if (this.vip === true) {
					this.show = false
					setTimeout(() => {
						this.$emit('load')
					})
				}
				if (this.vip === false) {
					this.show = true
				}
			}
		}
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
	left: 8rpx;
	bottom: 38.2%;
	position: fixed;
	z-index: 9999999999;
}
</style>