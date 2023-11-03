<template>
	<view>
		<view class="flex solid-bottom margin-top justify-center">
			<view class="cu-coupon-box bg-img bg-mask radius-lg padding-sm">
				<image class="w100 h100" :src="img" mode="aspectFill"
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
						<button class="cu-btn round shadow bg-green" style="margin: 0 30rpx;">看30S广告
							+2000</button>
						<button class="cu-btn round shadow bg-blue">邀请好友 +3000</button>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-coupon-box2 radius-lg " :class="bg">
			<view class="cu-tag bg-orange radius text-df padding-lr-sm">国产大模型</view>
			<view v-if="user.openid" class="flex p-xs margin-bottom-sm mb-sm shadow">
				<view class="cu-avatar xl radius margin-left  margin-right">
					<image :src="'/static/ai/' + ai.name + '.png'" class="w100 h100"></image>
				</view>
				<view class="flex-treble padding-left-sm  margin-left">
					<view class="text-black text-xxl text-bold">
						<text class="margin-right">{{ ai.name }}</text>
						<text style="margin-right">{{ (user.ai_provider || '').toUpperCase() }}</text>
						<text class="cuIcon-right"></text>
					</view>
					<view class="text-grey padding-top-xs">{{ user.ai_model }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "AISettings",
		data() {
			return {
				bg: [
					"bg-gradual-red-light",
					"bg-gradual-orange-light",
					"bg-gradual-green-light",
					"bg-gradual-purple-light",
					"bg-gradual-pink-light",
					"bg-gradual-blue-light",
					"bg-gradual-pinknew-light",
					"bg-gradual-cyan-light",
				].sort(() => Math.random() - 0.5)[0]
			};
		},
		computed: {
			img() {
				return getApp().globalData.images.slice().sort(() => Math.random() - 0.5)[0]
			},
			ai() {
				return (this.$store.state.user.ai || []).find(e => e.provider === this.$store.state.user.ai_provider) || {}
			},
			user() {
				return this.$store.state.user
			},
		},
		mounted() {
			console.log('mounted')
		}
	}
</script>

<style lang="scss">

</style>