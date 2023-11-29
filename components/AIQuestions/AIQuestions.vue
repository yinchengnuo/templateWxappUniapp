<template>
	<view class="index">
		<view class="cu-list menu card-menu sm-border margin-top-sm shadow radius-lg"
			style="margin-left: 25rpx;margin-right: 25rpx;">
			<view class="cu-bar bg-white">
				<view class="action">
					<!-- <text class="cuIcon-titles text-grey"></text> -->
					<text class="text-bold">ToolBox AI 百宝箱</text>
				</view>
			</view>
		</view>
		<view class="cu-bar tabbar bg-white margin-top-xs">
			<view class="action">
				<view class="cuIcon-cu-image">
					<text class="cuIcon-hotfill"></text>
					<view class="cu-tag badge">99</view>
				</view>
				<view class="text-blue">今日热门</view>
			</view>
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/ai_box/热门.png"></image>
					<view class="cu-tag badge">99</view>
				</view>
				<view class="text-blue">大家都在问</view>
			</view>
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/ai_box/热门.png"></image>
					<view class="cu-tag badge">99</view>
				</view>
				<view class="text-blue">提效 Max</view>
			</view>
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/ai_box/热门.png"></image>
					<view class="cu-tag badge">99</view>
				</view>
				<view class="text-blue">17大场景</view>
			</view>
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/ai_box/热门.png"></image>
					<view class="cu-tag badge">99</view>
				</view>
				<view class="text-blue">9大职业</view>
			</view>
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/ai_box/热门.png"></image>
					<view class="cu-tag badge">99</view>
				</view>
				<view class="text-blue">最近更新</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "AIQuestions",
	data() {
		return {

		};
	}
}
</script>

<style lang="scss"></style>