<template>
	<Page ref="Page">
		<view class="index">
			<image v-if="src" :src="src" mode="widthFix" @click="preview" @longpress="request"></image>
			<AD2 />
			<AD3 />
		</view>
	</Page>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
			}
		},
		created() {
			this.request()
		},
		methods: {
			request() {
				uni.request({
					url: 'https://jkapi.com/api/baisi_img?type=json&apiKey=10288b2eab60ec06db3a2b3bcfd0c4c3'
				}).then(res => {
					this.src = res.data.image_url
				})
			},
			preview() {
				uni.previewImage({
					urls: [this.src]
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