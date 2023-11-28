<template>
	<view v-show="showList.length" class="index padding bg-white shadow margin radius">
		<view class="text-bold text-black text-lg flex flex_sb">
			<text>你好，我是 ToolBox AI </text>
			<text class="cuIcon-close"></text>
		</view>
		<view class="margin-top-xs text-sm">作为你的智能伙伴，我既能写文案、想点子，又能陪你聊天、答疑解惑。</view>
		<view class="margin-top margin-bottom-xs text-sm">
			<text>你可以试着问我：</text>
		</view>
		<view class="flex flex-wrap justify-between">
			<view v-for="(item, index) in showList" :key="index" class="margin-bottom-xs radius padding-sm padding-right-xs"
				:class="item.bg" style="width: 312rpx; position: relative;" @click="chat(item)">
				<view class="text-bold text-black flex justify-start">
					<image class="margin-right-xs" style="width: 34rpx; height: 34rpx;" :src="item.categoryIcon"
						mode="scaleToFill" />
					<view class="text-cut" style="width: calc(100% - 28rpx);"> {{ item.tag }}</view>
				</view>
				<rich-text :nodes="item.content" class="margin-top-sm text-cut-2"></rich-text>
			</view>
		</view>
		<button class="cu-btn round xs line-blue block  margin-tb-xs" @click="$parent.showQuestions()">查看更多</button>
		<button class="cu-btn round xs line-green block" @click="refersh()">换一换</button>
	</view>
</template>

<script>
export default {
	name: "AIRandomBox",
	data() {
		return {
			list: [],
			showList: []
		};
	},
	created() {
		this.$('/box/refresh').then(data => {
			this.list = data.map((e, i) => ({ ...e, bg: getApp().globalData.bgClass.slice()[(i % 6)] }))
			this.refersh()
		})
	},
	methods: {
		refersh() {
			this.showList = this.list.slice().sort(() => Math.random() - 0.5).slice(0, 6)
			setTimeout(() => {
				this.$parent.scroll++
			})
		},
		chat(item) {
			this.$emit('chat', item.content.replace(/\<.+?\>/g, '').replaceAll('[', '').replaceAll(']', ''))
		}
	}
}
</script>

<style lang="scss" scoped></style>