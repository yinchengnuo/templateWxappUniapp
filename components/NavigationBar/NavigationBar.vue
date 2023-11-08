<template>
	<view class="index" :style="{ paddingTop: paddingTop + 'px' }">
		<view class="bar flex" :style="{ height: height + 'px' }">
			<view class="left flex">
				<view class="action_bar h100 flex" :style="{ width: height + 'px' }" @click="back">
					<text v-if="PageStack.length === 1" class="cuIcon-home"></text>
					<text v-else class="cuIcon-back"></text>
				</view>
				<view v-if="favor" class="action_bar h100 flex" :style="{ width: height + 'px' }"
					@click="$emit('collect')">
					<text v-if="collected" class="cuIcon-favorfill" style="color: #f37b1d;"></text>
					<text v-else class="cuIcon-favor"></text>
				</view>
			</view>
			<text class="text-bold">{{ title }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "NavigationBar",
		props: {
			title: {
				type: String,
				default: 'ToolBox365'
			},
			favor: {
				type: Boolean,
				default: false
			},
			collected: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				PageStack: getCurrentPages(),
				paddingTop: this.$app().globalData.statusBarHeight,
				height: this.$app().globalData.navigationBarHeight - this.$app().globalData.statusBarHeight,
			};
		},
		methods: {
			back() {
				if (this.PageStack.length === 1) {
					uni.reLaunch({
						url: '/pages/首页/首页'
					})
				} else {
					uni.navigateBack()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		width: 100vw;
		background: #E4E4E4;
		box-sizing: border-box;

		.bar {
			font-size: 17px;
			position: relative;
		}

		.left {
			top: 0;
			left: 0;
			height: 100%;
			position: absolute;

			.split {
				width: 2rpx;
				height: 61.8%;
				border-radius: 50%;
				background: #7F7F7F;
			}

			.action_bar {
				font-size: 20px;
			}
		}
	}
</style>