<template>
	<Page ref="Page" bg>
		<template v-slot:default="{ page }">
			<template v-if="page">
				<view class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text>输入单号即可查询快递物流信息</text>
					</view>
				</view>
				<view class="cu-bar input solid-bottom">
					<input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search"
						placeholder="请输入单号" type="text" @blur="focus = false" @confirm="make" />
					<text v-if="text" class="my_input_clear cuIcon-roundclosefill" @click="text = ''; make()"></text>
					<button class="cu-btn lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]"
						@click="make">查询</button>
				</view>
				<view class="cu-bar input">
					<button class="w100 cu-btn xxl shadow-blur margin-top-sm margin-left-sm margin-bottom-sm"
						:class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="scan">扫码查询</button>
				</view>
				<view class="cu-bar solid-bottom margin-top-xs">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text class="text-bold">查询结果</text>
					</view>
				</view>
				<template v-if="result">
					<view class="cu-list menu sm-border card-menu margin-bottom">
						<view class="cu-list menu-avatar bg-white">
							<view class="cu-item">
								<view class="cu-avatar round lg" style="overflow: hidden;">
									<image class="w100 h100" :src="result.ico" mode="aspectFill"></image>
								</view>
								<view class="content flex-sub">
									<view>{{ result.kdgs }}</view>
									<view class="text-gray text-sm flex justify-between">
										<text>{{ result.kdcode }}</text>
										<text>{{ result.kdmsg || result.kdby || ' ' }}</text>
									</view>
								</view>
							</view>
						</view>
						<view v-for="(item, index) in result.wuliu" :key="index" class="cu-timeline">
							<view class="w100 cu-time flex justify-between">
								<text class="margin-left">{{ item.gtime }}</text>
								<text class="cuIcon-copy margin-right" @click="$copy(item.gxbody)"></text>
							</view>
							<view class="cu-item">
								<view class="content">{{ item.gxbody }}</view>
							</view>
						</view>
					</view>
				</template>
				<view v-else class="cu-list menu sm-border bg-white card-menu margin-top margin-bottom">
					<Empty />
				</view>
				<AD1 />
				<AD2 />
			</template>
		</template>
	</Page>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
				// text: 'YT8934188937784',
				focus: true,
				result: null
			}
		},
		onLoad() {},
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
				this.focus = false
				this.result = null
				this.text = (this.text || '').trim()
				if (this.text) {
					this.$loading()
					uni.request({
						url: 'https://api.linhun.vip/api/express?apiKey=d1b5f5d56e81c4ec2a5c91c9a14ea186&nu=' +
							this.text
					}).then((res) => {
						console.log(res)
						if (res.data.code === 200) {
							this.result = res.data
						} else {
							this.$toast(res.data.msg)
						}
					}).finally(() => {
						this.$loaded()
					})

				} else {
					this.focus = true
					this.$toast('请输入单号')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>