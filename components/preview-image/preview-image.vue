<template>
	<view>
		<image v-for="item in list" :key="item" :src="item"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'https://yinchengnuo.com/static/templateWxappUniapp/images/colorUIWXcode.png',
					'https://yinchengnuo.com/static/templateWxappUniapp/images/colorUI.png',
					'https://yinchengnuo.com/static/templateWxappUniapp/images/colorUIPreview.jpg',
					'https://yinchengnuo.com/static/templateWxappUniapp/images/uChartWXcode.png',
					'https://yinchengnuo.com/static/templateWxappUniapp/images/getUserInfo.png',
				]
			};
		}
	}
</script>

<style lang="scss">
	image {
		height: 0;
		overflow: hidden;
	}
</style>
