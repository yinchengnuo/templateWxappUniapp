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
					'https://yinchengnuo.com/static/templateWxappUniapp/colorUIWXcode.png',
					'https://yinchengnuo.com/static/templateWxappUniapp/colorUI.png',
					'https://yinchengnuo.com/static/templateWxappUniapp/colorUIPreview.jpg',
					'https://yinchengnuo.com/static/templateWxappUniapp/uChartWXcode.png',
					'https://yinchengnuo.com/static/templateWxappUniapp/getUserInfo.png'
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
