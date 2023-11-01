<template>
	<view class="index">
		<view :id="id" class="_wrapper">
			<view :style="{ padding: no_padding ? '0rpx' : '' }">
				<slot :info="{height}"></slot>
			</view>
		</view>
		<view class="_ad">
			<ad v-if="type === 'B1'" unit-id="adunit-bb0d1a5ba7a52eac"></ad>
			<ad v-if="type === 'S1'" unit-id="adunit-42238affd4939e6a" ad-type="video" ad-theme="white"></ad>
			<ad-custom v-if="type === 'YHF'" unit-id="adunit-ca19851efd20b3b7"></ad-custom>
			<ad-custom v-if="type === 'YDG'" unit-id="adunit-e986a45f75420d2e"></ad-custom>
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
			no_padding: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				height: 0,
				id: 'Page_' + Date.now()
			};
		},
		mounted() {
			this.getH()
			// 'adunit-02b562d4a8c16436' J1
		},
		methods: {
			getH() {
				this.$offset(this.id).then(res => {
					if (res.height === getApp().globalData.systemInfo.windowHeight) {
						setTimeout(() => {
							this.getH()
						}, 100)
					}
					this.height = res.height
				})
			},
			show() {

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
				background: #FFFFFF;

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