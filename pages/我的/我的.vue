<template>
	<view class="index bg-gradual-blue-light" style="position: relative; min-height: 100vh; overflow: hidden;">
		<image class=".page_bg" mode="aspectFill"
			src='https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/page_bg.png'></image>

		<image class="w100;" mode="widthFix" style="position: fixed; top: 0 ; left: 0; opacity: 0.2; z-index: 0;"
			src="https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/logo.png"></image>

		<view class="flex relative" style="box-sizing: border-box; padding: 0 30rpx;" :style="{
				marginTop: `${$app().globalData.menuButtonBoundingClientRect.top}px`, height: `${$app().globalData.menuButtonBoundingClientRect.height}px` 
			}">
			<view v-if="city" class="flex h100"
				style="position: absolute; top: 0; left: 0; padding: 0 30rpx; font-weight: bolder;">
				<text class="cuIcon-locationfill text-blue text-shadow">{{ ' ' + city.city_name }}</text>
			</view>
			<text v-if="condition" class="page_title text-black text-bold text-shadow">{{ condition.tips }}</text>
		</view>

		<view class="relative flex flex_sb text-bold text-shadow relative"
			style="box-sizing: border-box; padding: 0 30rpx;"
			:style="{ height: `${$app().globalData.menuButtonBoundingClientRect.height}px`  }">
			<text>{{ condition.condition }} 体感：{{ condition.realFeel }}℃</text>
			<text>{{ condition.windDir }}{{ condition.windLevel }}级</text>
		</view>

		<view class="relative UCenter-bg">
			<image v-if="user.avatar" :src="user.avatar" class="png bg-white shadow" mode="scaleToFill"></image>
			<open-data v-else class="png bg-white shadow" type="userAvatarUrl"></open-data>
			<text class="cuIcon-camera margin-left-xs text-black"
				style="text-shadow: none; position: absolute; top: 140rpx; left: calc(50% + 40rpx); font-size: 48rpx;"></text>
			<button open-type="chooseAvatar"
				style="position: absolute; width: 350rpx; height: 200rpx; border-radius: 50%; opacity: 0; top: 0; left: 200rpx;"
				@chooseavatar="chooseavatar"></button>
			<view class="margin text-xxl text-black text-blod" @click="focus = true">
				<view v-if="focus" class="flex" style="background: rgba(0, 0, 0, .1); border-radius: 32rpx;">
					<input v-model="nickname" type="nickname" focus placeholder="请输入昵称"
						style="width: 400rpx; padding: 0 24rpx;" @confirm="saveNickname()" />
					<button class="cu-btn round margin-left bg-green shadow" @click="saveNickname()">保存昵称</button>
				</view>
				<template v-else>
					<text class="text-bold">{{ user.nickname || '微信用户' }}</text>
					<text class="cuIcon-edit margin-left-xs text-xl text-black" style="text-shadow: none;"></text>
				</template>
			</view>
			<view class="margin-bottom text-black text-bold" @click="$copy(user.openid)">
				<text>ID:</text>
				<text>{{ (user.openid || '').slice(0, 4) }}****{{ (user.openid || '').slice(-5, -1) }}</text>
				<text class="cuIcon-copy margin-left-xs text-black" style="text-shadow: none;"></text>
			</view>
		</view>

		<view class="relative cu-list menu card-menu sm-border margin-top-sm margin-bottom-sm shadow radius-lg">
			<navigator url="/pages/用户中心/我的收藏/我的收藏" class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-favorfill text-yellow"></text>
					<text class="text-black">我的收藏</text>
				</view>
			</navigator>
			<navigator url="/pages/用户中心/我的能量/我的能量" class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-lightauto text-green"></text>
					<text class="text-black">我的能量</text>
				</view>
			</navigator>
			<navigator url="/pages/用户中心/我的分享/我的分享" class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-wefill text-red"></text>
					<text class="text-black">我的分享</text>
				</view>
			</navigator>
			<navigator url="/pages/用户中心/找到组织/找到组织" class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-github text-black"></text>
					<text class="text-black">找到组织</text>
				</view>
			</navigator>
			<navigator url="/pages/用户中心/关于小程序/关于小程序" class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-link text-green"></text>
					<text class="text-black">关于小程序</text>
				</view>
			</navigator>
		</view>

		<view class="relative cu-list menu card-menu sm-border margin-top-sm shadow-lg">
			<view class="cu-item">
				<button class='cu-btn content' open-type='contact'>
					<text class='cuIcon-service text-orange text-xl'></text>
					<text class='text-l text-black'>联系作者</text>
				</button>
			</view>
			<view class="cu-item">
				<button class='cu-btn content' open-type='feedback'>
					<text class='cuIcon-write text-cyan text-xl'></text>
					<text class='text-l text-black'>意见反馈</text>
				</button>
			</view>
		</view>
		<view v-if="ip" class="relative margin-top text-center" @click="$copy(ip)">
			<text>本机IP：{{ ip }}</text>
			<text class=" cuIcon-copy"></text>
		</view>
	</view>
</template>

<script>
	import dayjs from 'dayjs'
	export default {
		data() {
			return {
				ip: '',
				city: null,
				focus: false,
				nickname: '',
				condition: null,
				bg: getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)[0],
			}
		},
		computed: {
			user() {
				return this.$store.state.user || {}
			},
		},
		onShow() {
			this.bg = getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)[0]
			uni.request({
				url: "https://api.oioweb.cn/api/weather/GetWeather"
			}).then(({
				data
			}) => {
				this.city = data.result.city
				this.condition = data.result.condition
			})
			uni.request({
				url: "https://api.vvhan.com/api/visitor.info"
			}).then(({
				data
			}) => {
				this.ip = data.ip
			})

		},
		methods: {
			async chooseavatar(e) {
				const filePath = e.target.avatarUrl
				this.$loading()
				if (this.user.avatar) {
					await this.setting({
						avatar: "",
						_avatar: this.user.avatar
					})
				}
				uniCloud.uploadFile({
					filePath: filePath,
					cloudPathAsRealPath: true,
					cloudPath: `/ToolBox365/avatar/${dayjs().format('YYYY-MM-DD_HH:mm:ss')}_${this.user.openid}.png`,
				}).then(res => {
					console.log(res)
					this.$store.state.user.avatar = res.fileID
					this.setting({
						avatar: this.$store.state.user.avatar
					})
				}).catch(() => this.$loaded())
			},
			saveNickname() {
				if ((this.nickname || '').trim()) {
					this.$loading()
					this.$('/msg_sec_check', {
						content: this.nickname.trim()
					}).then(res => {
						this.$store.state.user.nickname = this.nickname.trim()
						this.setting({
							nickname: this.$store.state.user.nickname
						})

					}).finally(() => {
						this.nickname = ''
						this.focus = false
						this.$loaded()
					})
				} else {
					this.$toast('请输入昵称')
				}
			},
			setting(payload) {
				this.$('/setting', payload).finally(() => {
					this.$loaded()
				})
			},
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
			// font-size: 13pt;
			// font-weight: bold;
		}

		.relative {
			z-index: 2;
			position: relative;
		}

		.UCenter-bg {
			/* background-image: url(https://image.weilanwl.com/color2.0/index.jpg); */
			background-size: cover;
			display: flex;
			justify-content: center;
			overflow: hidden;
			position: relative;
			flex-direction: column;
			align-items: center;
			color: #fff;
			font-weight: 300;
			overflow: hidden;
			text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
		}

		.UCenter-bg .text {
			opacity: 0.8;
		}

		.png {
			width: 200rpx !important;
			height: 200rpx !important;
			overflow: hidden;
			border-radius: 50%;
		}

		.UCenter-bg .gif-wave {
			position: absolute;
			width: 100%;
			bottom: 0;
			left: 0;
			z-index: 99;
			mix-blend-mode: screen;
			height: 100rpx;
		}
	}
</style>