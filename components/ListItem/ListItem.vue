<template>
	<view class="index">
		<image src='https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/list_item_bg.svg'
			mode='widthFix' class='item_bg'></image>
		<view class="flex flex_sb nav-title">
			<view :style="{ textShadow: '0 0 2rpx ' + item.color.split(' ')[0] }">{{ item.name }}</view>
			<image style="width: 88rpx;height: 88rpx;" :src="item.icon"></image>
		</view>
		<view :class="['text-shadow', 'color-' + item.color]" style="font-weight: bolder;margin: 8rpx 0rpx;">
			{{ item.desc }}
		</view>
		<view class="flex flex_sb">
			<view class="cuIcon-peoplefill text-progress"><text style="margin-left: 8rpx;font-weight: bold;">{{ item.user_num
			}}</text></view>
			<view class="cuIcon-favorfill text-orange"><text style="margin-left: 8rpx;font-weight: bold;">{{ item.collect_num
			}}</text></view>
			<text class="cuIcon-attentionfill text-black"><text style="margin: 0 28rpx 0 8rpx;font-weight: bold">{{
				item.view_num }}</text>
			</text>
		</view>
	</view>
</template>

<script>
export default {
	name: "ListItem",
	props: ['item'],
	data() {
		return {

		};
	}
}
</script>

<style lang="scss" scoped>
.index {
	width: 100%;
	height: 100%;
	position: relative;

	.item_bg {
		z-index: -2;
		height: 100%;
		opacity: 0.5;
		position: absolute;
		margin: -8rpx 0rpx 0rpx -32rpx
	}
}
</style>