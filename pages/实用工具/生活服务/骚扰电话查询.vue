<template>
	<Page type="S1" ref="Page" bg>
		<template v-slot:default="{ page }">
			<template v-if="page">
				<view class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text>输入手机号即可查询号码是否为骚扰电话</text>
					</view>
				</view>
				<view class="cu-bar input">
					<input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search"
						placeholder="请输入手机号" type="number" @blur="focus = false" @confirm="make" />
					<text v-if="text" class="my_input_clear cuIcon-roundclosefill" @click="text = ''; make()"></text>
					<button class="cu-btn lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]"
						@click="make">查询</button>
				</view>
				<view class="cu-bar solid-bottom margin-top-xs">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text class="text-bold">查询结果</text>
					</view>
					<view class="action">*数据来自360手机安全中心</view>
				</view>
				<template v-if="result">
					<view class="cu-list menu sm-border card-menu margin-top margin-bottom">
						<view class="cu-item">
							<view class="content">
								<text class="text-lg">收否为骚扰电话</text>
							</view>
							<view class="action">
								<text class="text-lg text-bold">{{ result.status ? '是' : '否' }}</text>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-lg">被举报次数</text>
							</view>
							<view class="action">
								<text class="text-lg text-bold">{{ result.num || '0' }}</text>
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
			focus: true,
			result: null
		}
	},
	onLoad() { },
	methods: {
		make() {
			this.focus = false
			this.result = null
			this.text = (this.text || '').trim()
			if (this.text) {
				this.$loading()
				uni.request({
					url: 'https://api.oioweb.cn/api/search/harassPhone?phone=' + this.text
				}).then(res => {
					if (res.data.code === 200) {
						this.result = res.data.result
					} else {
						this.focus = true
						this.$toast(res.data.msg)
					}
				}).finally(() => {
					this.$loaded()
				})
			} else {
				this.focus = true
				this.$toast('请输入手机号')
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>