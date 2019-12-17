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
				<open-data class="city cuIcon-locationfill" type="userCity"></open-data>
			</view>
			<view class="card-bot">
				<view class="cuIcon-github" type="userCity">Github</view>
				<view class="province" type="userProvince"></view>
			</view>
		</view>
		<view class="item item1 bg-gradual-red padding radius text-center shadow-blur" :class="{ rotate: rotate === 1 }" @tap="toStyle">
			<text class="icon cuIcon-skinfill"></text>
			<text class="name">关于<text>样式</text></text>
			<text class="english">Style</text>
		</view>
		<view class="item item2 bg-gradual-orange padding radius text-center shadow-blur" :class="{ rotate: rotate === 2 }" @tap="toRouter">
			<text class="icon cuIcon-deliver_fill"></text>
			<text class="name">关于<text>路由</text></text>
			<text class="english">Router</text>
		</view>
		<view class="item item3 bg-gradual-green padding radius text-center shadow-blur" :class="{ rotate: rotate === 3 }" @tap="toStore">
			<text class="icon cuIcon-shopfill"></text>
			<text class="name">关于<text>状态</text></text>
			<text class="english">Store</text>
		</view>
		<view class="item item4 bg-gradual-blue padding radius text-center shadow-blur" :class="{ rotate: rotate === 4 }" @tap="toRequest">
			<text class="icon cuIcon-rankfill"></text>
			<text class="name">关于<text>网络</text></text>
			<text class="english">Request</text>
		</view>
		<view class="item item5 bg-gradual-purple padding radius text-center shadow-blur" :class="{ rotate: rotate === 5 }" @tap="toStorage">
			<text class="icon cuIcon-homefill"></text>
			<text class="name">关于<text>存储</text></text>
			<text class="english">Storage</text>
		</view>
		<view class="item item6 bg-gradual-pink padding radius text-center shadow-blur" :class="{ rotate: rotate === 5 }" @tap="toOther">
			<text class="icon cuIcon-play_forward_fill"></text>
			<text class="name">关于<text>其他</text></text>
			<text class="english">Other</text>
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
				topBgs: ['bg-red', 'bg-orange', 'bg-yellow', 'bg-olive', 'bg-green', 'bg-cyan', 'bg-blue', 'bg-purple', 'bg-mauve', 'bg-pink', 'bg-brown', 'bg-grey']
			}
		},
		onLoad() {
			const task = _API_Index()
			task.then(res => console.log(res)).catch(e => console.log(e))
			setTimeout(() => task.cancel(), 123)
		},
		methods: {
			toStyle() {
				this.rotate = 1;
				this.$router.push('/style')
				setTimeout(() => this.rotate = -1, 2000)
			},
			toRouter() {
				this.rotate = 2;
				this.$router.push('/router')
				setTimeout(() => this.rotate = -1, 2000)
			},
			toStore() {
				this.rotate = 3;
				this.$router.push('/store')
				setTimeout(() => this.rotate = -1, 2000)
			},
			toRequest() {
				this.rotate = 4;
				this.$router.push('/request')
				setTimeout(() => this.rotate = -1, 2000)
			},
			toStorage() {
				this.rotate = 5;
				this.$router.push('/storage')
				setTimeout(() => this.rotate = -1, 2000)
			},
			toOther() {
				this.rotate = 6;
				this.$router.push('/other')
				setTimeout(() => this.rotate = -1, 2000)
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
			overflow: hidden;
			position: relative;
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
			.icon {
				top: 16rpx;
				left: 16rpx;
				opacity: .6;
				font-size: 180rpx;
				position: absolute;
			}
			.english {
				top: 56rpx;
				right: 16rpx;
				font-size: 34rpx;
				position: absolute;
				letter-spacing: 3.6rpx;
			}
			.name {
				right: 16rpx;
				bottom: 16rpx;
				position: absolute;
				text {
					font-size: 45rpx;
					margin-left: 8rpx;
				}
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
