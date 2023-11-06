<template>
	<Page type="S1" ref="Page">
		<view class="index">
			<view class="flex padding-sm justify-between solid-bottom">
				<view class="flex">
					<view class="padding-lr-xs">
						<view class="cu-avatar lg round"
							style="background-image:url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1);">
						</view>
					</view>
					<view class="padding-xs text-xl text-black">
						<view>小可</view>
						<view class="text-sm text-gray padding-top-xs">北京朝阳三里屯店</view>
					</view>
				</view>
				<view class="text-gray text-sm padding-right padding-top-sm">工号：1000200000</view>
			</view>
			<!-- 打卡信息-时间轴 -->
			<!-- <view class="margin-sm margin-top">
				<view class="text-gray padding-bottom">打卡信息：</view>
				<view class="cu-timeline">
					<view class="cu-item cur cuIcon-noticefill">
						<view class="content bg-blue light shadow-blur">
							<text class="cuIcon-time">{{now_time_stop}} </text>
							<view class="cuIcon-location padding-top-xs">北京朝阳三里屯店</view>
						</view>
						<view class="content bg-gray shadow-blur">
							<text class="text-orange">上班未打卡</text>
						</view>
					</view>
					<view class="cu-item cur cuIcon-noticefill">
						<view class="content bg-blue light shadow-blur">
							<text class="cuIcon-time">{{now_time_stop_end}} </text>
							<view class="cuIcon-location padding-top-xs">北京朝阳三里屯店</view>
						</view>
						<view class="content bg-gray shadow-blur">
							<text class="text-orange">下班未打卡</text>
						</view>
					</view>
				</view>
			</view> -->
			<view class="margin-top-xl">
				<view class="flex justify-center">
					<view class="cu-clockin-time flex justify-center align-center" :animation="animationData"
						catchtap="clockInStart">
						<view class="text-white" style="z-index: 99;">
							<text class="text-xxl">今日签到</text>
						</view>
					</view>
					<view class="cu-clockin-time_over flex justify-center align-center" catchtap="clockInStart">
						<text class="text-white" style="z-index: 99;">已打卡</text>
					</view>
				</view>
				<view class="margin-tb padding-tb flex justify-center align-center">
					当前位置：<text class="cuIcon-location">213123</text>
					<text class="padding-left text-orange">刷新</text>
				</view>
			</view>
		</view>
	</Page>
</template>

<script>
	export default {
		data() {
			return {
				now_time_stop: '',
				now_time_stop_end: '',
				animationData: {}
			}
		},
		methods: {

		},
		mounted() {
			// this.$refs.Page.showAD()
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		height: 100%;
	}
</style>