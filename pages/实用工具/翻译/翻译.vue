<template>
	<Page type="S1" ref="Page">
		<view class="index flexc">
			<view class="w100">
				<uni-section title="请输入文字(仅支持英汉互译):" type="line">
					<view class="flex">
						<uni-easyinput focus confirmType="搜索" type="textarea" v-model="text" placeholder="请输入关键字"
							@confirm="make" @iconClick="make"></uni-easyinput>
					</view>
				</uni-section>
				<button class="margin-top" type="primary" @click="make">翻译</button>
			</view>
			<view class="w100 flex1 margin-top" style="overflow: auto;">
				<uni-card v-if="result" title="翻译结果" :margin="0">
					{{ result }}
				</uni-card>
				<button v-if="result" class="margin-top" @click="copy">复制</button>
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
		methods: {
			make() {
				if ((this.text || '').trim()) {
					this.$loading()
					uni.request({
						url: 'https://api.oioweb.cn/api/txt/QQFanyi',
						data: {
							sourceText: this.text
						}
					}).then((res) => {
						if (res.data.result && res.data.result.targetText) {
							this.result = res.data.result.targetText
						} else {
							this.$toast('查询不到内容，请重输试试')
							this.result = ''
						}
					}).finally(() => {
						this.$loaded()
					})
				} else {
					this.result = ''
					this.$toast('请输入文字')
				}
			},
			copy() {
				this.$copy(this.result)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		height: 100%;
	}
</style>