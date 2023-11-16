<template>
	<view class="index" style="overflow: hidden;">
		<image class=".page_bg" mode="aspectFill"
			src='https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/page_bg.png'></image>
		<view class="flex" style="box-sizing: border-box; padding: 0 30rpx; position: relative;" :style="{
				marginTop: `${$app().globalData.menuButtonBoundingClientRect.top}px`, height: `${$app().globalData.menuButtonBoundingClientRect.height}px` 
			}">
			<navigator url="/pages/用户中心/我的能量/我的能量" class="flex h100"
				style="position: absolute; top: 0; left: 0; padding: 0 30rpx; font-weight: bolder;">
				<text class="cuIcon-lightauto text-purple text-shadow">{{ user.energy }}</text>
				<text class="cuIcon-right text-purple text-shadow  text-blod" style="margin: 0 6rpx;"></text>
			</navigator>
			<text class="page_title text-black text-shadow">有问题，问AI</text>
		</view>
		<swiper class="tips-swiperitem" autoplay circular interval="5432" duration="4321" style="height: 64rpx;">
			<swiper-item>
				<view class="bg-blue light">
					<view class='padding-xs text-xl padding-left flex'>
						<text class='cuIcon-lightauto text-blue margin-right-xs'></text>
						<text class="text-df">10,000 能量只需一元！多买多送，最低五折！</text>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="bg-blue light">
					<view class='padding-xs text-xl padding-left flex' @click="showSettings()">
						<text class='cuIcon-magic text-blue margin-right-xs'></text>
						<text class="text-df">每日签到、邀请新用户、看视频广告都可以获取能量</text>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="bg-blue light">
					<view class='padding-xs text-xl padding-left flex' @click="showSettings()">
						<text class='icon-bug text-blue margin-right-xs'></text>
						<text class="text-df">对话不智能？试试切换AI厂商&大语音模型？</text>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="bg-blue light">
					<view class='padding-xs text-xl padding-left flex' @click="showQuestions()">
						<text class='cuIcon-searchlist text-blue margin-right-xs'></text>
						<text class="text-df">不知道问什么？看看大家怎么问</text>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="bg-blue light">
					<view class='padding-xs text-xl padding-left flex' @click="showSettings()">
						<text class='icon-bulb text-blue margin-right-xs'></text>
						<text class="text-df">设置【连续对话记忆次数】，让AI理解对话上下文</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<scroll-view scroll-y show-scrollbar enhanced scroll-with-animation enable-passive :scroll-top="scroll"
			:style="{  height: `calc(100vh - ${$app().globalData.menuButtonBoundingClientRect.bottom}px - 164rpx)` }">
			<view class="cu-chat">
				<template v-for="(item, index) in list">
					<view v-if="item.type === 'chat'" :key="index" class="cu-item self"
						style="padding: 12rpx 24rpx 48rpx;">
						<view class="main" style="margin: 0 24rpx 0 0; max-width: 494rpx;">
							<view class="content bg-green shadow">
								<text>{{ item.content }}</text>
							</view>
						</view>
						<open-data class="cu-avatar radius" type="userAvatarUrl"></open-data>
						<view class="date" style="bottom: 8rpx; left: auto; right: 128rpx;">
							<text>{{ item.time }}</text>
							<text v-if="item.energy" class="cuIcon-lightauto text-green flex"
								style="position: absolute; 100%; left: 100%; top: 0; white-space: nowrap; width: 128rpx;">-{{ item.energy }}</text>
						</view>
					</view>

					<view v-if="item.type === 'reply'" :key="index" class="cu-item" style="padding: 12rpx 24rpx 48rpx;">
						<view class="cu-avatar radius">
							<image mode="aspectFill"
								:src="'https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/' + item.provider + '.jpg'"
								class="w100 h100"></image>
						</view>
						<view class="main" style="margin: 0 0 0 24rpx; max-width: 494rpx;">
							<view class="content shadow">
								<text @longpress="longpress(item.content)">{{ item.content }} </text>
								<LoadingSpin v-if="generating && index === list.length - 1"></LoadingSpin>
							</view>
						</view>
						<view class="date" style="bottom: 8rpx; right: auto; left: 128rpx;">
							<text class="cuIcon-lightauto text-green flex"
								style="position: absolute; left: -128rpx; width: 128rpx; top: 0; white-space: nowrap;">-{{ item.energy || item._energy }}</text>
							<text>{{ item.time }}</text>
						</view>
					</view>
				</template>
			</view>
		</scroll-view>
		<view class="cu-bar foot input" style="bottom: 1rpx;">
			<view class="action" @click="showSettings()" style="margin: 0;padding: 0 20rpx;">
				<text class="cuIcon-settings text-grey" style="margin: 0;"></text>
			</view>
			<input class="solid-bottom" v-model="chat" @confirm="send" confirm-type="send" placeholder="请输入问题"
				style="background: #EDEDED; border-radius: 8rpx; margin: 0; padding: 0 20rpx; box-sizing: border-box;"></input>
			<view class="action" style="padding:  0 20rpx; margin: 0;" @click="showQuestions()">
				<text class="cuIcon-roundadd text-grey"></text>
			</view>
			<button class="cu-btn bg-green shadow" @click="send">发送</button>
		</view>
		<page-container :show="page_container_show" :z-index="2048" round
			@afterleave="page_container_show = page_container_ai_settings_show = page_container_ai_questions_show = false">
			<AISettings v-if="page_container_ai_settings_show" />
			<AIQuestions v-if="page_container_ai_questions_show" />
		</page-container>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: 0,
				list: [],
				chat: '',
				generating: false,
				scroll: 999999999,
				interstitialAd: {},
				page_container_show: false,
				page_container_ai_settings_show: false,
				page_container_ai_questions_show: false,
				bg: getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)[0]
			}
		},
		computed: {
			user() {
				return this.$store.state.user
			},
		},
		onShow() {
			this.show++
			if ((this.show !== 0) && (this.show % 4 === 0)) {
				this.interstitialAd.show()
			}
		},
		onLoad() {
			this.interstitialAd = uni.createInterstitialAd({
				adUnitId: 'adunit-e3f467955c2226a4'
			})
			this.getList()
		},
		methods: {
			showSettings() {
				this.page_container_show = true
				this.page_container_ai_settings_show = true
			},
			showQuestions() {
				this.page_container_show = true
				this.page_container_ai_questions_show = true
			},
			getList() {
				this.$loading()
				this.$('/chat_record').then(data => {
					console.log(data)
					if (data.length) {
						data.forEach(e => {
							this.list.push({
								type: 'chat',
								content: e.chat,
								time: e.chat_time,
								provider: e.provider,
								energy: e.promptTokens,
								_energy: e.totalTokens,
							})
							this.list.push({
								type: 'reply',
								content: e.reply,
								time: e.reply_time,
								provider: e.provider,
								_energy: e.totalTokens,
								energy: e.completionTokens,
							})
							setTimeout(() => this.scroll++)
						})
					}
				}).finally(() => {
					this.$loaded()
				})
			},
			async send() {
				if (this.generating) {
					return this.$toast('AI正在生成对话，请稍后再试')
				}
				if (this.$store.state.user.energy < 1) {
					return this.$toast('能量不足')
				}
				if (this.chat.trim()) {
					this.generating = true
					const chat = {
						energy: 0,
						_energy: 0,
						type: 'chat',
						content: this.chat,
						time: (new Date).toLocaleString(),
						provider: this.$store.state.user.ai_provider,
					}
					const reply = {
						time: '',
						energy: 0,
						_energy: 0,
						content: '',
						type: 'reply',
						provider: this.$store.state.user.ai_provider,
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
						chat._energy = data.totalTokens
						reply._energy = data.totalTokens
						reply.energy = data.completionTokens
						setTimeout(() => this.scroll++)
						this.$store.state.user.energy -= data.totalTokens
					}).finally(() => {
						this.generating = false
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