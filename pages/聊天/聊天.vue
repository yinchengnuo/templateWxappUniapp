<template>
	<view class="index">
		<image class=".page_bg" mode="aspectFill" src='/static/page_bg.png'></image>
		<view class="page_title flex" :style="{
				marginTop: `${$app().globalData.menuButtonBoundingClientRect.top}px`, height: `${$app().globalData.menuButtonBoundingClientRect.height}px` 
			}">有问题，问AI</view>
		<scroll-view scroll-y :scroll-top="scroll"
			:style="{  height: `calc(100vh - ${$app().globalData.menuButtonBoundingClientRect.bottom}px - 84rpx)` }">
			<view class="cu-chat">
				<template v-for="(item, index) in list">
					<view v-if="item.type === 'chat'" :key="index" class="cu-item self"
						style="padding: 12rpx 24rpx 48rpx;">
						<view class="main" style="margin: 0 24rpx 0 0; max-width: calc(100% - 210rpx);">
							<view class="content bg-green shadow">
								<text>{{ item.content }}</text>
							</view>
						</view>
						<open-data class="cu-avatar radius" type="userAvatarUrl"></open-data>
						<view class="date" style="bottom: 10rpx;">
							<text>{{ item.time }}</text>
							<text class="cuIcon-lightauto text-green"
								style="position: absolute; top: -6rpx; left: calc(100% + 48rpx); white-space: nowrap;">-{{ item.energy }}</text>
						</view>
					</view>

					<view v-if="item.type === 'reply'" :key="index" class="cu-item" style="padding: 12rpx 24rpx 48rpx;">
						<view class="cu-avatar radius">
							<image src="../../static/openai.png" class="w100 h100"></image>
						</view>
						<view class="main" style="margin: 0 0 0 24rpx; max-width: calc(100% - 210rpx);">
							<view class="content shadow">
								<text>{{ item.content }} <text v-if="ing">...</text> </text>
							</view>
						</view>
						<view class="date" style="bottom: 10rpx;">
							<text class="cuIcon-lightauto text-green"
								style="position: absolute; top: -4rpx; right: calc(100% + 48rpx); white-space: nowrap;">-{{ item.energy }}</text>
							<text>{{ item.time }}</text>
						</view>
					</view>
				</template>
				<view style="height: 48rpx;"></view>
			</view>
		</scroll-view>
		<view class="cu-bar foot input">
			<view class="action">
				<text class="cuIcon-settings text-grey"></text>
			</view>
			<input class="solid-bottom" v-model="chat" @confirm="send"></input>
			<button class="cu-btn bg-green shadow" @click="send">发送</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				chat: '',
				ing: false,
				scroll: 999999999,
			}
		},
		created() {
			this.$('/chat_record').then(data => {
				console.log(data)
				if (data.length) {
					data.forEach(e => {
						this.list.push({
							type: 'chat',
							content: e.chat,
							time: e.chat_time,
							energy: e.promptTokens
						})
						this.list.push({
							type: 'reply',
							content: e.reply,
							time: e.reply_time,
							energy: e.completionTokens
						})
						setTimeout(() => this.scroll++)
					})
				}
			})
		},
		methods: {
			async send() {
				if (this.ing) {
					return this.$toast('AI正在生成对话，请稍后再试')
				}
				if (this.chat.trim()) {
					this.ing = true
					const chat = {
						energy: 0,
						type: 'chat',
						content: this.chat,
						time: (new Date).toLocaleString()
					}
					const reply = {
						time: '',
						energy: 0,
						content: '',
						type: 'reply',
					}
					this.list.push(chat)
					this.list.push(reply)
					setTimeout(() => this.scroll++)
					this.$('/chat', {
						chat: this.chat
					}).then(data => {
						chat.time = data.chat_time
						reply.content = data.reply
						reply.time = data.reply_time
						chat.energy = data.promptTokens
						reply.energy = data.completionTokens
						setTimeout(() => this.scroll++)
					}).finally(() => {
						this.ing = false
					})
					this.chat = ''
				} else {
					this.$toast('请输入文字')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		.page_bg {
			top: 0;
			left: 0;
			z-index: 0;
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