<template>
	<Page ref="Page">
		<view class="index flexc">
			<view class="w100">
				<uni-section title="请输入垃圾名称:" type="line">
					<view class="flex">
						<uni-easyinput trim="all" focus confirmType="搜索" v-model="text" suffixIcon="search"
							placeholder="请输入垃圾名称" @confirm="make" @iconClick="make"></uni-easyinput>
					</view>
				</uni-section>
				<button class="margin-top" type="primary" @click="make">查询垃圾分类信息</button>
			</view>
			<view class="w100 flex1 margin-top" style="overflow: auto;">
				<uni-card v-if="result" title="查询结果" :margin="0" :padding="0">
					<uni-group v-for="item in result" :key="item.name" :title="item.name">
						<uni-section title="分类" type="line">{{ item.explain }}</uni-section>
						<uni-section title="概述" type="line">{{ item.contain }}</uni-section>
						<uni-section title="贴士" type="line">{{ item.tip }}</uni-section>
					</uni-group>
				</uni-card>
			</view>
		</view>
	</Page>
</template>

<script>
	export default {
		data() {
			return {
				// text: '',
				text: '鱼泡',
				result: null
			}
		},
		methods: {
			make() {
				if ((this.text || '').trim()) {
					this.$loading()
					uni.request({
						url: 'https://api.oioweb.cn/api/common/rubbish',
						data: {
							name: this.text
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