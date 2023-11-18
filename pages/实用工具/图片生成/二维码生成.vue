<template>
	<Page type="B1" ref="Page">
		<view class="index flexc">
			<view class="w100">
				<uni-section title="请输入文字/网址:" type="line">
					<view class="flex">
						<uni-easyinput focus confirmType="搜索" type="textarea" v-model="text" placeholder="请输入文字/网址"
							@confirm="make" @iconClick="make"></uni-easyinput>
					</view>
				</uni-section>
				<button class="margin-top" type="primary" @click="make">生成二维码</button>
			</view>
			<view class="w100 flex1 margin-top" style="overflow: auto;">
				<uni-card v-if="result" title="生成结果" :margin="0">
					<image class="radius shadow bg-white radius-df" :src="src" mode="aspectFit" @click="preview(item)">
					</image>
				</uni-card>
			</view>
		</view>
	</Page>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
				result: ''
			}
		},
		computed: {
			src() {
				return 'https://api.vvhan.com/api/qr?text=' + this.result
			}
		},
		methods: {
			make() {
				if ((this.text || '').trim()) {
					this.result = this.text
				} else {
					this.result = ''
					this.$toast('请输入文字')
				}
			},
			preview(url) {
				uni.previewImage({
					current: this.src,
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