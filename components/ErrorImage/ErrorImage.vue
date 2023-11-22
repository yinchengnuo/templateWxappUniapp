<template>
	<view class="flex" style="flex-wrap: wrap;">
		<image v-for="item in list" :key="item" class="img" :src="item + '?t=' + t()" mode="aspectFill"
			show-menu-by-longpress></image>
	</view>
</template>

<script>
export default {
	name: "ErrorImage",
	data() {
		return {};
	},
	computed: {
		list() {
			return (this.$store.state.user.images || []).map(e => e.src)
		}
	},
	methods: {
		t() {
			return Date.now()
		}
	}
}
</script>

<style lang="scss" scoped>
.flex {
	.img {
		width: 50%;
		height: 567rpx
	}
}
</style>