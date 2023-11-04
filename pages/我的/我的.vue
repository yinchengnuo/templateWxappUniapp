<template>
	<view class="index bg-gradual-blue-light" style="position: relative; min-height: 100vh; overflow: hidden;">
		<!-- <image class="w100 h100" src="https://image.meiye.art/pic_35kWMSWQNb6oPF4XF4MNR"
			style="position: absolute; top: 0; left: 0; z-index: 0; opacity: .8;" mode="aspectFill"></image> -->
		<image class=".page_bg" mode="aspectFill"
			src='https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/page_bg.png'></image>

		<image mode="widthFix" style="opacity: .9; width: 100%;"
			src="https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/logo.png"></image>
		<!-- <view class="UCenter-bg">
			<image src="https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/logo.png" class="png" mode="widthFix"></image>
			<view class="text-xl text-orange text-blod">ColorUI GA
				<text class="text-df">v2.1.1</text>
			</view>
			<text class="margin-top-sm text-orange">By: L.</text>
			<text class="margin-top-sm text-gray">最近更新：2023/2/5</text>
		</view> -->
		<!-- <view class="margin">
			<view class="padding-bottom flex text-center">
				<view class="flex flex-sub flex-column text-orange">
					<view class="text-xxl text-bold">{{modelTotal}}</view>
					<view class="margin-top-xs">
						<text class="cuIcon-circlefill"></text> 样式
					</view>
				</view>
				<view class="flex flex-sub flex-column text-blue">
					<view class="text-xxl text-bold">{{templateCount}}</view>
					<view class="margin-top-xs">
						<text class="cuIcon-newsfill"></text> 模板
					</view>
				</view>
				<view class="flex flex-sub flex-column text-pink">
					<view class="text-xxl text-bold">{{visitTotal}}</view>
					<view class="margin-top-xs">
						<text class="cuIcon-attentionfill"></text> 访问
					</view>
				</view>
				<view class="flex flex-sub flex-column text-green">
					<view class="text-xxl text-bold">{{usersCount}}</view>
					<view class="margin-top-xs">
						<text class="cuIcon-myfill"></text> 用户
					</view>
				</view>
			</view>
		</view> -->

		<view class="cu-list menu card-menu sm-border margin-top-sm margin-bottom-sm shadow radius-lg">
			<view class="cu-item arrow" bindtap="toPage" data-url="/pages/about/about/about">
				<view class="content">
					<image src="https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/logo.png"
						class="png" mode="aspectFit"></image>
					<text>关于小程序</text>
				</view>
			</view>
			<view class="cu-item arrow" bindtap="toPage" data-url="/pages/about/log/log">
				<view class="content">
					<text class="cuIcon-formfill text-blue"></text>
					<text>更新日志</text>
				</view>
			</view>
			<view class="cu-item arrow" bindtap="toPage" data-url="/pages/about/appreciate/appreciate">
				<view class="content">
					<text class="cuIcon-wefill text-red"></text>
					<text>致谢</text>
				</view>
			</view>
			<view class="cu-item" bindtap="CopyText" data-link="https://github.com/XiaokangLei/ColorUI-GA">
				<view class="content">
					<text class="cuIcon-github text-black"></text>
					<text>源码开源</text>
				</view>
				<view class="cuIcon-copy text-blue"></view>
			</view>
			<view class="cu-item" bindtap="CopyText" data-link="https://one.x-artspace.cn/ColorUI-GA-Docs">
				<view class="content">
					<text class="cuIcon-link text-green"></text>
					<text>文档链接</text>
				</view>
				<view class="cuIcon-copy text-blue"></view>
			</view>
		</view>

		<view class="cu-list menu card-menu sm-border margin-top-sm shadow-lg">
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
		<view class="margin-top">
			<template is="copyright"></template>
		</view>

		<!-- <view class="cu-tabbar-height"></view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bg: getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)[0],
			}
		},
		onShow() {
			this.bg = getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)[0]
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.index {
		.page_bg {
			top: 0;
			left: 0;
			z-index: 1;
			width: 100%;
			height: 100vh;
			position: fixed;
		}

		.page_title {
			font-size: 13pt;
			font-weight: bold;
		}
	}
</style>