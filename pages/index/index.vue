<template>
	<view class="index">
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
			<view class="card-bot" @click="$router.push('/B/roll-man')">
				<view class="index-roll">戳我一起滚动吧！滚动君！</view>
			</view>
		</view>
		
		<view
			v-for="(item, index) in itemList"
			:key="index"
			class="item padding radius text-center shadow-blur"
			:class="['item' + index, item.bg, rotate === index ? 'rotate' : '']"
			@tap="toPage(index, item.to)"
		>
			<text class="icon" :class="item.icon"></text>
			<text class="name">关于<text>{{ item.about }}</text></text>
			<text class="english">{{ item.name }}</text>
		</view>
		
		<view @tap="$router.push('/A/index-about')" class="about"><text class="cuIcon-questionfill"></text>关于本项目</view>
		
		<preview-image v-if="readyed" />
	</view>
</template>

<script>
	import { _API_Index, _API_IndexDownload, _API_IndexUpload } from '@/apis/index.js'
	export default {
		onShareAppMessage (res) {  //分享小程序
			return {
				title: '滚动吧！滚动君！',
				path: '/pages/index/index'
			}
		},
		data() {
			return {
				rotate: -1,
				readyed: false,
				title: 'UNI-APP微信小程序快速开发模板',
				topBgs: ['bg-red', 'bg-orange', 'bg-yellow', 'bg-olive', 'bg-green', 'bg-cyan', 'bg-blue', 'bg-purple', 'bg-mauve', 'bg-pink', 'bg-brown', 'bg-grey'],
				itemList: [
					{ about: '样式', name: 'Style', bg: 'bg-gradual-red', icon: 'cuIcon-skinfill', to: '/A/index-style' },
					{ about: '路由', name: 'Router', bg: 'bg-gradual-orange', icon: 'cuIcon-deliver_fill', to: '/A/index-router' },
					{ about: '状态', name: 'Store', bg: 'bg-gradual-green', icon: 'cuIcon-shopfill', to: '/A/index-store' },
					{ about: '网络', name: 'Request', bg: 'bg-gradual-blue', icon: 'cuIcon-rankfill', to: '/A/index-request' },
					{ about: '存储', name: 'Storage', bg: 'bg-gradual-purple', icon: 'cuIcon-homefill', to: '/A/index-storage' },
					{ about: '其他', name: 'Other', bg: 'bg-gradual-pink', icon: 'cuIcon-play_forward_fill', to: '/A/index-other' },
					{ about: '方法', name: 'Global API', bg: 'bg-gradual-yellow', icon: 'cuIcon-repairfill', to: '/A/index-global' },
					{ about: '组件', name: 'Component', bg: 'bg-gradual-young', icon: 'cuIcon-formfill', to: '/A/index-component' },
				]
			}
		},
		onShow() {
			this.$emit('onShow')
		},
		onReady() {
			this.readyed = true
		},
		onLoad(opt) {
			if (Object.keys(opt).length) { // 有参数，表示从分享页 relaunch
				this.$once('onShow', () => this.$router.push('/B/roll-man', { ...opt }))
			}
			this.$request(_API_Index(), data => console.log(data))
			// const task = _API_Index() // 执行接口并保存请求任务
			// task.then(res => console.log(res)).catch(e => console.log(e)) // 请求任务的结果处理
			// setTimeout(() => task.abort(), 567) // 需要的时候，可以主动取消请求任务
			// const fileD = _API_IndexDownload({ header: { test: 666666 } }) // 执行下载文件接口并保存请求任务
			// fileD.onProgressUpdate(e => console.log(e)) // 监听下载进度
			// fileD.then(res => console.log(res))
			// .catch(e => console.log(e)) // 下载任务的结果处理
			// let fileU
			// setTimeout(() => {
			// 	uni.compressImage({ src: '../../static/colorUIPreview.jpg', quality: 100 }).then(([, { tempFilePath }]) => {
			// 		fileU = _API_IndexUpload({ // 执行上传文件接口并保存请求任务
			// 			name: 'img',
			// 			filePath: tempFilePath,
			// 			formData: {
			// 				a: 1,
			// 				b: 2
			// 			}
			// 		})
			// 		fileU.onProgressUpdate(e => console.log(e)) // 监听上传进度
			// 		fileU.then(res => {
			// 			console.log(res)
			// 		})
			// 	})
			// }, 5678)
		},
		methods: {
			toPage(index, path) {
				this.rotate = index;
				this.$router.push(path)
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
		grid-template-rows: 25% 25% 25% 25%;
		grid-template-columns: 341rpx 341rpx;
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
			padding: 25rpx;
			background: #FDFDFD;
			border-radius: 16rpx;
			box-sizing: border-box;
			box-shadow: 0rpx 1rpx #AAAAAA;
			.card-top, .card-bot {
				@include flex();
				flex: 1;
				width: 100%;
				justify-content: flex-start;
				&.card-bot {
					@include flex();
					overflow: hidden;
					justify-content: flex-start;
					.index-roll {
						width: auto;
						font-size: 64rpx;
						white-space: nowrap;
						animation: right-left infinite linear 6s;
					}
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
					font-size: 36rpx;
					margin-left: 36rpx;
				}
			}
		}
		.item {
			@include flex();
			overflow: hidden;
			position: relative;
			border-radius: 16rpx;
			&.item0 { animation: move 68s infinite; }
			&.item1 { animation: move 36s infinite alternate; }
			&.item2 { animation: move 46s infinite; }
			&.item3 { animation: move 24s infinite alternate; }
			&.item4 { animation: move 90s infinite alternate; }
			&.item5 { animation: move 60s infinite; }
			&.item6 { animation: move 48s infinite alternate; }
			&.item7 { animation: move 99s infinite; }
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
		.about {
			@include flex();
			left: 0;
			bottom: 0;
			width: 100%;
			height: 88rpx;
			position: fixed;
			text {
				font-size: 42rpx;
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
		80% { transform: translate(-8rpx, 8rpx); }
		90% { transform: translate(-8rpx, 0rpx); }
		100% { transform: translate(0, 0); }
	}
	@keyframes right-left {
		0% {
			transform: translateX(640rpx);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
