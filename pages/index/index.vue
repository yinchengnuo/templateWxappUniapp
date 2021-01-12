<template>
	<view class="index">
		<view class="title">UNI-APP小程序快速开发模板</view>
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
		
		<view class="unicloud bg-gray" @click="$router.push('/A/index-uniCloud')">uniCloud相关</view>
		<!-- <view class="unicloud bg-gray" @click="$router.push('/webview', { src: 'https://mp.weixin.qq.com/s/XiayBNoBdZ-wPCyGW5OWkw' })">关注公众号</view> -->
		
		<!-- <ad unit-id="adunit-e3f467955c2226a4" ad-intervals="100"></ad> -->
		
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
@import './index.scss';
</style>
