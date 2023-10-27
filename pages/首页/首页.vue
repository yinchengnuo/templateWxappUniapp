<template>
	<view class="index">
		<image class=".page_bg" mode="aspectFill" src='/static/page_bg.png'></image>
		<view class="page_title flex" :style="{
				marginTop: `${$app().globalData.menuButtonBoundingClientRect.top}px`, height: `${$app().globalData.menuButtonBoundingClientRect.height}px` 
			}">ToolBox365</view>
		<scroll-view scroll-y
			:style="{  height: `calc(100vh - ${$app().globalData.menuButtonBoundingClientRect.bottom}px)` }"
			refresher-enabled>
			<swiper class="card-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="2333"
				duration="500" @change="cardSwiper" previousMargin="0.01rpx" indicator-color="#1F1F1F"
				indicator-active-color="#000000">
				<swiper-item v-for="(item, index) in listHot" :key="index" :class="cardCur==index?'cur':''"
					@click="navigateTo(item)">
					<SwipItem :item="item" :index="index"></SwipItem>
				</swiper-item>
			</swiper>
			<swiper class="swiperitem margin-lr" autoplay="true" vertical="true" circular="true" interval="3210"
				duration="500" style="height: 80rpx;">
				<block v-for="(item, index) in listNew" :key="index">
					<swiper-item catchtouchmove='false'>
						<view class="cu-bar radius-lg bg-orange light"
							style="display: flex; position: relative; align-items: center; min-height: 60rpx; justify-content: space-between;"
							@click="navigateTo(item)">
							<view class='action flex w100'>
								<view class="flex1">
									<text class='cuIcon-magic text-orange'></text>
									<text>上新：{{item.name}}:{{item.desc}}</text>
								</view>
								<text class='cuIcon-right text-orange'></text>
							</view>
						</view>
					</swiper-item>
				</block>
			</swiper>
			<view class="cu-good-act margin bg-purple light" style="margin-top: 0;">
				<view class="cu-good-point-con" style="left: auto; right: 107rpx;">
					<swiper class="swiper-box" :indicator-dots="false" autoplay="true" interval="1500" duration="1000"
						circular="true" :display-multiple-items="3">
						<swiper-item v-for="(item, index) in listDaily" :key="index" @click="navigateTo(item)">
							<view class="cu-good-point-flex-w">
								<image class="cu-good-point-img radius-lg" :src="item.icon"></image>
								<view>{{item.name}}</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<view class="cu-good-t-box bg-oc-pink-3" style="position: absolute; right: 0;" @click="toDaily">
					<view class="cu-good-title">每日随机</view>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class='nav-list'>
				<view v-for="(item, index) in list" :key="index" :class="['nav-li', 'shadow','bg-' + item.color]"
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
				cardCur: 0,
			}
		},
		computed: {
			list() {
				const colors = getApp().globalData.colors.sort(() => Math.random() - 0.5)
				return this.$store.state.app.list.filter(e => e.page === '实用工具').map((e, i) => ({
					...e,
					color: colors[i % 12] + ' light'
				}))
			},
			listHot() {
				const images = getApp().globalData.images.sort(() => Math.random() - 0.5)
				return this.list.slice().sort((b, a) => a.view_num - b.view_num).slice(0, 6).map((e, i) => ({
					...e,
					image: images[i]
				}))
			},
			listNew() {
				return this.list.slice().sort((b, a) => a.index - b.index).slice(0, 6)
			},
			listDaily() {
				return this.$store.state.app.list.filter(e => e.page === '每日随机').slice().sort((b, a) => a.view_num - b
					.view_num)
			}
		},
		onPullDownRefresh() {
			this.$store.dispatch('app/getApp')
		},
		onLoad() {
			this.$store.dispatch('app/getApp')
		},
		methods: {
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			navigateTo(item) {
				uni.navigateTo({
					url: `/pages/${item.page}/${item.name}/${item.name}`
				})
			},
			toDaily() {
				uni.switchTab({
					url: '/pages/每日/每日'
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
			font-size: 12pt;
			font-weight: bold;
		}
	}
</style>