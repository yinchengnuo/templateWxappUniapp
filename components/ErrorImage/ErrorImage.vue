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
			list: ['http://api.qqguaji.cn:1132/tp/mv.php', 'http://api.qqguaji.cn:1132/tp/hs.php', 'http://api.qqguaji.cn:1132/tp/bs.php', 'http://api.qqguaji.cn:1132/tp/dm.php']
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