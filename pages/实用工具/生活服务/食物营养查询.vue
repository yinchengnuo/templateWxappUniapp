<template>
	<Page ref="Page" bg>
		<template v-slot:default="{ page }">
			<template v-if="page">
				<view class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text>输入食物名称即可查询热量&卡路里</text>
					</view>
				</view>
				<view class="cu-bar input solid-bottom">
					<input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search"
						placeholder="请输入食物名称" type="text" @blur="focus = false" @confirm="make" />
					<text v-if="text" class="my_input_clear cuIcon-roundclosefill" @click="text = ''; make()"></text>
					<button class="cu-btn lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]"
						@click="make">查询</button>
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
							<view v-for="(item, index) in result" :key="index" class="cu-item">
								<view class="cu-avatar round lg" style="overflow: hidden;">
									<image class="w100 h100" :src="item.img" mode="aspectFill"></image>
								</view>
								<view class="content flex-sub">
									<view class="flex justify-between">
										<text>{{ item.name || ' ' }}</text>
										<text>{{ item.heat || ' ' }}</text>
									</view>
									<view class="text-gray text-sm">
										<text>{{ item.desc || ' ' }}</text>
									</view>
								</view>
							</view>
							<view class="cu-item text-grey text-sm justify-center">没有更多了...</view>
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
			// text: '香蕉',
			focus: true,
			result: null
		}
	},
	onLoad() { },
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
			this.text = (this.text || '').toString().trim()
			if (this.text) {
				this.$loading()
				uni.request({
					url: 'https://api.oioweb.cn/api/search/FoodHeat?page=1&keyword=' +
						this.text
				}).then((res) => {
					console.log(res)
					if (res.data.code === 200) {
						this.result = res.data.result
					} else {
						this.$toast(res.data.msg)
					}
				}).finally(() => {
					this.$loaded()
				})

			} else {
				this.focus = true
				this.$toast('请输入食物名称')
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>