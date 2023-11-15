<template>
	<Page type="S1" ref="Page">
		<view class="index">
			<image src="https://api.andeer.top/API/jiangyu.php" mode="widthFix" @click="preview"></image>
			<AD1 />
			<AD2 />
		</view>
	</Page>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			preview() {
				uni.previewImage({
					urls: ['https://api.andeer.top/API/jiangyu.php']
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		height: 100%;

		image {
			width: 100%;
		}
	}
</style>