<template>
	<Page ref="Page">
		<view class="index flexc">
			<view class="w100">
				<uni-section title="请输入快递单号:" type="line">
					<view class="flex">
						<uni-easyinput trim="all" focus confirmType="搜索" v-model="text" suffixIcon="search"
							placeholder="请输入快递单号" @confirm="make" @iconClick="make"></uni-easyinput>
					</view>
				</uni-section>
				<button class="margin-top" @click="scan">扫码查询</button>
				<button class="margin-top" type="primary" @click="make">查询物流信息</button>
			</view>
			<view class="w100 flex1 margin-top" style="overflow: auto;">
				<uni-card v-if="result" :title="result.expTextName" is-shadow :sub-title="result.tel"
					:extra="result.StatusInfo" :thumbnail="result.logo" :margin="0">
					<uni-steps :options="result.data.map(e => ({ title: e.context, desc: e.time }))"
						active-color="#007AFF" :active="0" direction="column" />
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
				// text: '9856161243563',
				result: null
			}
		},
		methods: {
			scan() {
				uni.scanCode({
					success: ({
						result
					}) => {
						this.text = result
						this.make()
					}
				});
			},
			make() {
				if ((this.text || '').trim()) {
					this.$loading()
					uni.request({
						url: 'https://api.oioweb.cn/api/common/delivery',
						data: {
							nu: this.text
						}
					}).then((res) => {
						if (res.data.result) {
							this.result = res.data.result
						} else {
							this.$toast('查询不到内容，请重输试试')
							this.result = null
						}
					}).finally(() => {
						this.$loaded()
					})
				} else {
					this.result = null
					this.$toast('请输入文字')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		height: 100%;
	}
</style>