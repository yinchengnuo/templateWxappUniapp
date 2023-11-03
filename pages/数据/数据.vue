<template>
	<view class="index">
		<view class='nav-list'>
			<view v-for="(item, index) in list" :key="index" :class="['nav-li', 'shadow']"
				style="background: #fff; padding: 0; width: 220rpx; border-radius: 24rpx; overflow: hidden; position: relative; margin: 10rpx 0 10rpx;"
				@click="navigateTo(item)">
				<image class="w100" :src="item.icon.replace('.svg', '.png')" mode="widthFix"></image>
				<view class="text-lg padding-xs text-bold">
					{{ item.name }}
				</view>
				<view class="text-white padding-xs text-bold text-shadow padding-xs h100"
					style="writing-mode: tb-rl; z-index: 0; white-space: nowrap; line-height: 2; position: absolute; top: 0; right: 0; background: linear-gradient(to right, rgba(0, 0, 0, .1), rgba(0, 0, 0, 1));">
					{{ item.desc }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: 0,
				cardCur: 0,
				refreshing: false,
				interstitialAd: {},
			}
		},
		computed: {
			list() {
				console.log(this.$store.state.app.list.filter(e => e.type === '数据集合'))
				return this.$store.state.app.list.filter(e => e.type === '数据集合')
			}
		},
		onShow() {
			this.show++
			if ((this.show !== 0) && (this.show % 4 === 0)) {
				this.interstitialAd.show()
			}
		},
		onLoad() {
			this.getList()
			this.interstitialAd = uni.createInterstitialAd({
				adUnitId: 'adunit-e3f467955c2226a4'
			})
		},
		methods: {
			getList() {
				this.refreshing = true
				this.$loading()
				this.$store.dispatch('app/getApp').finally(() => {
					this.$loaded()
					this.refreshing = false
				})
			},
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			navigateTo(item) {
				console.log(item)
				uni.navigateTo({
					url: item.page
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		.page_bg {
			top: 0;
			left: 0;
			z-index: 0;
			width: 100%;
			height: 100vh;
			position: fixed;
		}

		.page_title {
			font-size: 13pt;
			font-weight: bold;
		}
	}
</style>