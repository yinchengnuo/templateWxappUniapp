<template>
	<view class="index">
		<!-- <scroll-view scroll-y
			:style="{  height: `calc(100vh - ${$app().globalData.menuButtonBoundingClientRect.bottom}px)` }"
			refresher-enabled :refresher-triggered="refreshing" @refresherrefresh="getList">
			<swiper class="card-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="2333"
				duration="500" @change="cardSwiper" previousMargin="0.01rpx" indicator-color="#1F1F1F"
				indicator-active-color="#000000">
				<swiper-item v-for="(item, index) in listHot" :key="index" :class="cardCur==index?'cur':''"
					@click="navigateTo(item)">
					<SwipItem :item="item" :index="index"></SwipItem>
				</swiper-item>
			</swiper> -->
		<!-- <swiper class="swiperitem margin-lr" autoplay="true" vertical="true" circular="true" interval="3210"
				duration="500" style="height: 80rpx;">
				<block v-for="(item, index) in listNew" :key="index">
					<swiper-item catchtouchmove='false'>
						<view class="cu-bar radius-lg bg-orange light"
							style="display: flex; position: relative; align-items: center; min-height: 60rpx; justify-content: space-between;"
							@click="navigateTo(item)">
							<view class='action flex w100'>
								<view class="flex1">
									<text class='cuIcon-magic text-orange'></text>
									<text>上新：{{item.name}}</text>
								</view>
								<text class='cuIcon-right text-orange'></text>
							</view>
						</view>
					</swiper-item>
				</block>
			</swiper> -->
		<view class='nav-list'>
			<view v-for="(item, index) in list" :key="index" :class="['nav-li', 'shadow']"
				style="background: #fff; padding: 0; width: 220rpx; border-radius: 24rpx; height: 340rpx; overflow: hidden; position: relative; margin: 10rpx 0 10rpx;"
				@click="navigateTo(item)">
				<image style="position: absolute; top: -20rpx; left: -10rpx; width: 340rpx; height: 340rpx;"
					:src="item.icon.replace('.svg', '.png')" mode="aspectFit"></image>
				<view class="">
					{{ item.name }}
				</view>
			</view>
		</view>
		<!-- </scroll-view> -->
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
			if ((this.show !== 0) && (this.show % 2 === 0)) {
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