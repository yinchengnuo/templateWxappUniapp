<template>
	<view class="swiper-item" style="position: relative;">
		<view class="" style="position: absolute; top: 0rpx; left: 0rpx; right: 0; bottom: 0;  z-index: 1;">
			<image click="shadow bg-white"
				style="width: 176rpx;height: 176rpx; position: absolute; top: 28rpx; right: 28rpx;" :src="item.icon">
			</image>
			<view class="h100" style="background: linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .9));">
				<view class="text-sl"
					style="position: absolute; top: 28rpx; left: 28rpx; font-weight: bolder; text-shadow: 0rpx 0rpx 12rpx #fff;">
					<text>No.{{ index + 1 }}</text>
					<text class="cuIcon-attention"
						style="font-size: 28rpx; margin-left: 24rpx; color: #FCFCFC;">{{ item.view_num }}</text>
				</view>
				<view
					style="position: absolute; left: 0; bottom: 0; width: 100%; box-sizing: border-box; padding: 28rpx 14rpx;">
					<view class="text-xxxl" :class="'text-' + item.color.split(' ')[0]" style="font-weight: bolder;">
						{{ item.name }}
					</view>
					<view class="text-xl" :class="'text-' + item.color">
						{{ item.desc }}
					</view>
				</view>
			</view>
		</view>
		<image :src="item.image" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default {
		props: ['item', 'index'],
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
</style>