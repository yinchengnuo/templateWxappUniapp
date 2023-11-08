<template>
	<view class="index" :class="classList">
		<view :id="PageID" class="_wrapper">
			<view :style="{ padding: no_padding ? '0rpx' : '' }">
				<slot :info="{height}"></slot>
			</view>
		</view>
		<view :id="ADID" class="_ad">
			<!-- 视频广告 -->
			<ad v-if="type === 'S1'" unit-id="adunit-42238affd4939e6a" ad-type="video" ad-theme="white"></ad>
			<!-- 横幅广告 -->
			<ad v-if="type === 'B1'" unit-id="adunit-bb0d1a5ba7a52eac"></ad>
			<!-- 原生横幅广告 -->
			<ad-custom v-if="type === 'YHF'" unit-id="adunit-ca19851efd20b3b7"></ad-custom>
			<!-- 原生多格广告 -->
			<!-- <ad-custom v-if="type === 'YDG'" unit-id="adunit-e986a45f75420d2e"></ad-custom> -->
		</view>
	</view>
</template>

<script>
	export default {
		name: "Page",
		props: {
			type: {
				type: String,
				default: 'YHF'
			},
			classList: {
				type: Array,
				default: () => ([""])
			},
			no_padding: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				height: 0,
				interstitialAd: {},
				rewardedVideoAd: {},
				ADID: 'AD_' + Date.now(),
				PageID: 'Page_' + Date.now(),
			};
		},
		created() {
			this.interstitialAd = uni.createInterstitialAd({
				adUnitId: 'adunit-e3f467955c2226a4'
			})
			// this.rewardedVideoAd = uni.createRewardedVideoAd({
			// 	adUnitId: 'adunit-02b562d4a8c16436'
			// })
		},
		mounted() {
			const getH = () => {
				this.$offset(this.ADID).then(res => {
					if (res.height) {
						this.$offset(this.PageID).then(res => {
							this.height = res.height
							console.log("广告渲染完毕")
						})
					} else {
						getH()
					}
				})
			}
			getH()
		},
		methods: {
			showAD(type = 1, cb = () => {}) {
				if (type === 1) {
					this.interstitialAd.show()
				}
				if (type === 2) {
					this.rewardedVideoAd.show()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		height: 100vh;
		display: flex;
		flex-direction: column;

		>view {
			width: 100%;

			&._wrapper {
				flex: 1;
				position: relative;
				background: transparent;

				>view {
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					overflow: auto;
					position: absolute;
					padding: 20rpx 20rpx 0;
					box-sizing: border-box;
				}
			}
		}
	}
</style>