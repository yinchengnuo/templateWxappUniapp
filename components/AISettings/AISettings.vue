<template>
	<view>
		<view class="flex solid-bottom margin-top justify-center">
			<view class="cu-coupon-box bg-img bg-mask radius-lg padding-sm">
				<image class="w100 h100" :src="image" mode="aspectFill"
					style="position: absolute; top: 0; left: 0; z-index: 1; opacity: .6;"></image>
				<view class="w100 h100 padding-sm" style="position: absolute; top: 0; left: 0; z-index: 1;">
					<view class="flex justify-between" style="position: relative; z-index: 2;">
						<view class="text-white text-xl text-bold">ToolBox AI 设置</view>
						<view class="cu-tag line-white round text-df padding">
							<text>我的能量</text>
							<text class="cuIcon-right"></text>
						</view>
					</view>
					<view v-if="user.openid"
						class="flex justify-center align-end padding-tb cu-coupon-content text-white">
						<text class="text-lg padding-bottom-xs">余额</text>
						<text class="text-sl text-bold text-shadow" style="text-shadow: 0px 0px 2rpx green">
							{{ user.energy }} </text>
						<text class="text-lg text-white text-shadow cuIcon-lightauto">能量</text>
					</view>
					<view v-if="user.openid" class="flex justify-around align-center margin-top-xl text-white">
						<button class="cu-btn round shadow bg-red">每日签到 +1000</button>
						<button class="cu-btn round shadow bg-green" style="margin: 0 30rpx;">邀请好友
							+2000</button>
						<button class="cu-btn round shadow bg-blue">看30S广告+3000</button>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-coupon-box2 radius-lg " :class="bg">
			<view class="cu-tag bg-orange radius text-df padding-lr-sm">
				{{ user.ai_provider === 'azure' ? 'OpenAI' : '国产大模型' }}
			</view>
			<view v-if="user.openid" class="flex p-xs margin-bottom-sm mb-sm shadow">
				<view class="cu-avatar xl radius margin-left  margin-right">
					<image :src="'/static/ai/' + user.ai_provider + '.png'" class="w100 h100"></image>
				</view>
				<view class="flex-treble padding-left-sm  margin-left">
					<picker class="text-black text-xxl text-bold" :value="aiNameIndex" :range="aiNameList"
						@change="chooseProvider">
						<text class="margin-right">{{ ai.name }}</text>
						<text class="cuIcon-right"></text>
					</picker>
					<picker v-if="modelList && (modelList.length > 1)" class="text-grey padding-top-xs"
						:value="modelList.indexOf(user.ai_model)" :range="modelList" @change="chooseModel">
						<text class="margin-right">{{ user.ai_model }}</text>
						<text class="cuIcon-right"></text>
					</picker>
					<view v-else class="text-grey padding-top-xs">
						{{ user.ai_model }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import dayjs from 'dayjs'
	const H = dayjs().get('hour')
	let image
	if (H >= 0 && H < 4) image = getApp().globalData.images[0]
	if (H >= 4 && H < 6) image = getApp().globalData.images[1]
	if (H >= 6 && H < 9) image = getApp().globalData.images[2]
	if (H >= 9 && H < 12) image = getApp().globalData.images[3]
	if (H >= 12 && H < 15) image = getApp().globalData.images[4]
	if (H >= 15 && H < 17) image = getApp().globalData.images[5]
	if (H >= 17 && H < 19) image = getApp().globalData.images[6]
	if (H >= 19 && H < 23) image = getApp().globalData.images[7]
	console.log(image)
	export default {
		name: "AISettings",
		data() {
			return {
				image,
				bg: ["bg-gradual-red-light", "bg-gradual-orange-light", "bg-gradual-green-light",
					"bg-gradual-purple-light", "bg-gradual-pink-light", "bg-gradual-blue-light",
					"bg-gradual-pinknew-light", "bg-gradual-cyan-light"
				].sort(() => Math.random() - 0.5)[0],
				modelList: []
			};
		},
		computed: {
			ai() {
				return (this.$store.state.user.ai || []).find(e => e.provider === this.$store.state.user.ai_provider) || {}
			},
			aiNameList() {
				return (this.$store.state.user.ai || []).map(e => e.name)
			},
			aiNameIndex() {
				return this.aiNameList.indexOf(this.ai.name)
			},
			user() {
				return this.$store.state.user
			},
		},
		methods: {
			chooseProvider(e) {
				const index = +e.detail.value
				if (index !== this.aiNameIndex) {
					console.log('change')
					const ai = this.$store.state.user.ai[index]
					this.$store.state.user.ai_provider = ai.provider
					this.modelList = ai.models
					this.$store.state.user.ai_model = ai.models[0]
					this.setting({
						ai_model: this.$store.state.user.ai_model,
						ai_provider: this.$store.state.user.ai_provider
					})
				}
			},
			chooseModel(e) {
				this.$store.state.user.ai_model = this.modelList[e.detail.value]
				this.setting({
					ai_model: this.$store.state.user.ai_model
				})
			},
			setting(payload) {
				this.$loading()
				this.$('/setting', payload).finally(() => {
					this.$loaded()
				})
			}
		}
	}
</script>

<style lang="scss">

</style>