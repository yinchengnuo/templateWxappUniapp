<template>
	<!-- https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/树洞.jpg -->
	<view class="Page" :class="classList.length ? classList : (bg ? bgClass : '')">
		<view class="cu-drawer-page flex flexc" :class="show ? 'show' : ''">
			<image v-if="favor" class="inlet animation-shake" :src="inlet" @click="show = true"></image>
			<NavigationBar :bg="bg" :title="title" :favor="favor" :collected="collected" @collect="collect" />
			<view :id="PageID" class="_wrapper w100">
				<view>
					<slot ref="slot" :page="{ height, bgClass }"></slot>
				</view>
			</view>
			<view :id="ADID" class="_ad w100">
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

		<view class="cu-drawer-window" :class="show ? 'show' : ''">
			<TreeHole v-if="show && animation" />
		</view>
		<view class="cu-drawer-close" :class="show ? 'show' : ''" @click="show = false">
			<text class="cuIcon-pullright"></text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Page",
		props: {
			bg: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'YHF'
			},
			classList: {
				type: Array,
				default: () => ([])
			}
		},
		data() {
			return {
				time: 0,
				height: 0,
				show: false,
				favor: false,
				collected: false,
				animation: false,
				interstitialAd: {},
				title: 'ToolBox365',
				rewardedVideoAd: {},
				ADID: 'AD_' + Date.now(),
				PageID: 'Page_' + Date.now(),
				inlet: 'https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/树洞.jpg',
				bgClass: this.bg ? getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)[0] : '',
			};
		},
		watch: {
			show() {
				if (this.show) {
					this.animation = true
				} else {
					setTimeout(() => {
						this.animation = false
					}, 400)
				}
			}
		},
		created() {
			this.interstitialAd = uni.createInterstitialAd({
				adUnitId: 'adunit-e3f467955c2226a4'
			})
			// this.rewardedVideoAd = uni.createRewardedVideoAd({
			// 	adUnitId: 'adunit-02b562d4a8c16436'
			// })

			const PageStack = getCurrentPages()
			const types = ["实用工具", "每日随机", "数据集合"]
			const [type, name] = PageStack[PageStack.length - 1].route.replace(/^(.|)pages\//, '').split('/')
			this._type = type
			this._name = this.title = name
			types.includes(type) && this.$('/record', {
				type,
				name
			}).then((data) => {
				if (data) {
					this.collected = data.collected
					this.$store.commit('app/UPDATE_FUNCTION', data)
				}
			}).finally(() => {
				this.favor = true
			})

			const times = [60, 180, 360, 600, 900, 1260, 1680, 2160, 2700]
			this.timer = setInterval(() => {
				this.time++
				if (times.includes(this.time)) {
					this.interstitialAd.show()
				}
				if (this.time > times[times.length - 1]) {
					clearInterval(this.timer)
				}
			}, 1000)
		},
		beforeMount() {
			clearInterval(this.timer)
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
			collect() {
				this.$loading()
				this.$('/collect', {
					type: this._type,
					name: this._name
				}).then((data) => {
					if (data) {
						this.collected = data.collected
						this.$store.commit('app/UPDATE_FUNCTION', data)
						if (this.collected) {
							this.$toast('收藏成功')
						} else {
							this.$toast('取消收藏成功')
						}
					}
				}).finally(() => {
					this.$loaded()
				})
			},
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
	.Page {
		height: 100vh;
		position: relative;

		.inlet {
			bottom: 59%;
			left: -12rpx;
			z-index: 999;
			width: 100rpx;
			height: 100rpx;
			position: absolute;
			border-radius: 20rpx;
		}

		._wrapper {
			flex: 1;
			position: relative;

			>view {
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				overflow: auto;
				position: absolute;
			}
		}
	}

	@keyframes shake {

		0%,
		100% {
			transform: translateX(0)
		}

		10% {
			transform: translateX(-9px)
		}

		20% {
			transform: translateX(8px)
		}

		30% {
			transform: translateX(-7px)
		}

		40% {
			transform: translateX(6px)
		}

		50% {
			transform: translateX(-5px)
		}

		60% {
			transform: translateX(4px)
		}

		70% {
			transform: translateX(-3px)
		}

		80% {
			transform: translateX(2px)
		}

		90% {
			transform: translateX(-1px)
		}
	}

	.animation-shake {
		animation: shake 5s infinite;
	}
</style>