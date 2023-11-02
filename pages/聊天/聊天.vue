<template>
	<view class="index">
		<image class=".page_bg" mode="aspectFill"
			src='https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/page_bg.png'></image>
		<view class="flex" style="box-sizing: border-box; padding: 0 30rpx; position: relative;" :style="{
				marginTop: `${$app().globalData.menuButtonBoundingClientRect.top}px`, height: `${$app().globalData.menuButtonBoundingClientRect.height}px` 
			}">
			<view class="flex h100" style="position: absolute; top: 0; left: 0; padding: 0 30rpx; font-weight: bolder;">
				<text class="cuIcon-lightauto text-green text-shadow">{{ user.energy }}</text>
				<text class="cuIcon-unfold text-green text-shadow" style="margin: 0 6rpx;"></text>
			</view>
			<text class="page_title ">有问题，问AI</text>
		</view>
		<scroll-view scroll-y :scroll-top="scroll"
			:style="{  height: `calc(100vh - ${$app().globalData.menuButtonBoundingClientRect.bottom}px - 84rpx)` }">
			<view class="cu-chat">
				<template v-for="(item, index) in list">
					<view v-if="item.type === 'chat'" :key="index" class="cu-item self"
						style="padding: 12rpx 24rpx 48rpx;">
						<view class="main" style="margin: 0 24rpx 0 0; max-width: 494rpx;">
							<view class="content bg-green shadow">
								<text @longpress="longpress(item.content)">{{ item.content }}</text>
							</view>
						</view>
						<open-data class="cu-avatar radius" type="userAvatarUrl"></open-data>
						<view class="date" style="bottom: 8rpx; left: auto; right: 128rpx;">
							<text>{{ item.time }}</text>
							<text class="cuIcon-lightauto text-green flex"
								style="position: absolute; 100%; left: 100%; top: 0; white-space: nowrap; width: 128rpx;">-{{ item.energy }}</text>
						</view>
					</view>

					<view v-if="item.type === 'reply'" :key="index" class="cu-item" style="padding: 12rpx 24rpx 48rpx;">
						<view class="cu-avatar radius">
							<image
								src="https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/openai.png"
								class="w100 h100"></image>
						</view>
						<view class="main" style="margin: 0 0 0 24rpx; max-width: 494rpx;">
							<view class="content shadow">
								<text @longpress="longpress(item.content)">{{ item.content }} </text>
								<LoadingSpin v-if="ing && index === list.length - 1"></LoadingSpin>
							</view>
						</view>
						<view class="date" style="bottom: 8rpx; right: auto; left: 128rpx;">
							<text class="cuIcon-lightauto text-green flex"
								style="position: absolute; left: -128rpx; width: 128rpx; top: 0; white-space: nowrap;">-{{ item.energy }}</text>
							<text>{{ item.time }}</text>
						</view>
					</view>
				</template>
				<view style="height: 48rpx;"></view>
			</view>
		</scroll-view>
		<view class="cu-bar foot input" style="bottom: 1rpx;">
			<view class="action">
				<text class="cuIcon-settings text-grey"></text>
			</view>
			<input class="solid-bottom" v-model="chat" @confirm="send"
				style="background: #EDEDED; border-radius: 8rpx; margin: 0 10rpx; padding: 0 20rpx; box-sizing: border-box;"></input>
			<view class="action">
				<text class="cuIcon-roundadd text-grey"></text>
			</view>
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
		computed: {
			user() {
				return this.$store.state.user
			},
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
			longpress(content) {
				this.$copy(content)
			},
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
						this.$store.state.user.energy -= data.totalTokens
					}).finally(() => {
						this.ing = false
					})
					this.chat = ''
				} else {
					this.$toast('请输入问题')
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
			z-index: -1;
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