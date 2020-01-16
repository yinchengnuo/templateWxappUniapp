<template>
	<view class="roll-man">
		<custom-nav :title="title" />
		<view class="content">
			<view class="priview">
				<view class="left"></view>
				<view class="center" :style="{ background: bgColor }">
					<view class="roll-view" :style="{
						color: fontColor,
						fontSize: _fontSize,
						opacity: opacity
					}">{{ value }}</view>
				</view>
				<view class="right">
					<text class="cuIcon-back"></text>
					<text class="cuIcon-home"></text>
					<text class="cuIcon-sort"></text>
				</view>
			</view>
			<view class="config">
				<textarea v-model="value" placeholder="请输入滚动字幕文字" />
				<view class="config-item">
					<text>文本颜色</text>
					<text>{{ fontColor }}</text>
					<button type="primary">选择</button>
				</view>
				<view class="config-item">
					<text>文本尺寸</text>
					<text>{{ fontColor }}</text>
				</view>
				<view class="config-item">
					<text>文本透明度</text>
					<text>{{ fontColor }}</text>
				</view>
				<view class="config-item"></view>
				<view class="config-item"></view>
			</view>
			<button type="primary" @tap="toRoll">滚动吧！滚动君！</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '滚动吧！滚动君！',
				value: '滚动吧！滚动君！',
				bgColor: '#FFFFFF', // 背景色
				fontColor: '#000000', // 文本颜色
				fontSize: 1, // 文本尺寸
				opacity: 1
			}
		},
		computed: {
			_fontSize() {
				return uni.upx2px(280) * this.fontSize + 'px'
			}
		},
		methods: {
			toRoll() {
				this.$router.push('/roll-page')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.roll-man {
		@include page();
		.content {
			@include flex(column);
			padding: 25rpx;
			background: #FFFFFF;
			justify-content: flex-start;
			.priview {
				@include flex();
				width: 100%;
				height: 300rpx;
				overflow: hidden;
				background: #000000;
				border-radius: 23rpx;
				border: 1rpx solid #000000;
				.left {
					width: 56rpx;
					height: 100%;
					border-right: 1rpx solid #FFFFFF;
				}
				.center {
					@include flex();
					flex: 1;
					height: 100%;
					overflow: hidden;
					justify-content: flex-start;
					.roll-view {
						width: auto;
						white-space: nowrap;
						transform: translateX(-100%);
						animation: right-left 6s linear infinite;
					}
				}
				.right {
					@include flex(column);
					width: 88rpx;
					height: 100%;
					justify-content: space-around;
					border-left: 1rpx solid #FFFFFF;
					text {
						color: #FFFFFF;
						font-size: 34rpx;
						border-radius: 50%;
						transform: rotateZ(-90deg);
					}
				}
			}
			.config {
				width: 100%;
				margin: 25rpx 0;
				textarea {
					width: 100%;
					padding: 12rpx;
					height: 156rpx;
					font-size: 32rpx;
					border-radius: 8rpx;
					box-sizing: border-box;
					border: 1rpx solid #AAAAAA;
				}
				.config-item {
					@include flex();
					width: 100%;
					height: 88rpx;
					justify-content: space-between;
					border-top: 1rpx solid $bg-color;
					button {
						margin: 0;
						width: 123rpx;
						height: 66rpx;
						font-size: 32rpx;
					}
				}
			}
		}
	}
	@keyframes right-left {
		0% {
			transform: translateX(556rpx);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
