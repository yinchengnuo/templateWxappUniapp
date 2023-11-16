<template>
	<view class="flex" style="flex-wrap: wrap;">
		<image :src="mv" mode="aspectFill" show-menu-by-longpress></image>
		<image :src="hs" mode="aspectFill" show-menu-by-longpress></image>
		<image :src="bs" mode="aspectFill" show-menu-by-longpress></image>
		<image :src="dm" mode="aspectFill" show-menu-by-longpress></image>
	</view>
</template>

<script>
	export default {
		name: "ErrorImage",
		data() {
			return {
				mv: 'http://api.qqguaji.cn:1132/tp/mv.php',
				hs: 'http://api.qqguaji.cn:1132/tp/hs.php',
				bs: 'http://api.qqguaji.cn:1132/tp/bs.php',
				dm: 'http://api.qqguaji.cn:1132/tp/dm.php',
			};
		},
		methods: {
			load(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.flex {
		image {
			width: 375rpx;
			height: 567rpx
		}
	}
</style>