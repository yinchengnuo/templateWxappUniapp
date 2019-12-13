<template>
	<view class="tem-index">
		<custom-nav ref="ltm" :title="title" />
		<view class="title">UNI-APP微信小程序快速开发模板</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '首页'
			}
		},
		onLoad() {
			this.$refs.ltm.loading(true)
			setTimeout(() => this.$refs.ltm.hideLoading(), 1234)
		}
	}
</script>

<style lang="scss" scoped>
	.tem-index {
		
	}
</style>
