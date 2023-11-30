<template>
	<view v-show="showList.length" class="index padding bg-white shadow margin radius">
		<view class="text-bold text-black text-lg flex flex_sb">
			<text>你好，我是 ToolBox AI </text>
			<view v-show="len" class="flex bg-gray" style="width: 42rpx; height: 42rpx;" @click="close">
				<text class="cuIcon-close"></text>
			</view>
		</view>
		<view class="margin-top-xs text-sm">作为你的智能伙伴，我既能写文案、想点子，又能陪你聊天、答疑解惑。</view>
		<view class="margin-top margin-bottom-xs text-sm">
			<text>你可以试着问我：</text>
		</view>
		<view class="flex flex-wrap justify-between">
			<view v-for="(item, index) in showList" :key="index"
				class="margin-bottom-xs radius padding-sm padding-right-xs shadow" :class="item.bg"
				style="width: 312rpx; position: relative; min-height: 160rpx;" @click="chat(item)">
				<view class="text-bold text-black flex justify-start">
					<image v-if="item.categoryIcon" class="margin-right-xs" style="width: 34rpx; height: 34rpx;"
						:src="item.categoryIcon" mode="scaleToFill" />
					<view class="text-cut text-df" style="width: calc(100% - 28rpx);"> {{ item.tag }}</view>
				</view>
				<rich-text :nodes="item.content" class="margin-top-sm text-cut-2 text-sm text-bold"></rich-text>
			</view>
		</view>
		<button class="cu-btn round xs lines-blue block  margin-tb-sm" @click="$parent.showQuestions()">查看更多</button>
		<button class="cu-btn round xs lines-green block" @click="refersh()">换一换</button>
	</view>
</template>

<script>
import dayjs from 'dayjs'
export default {
	name: "AIRandomBox",
	props: {
		len: {
			default: 0,
			type: Number,
		}
	},
	data() {
		return {
			list: [],
			showList: []
		};
	},
	created() {
		this.$('/box/refresh').then(data => {
			this.list = data
			this.refersh()
		})
	},
	methods: {
		// 点击换一换
		refersh() {
			const bgs = getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)
			this.showList = this.list.slice().sort(() => Math.random() - 0.5).slice(0, 6).map((e, i) => ({ ...e, bg: bgs[i] }))
			setTimeout(() => {
				this.$parent.scroll++
			})
		},
		// 点击内容
		chat({ content }) {
			this.$parent.chat = content.replace(/\<.+?\>/g, '').replaceAll('[', '').replaceAll(']', '')
			this.$parent.send()
			this.$store.state.user.show_random_box = false
			uni.setStorageSync('hide_random_box', dayjs().format('YYYY-MM-DD'));
		},
		// 点击关闭
		close() {
			this.$store.state.user.show_random_box = false
			this.$toast('关闭成功，今日不再显示，可以在设置中再次打开')
			uni.setStorageSync('hide_random_box', dayjs().format('YYYY-MM-DD'));
		}
	}
}
</script>

<style lang="scss" scoped></style>