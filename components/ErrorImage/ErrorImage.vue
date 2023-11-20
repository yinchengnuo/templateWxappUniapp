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
		return {
			list: ['https://api.tlyun.top/api/hs.php', 'https://api.tlyun.top/api/ksxjjtp.php', 'http://api.yujn.cn/api/heisi.php', 'http://hbkgds.com/api/youhuotu.php']
		};
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