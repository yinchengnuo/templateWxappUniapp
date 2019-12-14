<template>
	<view class="index">
		<custom-nav ref="ltm" style="position: absolute;" />
		<view class="title">UNI-APP微信小程序快速开发模板</view>
		<view class="top">
			<view class="top-item" v-for="item in topBgs" :class="item" :key="item"></view>
		</view>
		<view class="card shadow shadow-lg">
			<view class="card-top">
				<open-data class="avatar" type="userAvatarUrl"></open-data>
				<open-data class="nickname ellipsis" type="userNickName"></open-data>
			</view>
			<view class="card-bot">
				<open-data class="city" type="userCity"></open-data>
				<open-data class="province" type="userProvince"></open-data>
			</view>
		</view>
		<view class="item item1 bg-gradual-red padding radius text-center shadow-blur" :class="{ rotate: rotate === 1 }" @tap="toPageIndex">
			自定义顶部导航栏底部TabBar
		</view>
		<view class="item item2 bg-gradual-orange padding radius text-center shadow-blur" :class="{ rotate: rotate === 2 }">
			2
		</view>
		<view class="item item3 bg-gradual-green padding radius text-center shadow-blur" :class="{ rotate: rotate === 3 }">
			3
		</view>
		<view class="item item4 bg-gradual-blue padding radius text-center shadow-blur" :class="{ rotate: rotate === 4 }">
			4
		</view>
		<view class="item item5 bg-gradual-purple padding radius text-center shadow-blur" :class="{ rotate: rotate === 5 }">
			5
		</view>
		<view class="item item6 bg-gradual-pink padding radius text-center shadow-blur" :class="{ rotate: rotate === 5 }">
			6
		</view>
	</view>
</template>

<script>
	import { _API_Index } from '@/apis/index.js'
	export default {
		data() {
			return {
				title: 'UNI-APP微信小程序快速开发模板',
				rotate: -1,
				topBgs: ['bg-red', 'bg-orange', 'bg-yellow', 'bg-olive', 'bg-green', 'bg-cyan', 'bg-blue', 'bg-purple', 'bg-mauve', 'bg-pink', 'bg-brown']
			}
		},
		onLoad() {
			const task = _API_Index()
			task.then(res => console.log(res)).catch(e => console.log(e))
			setTimeout(() => task.cancel(), 123)
		},
		methods: {
			toPageIndex() {
				this.rotate = 1
				setTimeout(() => this.rotate = -1, 2000)
				setTimeout(() => this.$router.push('/tem-index'), 567)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		height: 100%;
		display: grid;
		grid-row-gap: 8px;
		grid-column-gap: 8px;
		box-sizing: border-box;
		padding: 456rpx 30rpx 123rpx;
		grid-template-columns: 341rpx 341rpx;
		grid-template-rows: 33% 33% 33%;
		.top, .title, .card{
			@include flex();
			top: 0;
			left: 0;
			width: 100%;
			height: 432rpx;
			position: fixed;
			overflow: hidden;
			border-bottom-right-radius: 350rpx 30rpx;
			border-bottom-left-radius: 350rpx 30rpx;
			.top-item {
				flex: 1;
				height: 100%;
			}
		}
		.title {
			@include flex();
			top: 0;
			z-index: 1;
			left: 30rpx;
			color: #FFFFFF;
			height: 206rpx;
			font-size: 42rpx;
			justify-content: flex-start;
			text-shadow: 3rpx 3rpx $theme-color;
		}
		.card {
			@include flex(column);
			top: 206rpx;
			left: 30rpx;
			width: 690rpx;
			height: 234rpx;
			padding: 23rpx;
			background: #F8F8F8;
			border-radius: 16rpx;
			box-sizing: border-box;
			box-shadow: 0rpx 1rpx #AAAAAA;
			.card-top, .card-bot {
				@include flex();
				flex: 1;
				width: 100%;
				justify-content: flex-start;
				&.card-bot {
					justify-content: flex-end;
				}
				.avatar {
					width: 88rpx;
					height: 88rpx;
					overflow: hidden;
					border-radius: 50%;
				}
				.nickname {
					flex: 1;
					margin: 0 23rpx;
					font-size: 32rpx;
				}
				.city, .province {
					font-size: 36;
					margin-left: 36rpx;
				}
			}
		}
		.item {
			@include flex();
			border-radius: 16rpx;
			&.item1 { animation: move 9s infinite; }
			&.item2 { animation: move 17s infinite alternate; }
			&.item3 { animation: move 23s infinite; }
			&.item4 { animation: move 12s infinite alternate; }
			&.item5 { animation: move 45s infinite alternate; }
			&.item6 { animation: move 30s infinite; }
			&.rotate {
				animation: rotate 2s infinite;
			}
		}
	}
	@keyframes rotate {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(2160deg); }
	}
	@keyframes move {
		0% { transform: translate(0, 0); }
		10% { transform: translate(-8rpx, 0); }
		20% { transform: translate(-8rpx, -8rpx); }
		30% { transform: translate(-8rpx, 0); }
		40% { transform: translate(-8rpx, 8rpx); }
		50% { transform: translate(8rpx, 0); }
		60% { transform: translate(8rpx, 8rpx); }
		70% { transform: translate(0, 8rpx); }
		80% { transform: translate(-8rpx, 8rpx); transform: rotate(0deg); }
		90% { transform: translate(-8rpx, 0rpx); transform: rotate(360deg); }
		100% { transform: translate(0, 0); }
	}
</style>
