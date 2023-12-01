<template>
	<view class="index" :class="className">
		<view class="cu-list menu card-menu sm-border shadow radius-lg">
			<view class="cu-bar">
				<view class="action">
					<text class="text-bold">ToolBox AI 百宝箱</text>
				</view>
				<view class="flex" style="width: 42rpx; height: 42rpx;" @click="$parent.page_container_show = false">
					<text class="cuIcon-close"></text>
				</view>
			</view>
		</view>
		<swiper class="h" :current="active" @change="({ detail }) => active = detail.current">
			<swiper-item class="h">
				<scroll-view scroll-y show-scrollbar enhanced scroll-with-animation enable-passive using-sticky :bounces="false"
					class="h" style="background: linear-gradient(rgba(255, 255, 255, .318), rgba(255, 255, 255, 0));">
					<view class="flex flex-wrap justify-between padding-sm">
						<view v-for="(item, index) in list1" :key="index"
							class="margin-bottom-sm radius padding-sm padding-right-xs shadow" :class="item.bg"
							style="width: 348rpx; position: relative; min-height: 188rpx;" @click="chat(item)">
							<view class="text-bold text-black flex justify-start">
								<image v-if="item.icon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx;"
									:src="item.icon" mode="aspectFill" />
								<view class="text-cut text-df" style="width: calc(100% - 28rpx);"> {{ item.tag }}</view>
							</view>
							<rich-text :nodes="item.content" class="margin-top-sm text-sm text-cut-2 text-bold"></rich-text>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="h100">
				<scroll-view scroll-y show-scrollbar enhanced scroll-with-animation enable-passive using-sticky :bounces="false"
					class="h" style="background: rgba(255, 255, 255, .618);">
					<view class="flex flex-wrap justify-between padding-sm">
						<view v-for="(item, index) in list2" :key="index"
							class="margin-bottom-sm radius padding-sm padding-right-xs shadow" :class="item.bg"
							style="width: 348rpx; position: relative; min-height: 188rpx;" @click="chat(item)">
							<view class="text-bold text-black flex justify-start">
								<image v-if="item.icon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx;"
									:src="item.icon" mode="aspectFill" />
								<view class="text-cut text-df" style="width: calc(100% - 28rpx);"> {{ item.tag }}</view>
							</view>
							<rich-text :nodes="item.content" class="margin-top-sm text-sm text-cut-2 text-bold"></rich-text>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="h100">
				<scroll-view scroll-y show-scrollbar enhanced scroll-with-animation enable-passive using-sticky :bounces="false"
					class="h" style="background: rgba(255, 255, 255, .618);">
					<view class="flex flex-wrap justify-between padding-sm">
						<view v-for="(item, index) in list3" :key="index"
							class="margin-bottom-sm radius padding-sm padding-right-xs shadow" :class="item.bg"
							style="width: 348rpx; position: relative; min-height: 188rpx;" @click="chat(item)">
							<view class="text-bold text-black flex justify-start">
								<image v-if="item.icon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx;"
									:src="item.icon" mode="aspectFill" />
								<view class="text-cut text-df" style="width: calc(100% - 28rpx);"> {{ item.tag }}</view>
							</view>
							<rich-text :nodes="item.content" class="margin-top-sm text-sm text-cut-2 text-bold"></rich-text>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="h100">
				<view class="h100">C</view>
			</swiper-item>
			<swiper-item class="h100">
				<view class="h100">C</view>
			</swiper-item>
			<swiper-item class="h100">
				<scroll-view scroll-y show-scrollbar enhanced scroll-with-animation enable-passive using-sticky :bounces="false"
					class="h" style="background: rgba(255, 255, 255, .618);">
					<view class="flex flex-wrap justify-between padding-sm">
						<view v-for="(item, index) in list4" :key="index"
							class="margin-bottom-sm radius padding-sm padding-right-xs shadow" :class="item.bg"
							style="width: 348rpx; position: relative; min-height: 188rpx;" @click="chat(item)">
							<view class="text-bold text-black flex justify-start">
								<image v-if="item.icon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx;"
									:src="item.icon" mode="aspectFill" />
								<view class="text-cut text-df" style="width: calc(100% - 28rpx);"> {{ item.tag }}</view>
							</view>
							<rich-text :nodes="item.content" class="margin-top-sm text-sm text-cut-2 text-bold"></rich-text>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<view class="cu-bar tabbar bg-white shadow" style="padding: 0;">
			<view class="flexc radius flex1 h100" :class="active === 0 ? className : ''" @click="active = 0">
				<view class="cu-tag badge bg-red">{{ list1.length }}</view>
				<text class="text-lg" :class="active === 0 ? 'cuIcon-hotfill' : 'cuIcon-hot'"></text>
				<text class="text-sm text-bold">今日热门</text>
			</view>
			<view class="flexc radius flex1 h100" :class="active === 1 ? className : ''" @click="active = 1">
				<view class="cu-tag badge bg-red">{{ list2.length }}</view>
				<text class="text-lg" :class="active === 1 ? 'cuIcon-friendfill' : 'cuIcon-friend'"></text>
				<text class="text-sm text-bold">大家都在问</text>
			</view>
			<view class="flexc radius flex1 h100" :class="active === 2 ? className : ''" @click="active = 2">
				<view class="cu-tag badge bg-red">{{ list3.length }}</view>
				<text class="text-lg" :class="active === 2 ? 'cuIcon-creativefill' : 'cuIcon-creative'"></text>
				<text class="text-sm text-bold">提效 Max</text>
			</view>
			<view class="flexc radius flex1 h100" :class="active === 3 ? className : ''" @click="active = 3">
				<view class="cu-tag badge bg-red">{{ scene.reduce((t, e) => t + e.promptLibs.length, 0) }}</view>
				<text class="text-lg" :class="active === 3 ? 'cuIcon-cardboardfill' : 'cuIcon-cardboard'"></text>
				<text class="text-sm text-bold">18大场景</text>
			</view>
			<view class="flexc radius flex1 h100" :class="active === 4 ? className : ''" @click="active = 4">
				<view class="cu-tag badge bg-red">{{ career.reduce((t, e) => t + e.promptLibs.length, 0) }}</view>
				<text class="text-lg" :class="active === 4 ? 'cuIcon-discoverfill' : 'cuIcon-discover'"></text>
				<text class="text-sm text-bold">10大职业</text>
			</view>
			<view class="flexc radius flex1 h100" :class="active === 5 ? className : ''" @click="active = 5">
				<view class="cu-tag badge bg-red">{{ list4.length }}</view>
				<text class="text-lg" :class="active === 5 ? 'cuIcon-attentionfill' : 'cuIcon-attention'"></text>
				<text class="text-sm text-bold">最近更新</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "AIQuestions",
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			list1: [],
			list2: [],
			list3: [],
			list4: [],
			scene: [],
			active: 0,
			career: [],
			className: '',
		};
	},
	watch: {
		show() {
			if (!this.list1.length) {
				this.$loading()
				this.$('/box/chosen').then(data => {
					let bgs = getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)
					this.list1 = data.filter(e => e.type === 'hot').map((e, i) => ({ ...e, bg: bgs[(i % 8)] }))
					bgs = getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)
					this.list2 = data.filter(e => e.type === 'everyone').map((e, i) => ({ ...e, bg: bgs[(i % 8)] }))
					bgs = getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)
					this.list3 = data.filter(e => e.type === 'max').map((e, i) => ({ ...e, bg: bgs[(i % 8)] }))
					bgs = getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)
					this.list4 = data.filter(e => e.type === 'recent').map((e, i) => ({ ...e, bg: bgs[(i % 8)] }))
				}).finally(() => {
					this.$loaded()
				})
				this.$('/box/scene').then(data => {
					this.scene = data
				})
				this.$('/box/career').then(data => {
					this.career = data
				})
			}
		},
		active: {
			handler() {
				this.className = getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)[0]
			},
			immediate: true
		}
	},
	methods: {
		chat({ content }) {
			this.$parent.chat = content.replace(/\<.+?\>/g, '').replaceAll('[', '').replaceAll(']', '')
			this.$parent.send()
			this.$parent.page_container_show = false
			this.$store.state.user.show_random_box = false
		}
	}
}
</script>

<style lang="scss" scoped>
.h {
	height: 61.8vh;
}

.flex1 {
	position: relative;
}

.cu-tag {
	top: 0rpx !important;
	right: 10rpx !important;
}

.text-sm {
	line-height: 2;
}
</style>