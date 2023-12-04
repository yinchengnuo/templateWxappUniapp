<template>
	<view class="index">
		<image class=".page_bg" mode="aspectFill"
			src='https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/page_bg.png'></image>
		<view class="page_title flex" :style="{
			marginTop: `${$app().globalData.menuButtonBoundingClientRect.top}px`, height: `${$app().globalData.menuButtonBoundingClientRect.height}px`
		}">每日随机</view>
		<scroll-view scroll-y show-scrollbar enhanced scroll-with-animation enable-passive
			:style="{ height: `calc(100vh - ${$app().globalData.menuButtonBoundingClientRect.bottom}px)` }" refresher-enabled
			:refresher-triggered="refreshing" @refresherrefresh="getList">
			<swiper class="card-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="2333"
				duration="500" @change="cardSwiper" previousMargin="0.01rpx" indicator-color="#1F1F1F"
				indicator-active-color="#000000">
				<swiper-item v-for="(item, index) in listHot" :key="index" :class="cardCur == index ? 'cur' : ''"
					@click="navigateTo(item)">
					<SwipItem :item="item" :index="index"></SwipItem>
				</swiper-item>
			</swiper>
			<swiper class="swiperitem margin-lr" autoplay="true" vertical="true" circular="true" interval="3210" duration="500"
				style="height: 80rpx;">
				<block v-for="(item, index) in listNew" :key="index">
					<swiper-item catchtouchmove='false'>
						<view class="cu-bar radius-lg bg-orange light"
							style="display: flex; position: relative; align-items: center; min-height: 60rpx; justify-content: space-between;"
							@click="navigateTo(item)">
							<view class='action flex w100'>
								<view class="flex1">
									<text class='cuIcon-magic text-orange'></text>
									<text>上新：{{ item.name }}</text>
								</view>
								<text class='cuIcon-right text-orange'></text>
							</view>
						</view>
					</swiper-item>
				</block>
			</swiper>
			<view class='nav-list'>
				<view v-for="(item, index) in list" :key="index" :class="['nav-li', 'shadow', 'bg-' + item.color]"
					@click="navigateTo(item)">
					<ListItem :item="item" />
				</view>
			</view>
		</scroll-view>
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
			const colors = getApp().globalData.colors.slice().sort(() => Math.random() - 0.5)
			return this.$store.state.app.list.filter(e => e.type === '每日随机').map((e, i) => ({
				...e,
				color: colors[i % 12] + ' light'
			}))
		},
		listHot() {
			const images = getApp().globalData.images.slice().sort(() => Math.random() - 0.5)
			return this.list.slice().sort((b, a) => a.view_num - b.view_num).slice(0, 6).map((e, i) => ({
				...e,
				image: images[i]
			}))
		},
		listNew() {
			return this.list.slice().sort((b, a) => a.index - b.index).slice(0, 6)
		}
	},
	onShow() {
		this.show++
		if ((this.show !== 0) && (this.show % 4 === 0)) {
			!this.$store.state.user.vip && this.interstitialAd.show()
		}
	},
	onLoad() {
		this.interstitialAd = uni.createInterstitialAd({
			adUnitId: 'adunit-e3f467955c2226a4'
		})
	},
	methods: {
		getList() {
			this.refreshing = true
			this.$store.dispatch('app/getFunction').finally(() => {
				this.refreshing = false
			})
		},
		cardSwiper(e) {
			this.cardCur = e.detail.current
		},
		navigateTo(item) {
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
		z-index: -1;
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