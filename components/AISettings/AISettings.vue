<template>
	<view style="background: #efefef;overflow: hidden;">
		<view class="flex solid-bottom margin-top justify-center" style="margin-bottom: 20rpx;">
			<view class="cu-coupon-box bg-img bg-mask radius-lg padding-sm">
				<image class="w100 h100" :src="image" mode="aspectFill"
					style="position: absolute; top: 0; left: 0; z-index: 1; opacity: .6;"></image>
				<view class="w100 h100 padding-sm" style="position: absolute; top: 0; left: 0; z-index: 1;">
					<view class="flex justify-between" style="position: relative; z-index: 2;">
						<view class="text-xl text-bold text-white">ToolBox AI 设置</view>
						<view class="cu-capsule round margin-right">
							<navigator url="/pages/用户中心/我的能量" class="cu-tag bg-green">
								<text>我的能量</text>
								<text class="cuIcon-lightauto"></text>
							</navigator>
							<view class="cu-tag line-green">
								<text class="cuIcon-right text-bold"></text>
							</view>
						</view>
					</view>
					<navigator url="/pages/用户中心/我的能量" class="flex justify-center align-end padding-tb cu-coupon-content text-white">
						<text class="text-lg padding-bottom-xs text-black">余额</text>
						<text class="text-sl text-bold text-shadow " style="text-shadow: 0px 0px 2rpx green">
							{{ user.energy }} </text>
						<text class="text-lg text-green text-shadow cuIcon-lightauto">能量</text>
					</navigator>
					<view class="flex justify-around align-center margin-top-xl text-white">
						<navigator url="/pages/用户中心/我的签到">
							<button class="cu-btn round shadow bg-red">每日签到 +1000</button>
						</navigator>
						<button open-type="share" class="cu-btn round shadow bg-green" style="margin: 0 30rpx;">邀请好友
							+1000</button>
						<button class="cu-btn round shadow bg-blue" @click="showAD()">看30S广告+1000</button>
					</view>
				</view>
			</view>
		</view>
		<navigator url="/pages/用户中心/我的能量">
			<uni-notice-bar show-get-more show-icon :fontSize="16" scrollable text="能量不够用? 10,000 能量只需一元！多买多送，最低至3.3折！点我立即充值"
				style="margin-bottom: 0;" />
		</navigator>
		<view class="cu-coupon-box2 radius-lg " :class="bg" style="margin-top: 0;margin-bottom: 0;">
			<view class="cu-tag bg-orange radius text-df padding-lr-sm">
				{{ user.ai_provider === 'azure' ? 'OpenAI' : '国产大模型' }}
			</view>
			<view class="flex p-xs margin-bottom-sm mb-sm shadow">
				<view class="cu-avatar xl radius margin-left  margin-right">
					<image v-if="user.ai_provider" mode="aspectFit"
						:src="'https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/' + user.ai_provider + '.jpg'"
						class="w100 h100"></image>
				</view>
				<view class="flex-treble padding-left-sm  margin-left">
					<picker class="text-black text-xxl text-bold" :value="aiNameIndex" :range="aiNameList" @change="chooseProvider">
						<text class="margin-right">{{ ai.name }}</text>
						<text class="cuIcon-right"></text>
					</picker>
					<picker v-if="modelList && (modelList.length > 1)" class="text-grey padding-top-xs"
						:value="modelList.indexOf(user.ai_model)" :range="modelList" @change="chooseModel">
						<text class="margin-right">{{ user.ai_model }}</text>
						<text class="cuIcon-right"></text>
					</picker>
					<view v-else class="text-grey padding-top-xs">
						{{ user.ai_model }}
					</view>
				</view>
			</view>
		</view>

		<view class="cu-list menu card-menu sm-border margin-top-sm shadow radius-lg"
			style="margin-left: 25rpx;margin-right: 25rpx;">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-grey"></text>
					<text class="text-bold">AI 行为设置</text>
				</view>
				<navigator url="/pages/用户中心/关于ToolBoxAI" class='action' style="height: 100rpx; margin: 0; padding: 0 30rpx;">
					<text>关于 ToolBox AI</text>
					<text class="cuIcon-right"></text>
				</navigator>
			</view>

			<view class="cu-form-group">
				<view class="title">连续对话记忆次数</view>
				<view class="cuIcon-questionfill text-gray margin-right" style="font-size: 42rpx;" @click="showModal1">
				</view>
				<input placeholder="请输入0~9" type="number" :value="ai_memory_count" @input="input" @confirm="confirm"
					style="border: 1px solid #efefef; border-radius: 8rpx; padding: 10rpx 20rpx; height: 80rpx;" />
				<button class="cu-btn round margin-left bg-green shadow" v-if="Number(ai_memory_count) !== user.ai_memory_count"
					@click="confirm">
					保存
				</button>
				<view class="text-grey cuIcon-infofill margin-left" style="font-size: 42rpx" @click="showModal2"></view>
			</view>
			<view class="cu-item margin-bottom-sm">
				<view class="content">
					<text>ToolBox AI 随机推荐</text>
				</view>
				<view class="">
					<switch class="green radius" :checked="user.show_random_box" @change="switchChange">
					</switch>
				</view>
			</view>
			<button class="cu-btn block bg-red margin-tb-sm lg" @click="clearRecord()">清空聊天记录</button>
			<button class="cu-btn block bg-grey margin-tb-sm lg" @click="$parent.page_container_show = false">退出 ToolBox
				AI 设置</button>
		</view>
	</view>
</template>

<script>
import dayjs from 'dayjs'
const H = dayjs().get('hour')
let image
if (H >= 0 && H < 4) image = getApp().globalData.images[0]
if (H >= 4 && H < 6) image = getApp().globalData.images[1]
if (H >= 6 && H < 9) image = getApp().globalData.images[2]
if (H >= 9 && H < 12) image = getApp().globalData.images[3]
if (H >= 12 && H < 15) image = getApp().globalData.images[4]
if (H >= 15 && H < 17) image = getApp().globalData.images[5]
if (H >= 17 && H < 19) image = getApp().globalData.images[6]
if (H >= 19) image = getApp().globalData.images[7]
console.log(image)
export default {
	name: "AISettings",
	data() {
		return {
			image,
			modelList: [],
			switchShow: true,
			ai_memory_count: 0,
			bg: getApp().globalData.bgClass.slice().sort(() => Math.random() - 0.5)[0],
		};
	},
	computed: {
		ai() {
			return (this.$store.state.user.ai || []).find(e => e.provider === this.$store.state.user.ai_provider) || {}
		},
		aiNameList() {
			return (this.$store.state.user.ai || []).map(e => e.name)
		},
		aiNameIndex() {
			return this.aiNameList.indexOf(this.ai.name)
		},
		user() {
			return this.$store.state.user
		},
	},
	created() {
		this.ai_memory_count = this.user.ai_memory_count ? this.user.ai_memory_count : ''
		this.rewardedVideoAd = uni.createRewardedVideoAd({
			adUnitId: 'adunit-02b562d4a8c16436'
		})
		this.rewardedVideoAd.onError((res) => {
			console.log(res)
		})
		this.rewardedVideoAd.onClose(({ isEnded }) => {
			if (isEnded) {
				this.$loading()
				this.$('/ad').then(({ total, num, energy }) => {
					uni.showModal({
						title: '观看视频广告成功',
						content: `免费赠送${energy}能量已到账，请查收（今日已领取${num}/${total}）次`,
						showCancel: false,
						confirmText: '好的',
						complete: () => {
							this.$parent.interstitialAd.show()
						}
					});
					this.$store.dispatch('user/login')
				}).finally(() => {
					this.$loaded()
				})
			}
		})
	},
	methods: {
		// 切换厂商
		chooseProvider(e) {
			const index = +e.detail.value
			if (index !== this.aiNameIndex) {
				console.log('change')
				const ai = this.$store.state.user.ai[index]
				this.$store.state.user.ai_provider = ai.provider
				this.modelList = ai.models
				this.$store.state.user.ai_model = ai.models[0]
				this.setting({
					ai_model: this.$store.state.user.ai_model,
					ai_provider: this.$store.state.user.ai_provider
				})
			}
		},
		// 切换模型
		chooseModel(e) {
			this.$store.state.user.ai_model = this.modelList[e.detail.value]
			this.setting({
				ai_model: this.$store.state.user.ai_model
			})
		},
		// 保存模型设置
		setting(payload) {
			this.$loading()
			this.$('/user_setting', payload).finally(() => {
				this.$loaded()
			})
		},
		showModal1() {
			uni.showModal({
				title: '什么是连续对话记忆次数',
				content: '默认情况下，AI并不会记得你的上个问题问了什么，因此不具备理解问答上下文的能力。设置连续对话记忆次数（一问一答为一次）可以解决这个问题。',
				showCancel: false,
				confirmText: '我知道了'
			});
		},
		showModal2() {
			uni.showModal({
				title: '设置连续对话记忆次数注意事项',
				content: '当设置了连续对话记忆次数后，每次提问时会提取最近 N 次（N 为设置的连续对话记忆次数）作为前置参数输入给 AI 模型，这就意味着每次对话会消耗更多的能量。例如：张三已经提问了 3 个 问题，平均每个问题约消耗 100 能量（提问：20， 回答：80）。此时设置了连续对话记忆次数为 3。则下次提问时需消耗能量约为 320。若回答消耗能量约为 80，则此次问答共计消耗能量约为 400。更详细说明见上方【关于 ToolBox AI】',
				showCancel: false,
				confirmText: '我知道了'
			});
		},
		// 输入连续对话次数
		input(e) {
			let ai_memory_count = Number(e.detail.value)
			if (isNaN(ai_memory_count)) {
				this.ai_memory_count = 0
				this.$toast('请输入数字0~9')
			} else {
				if (ai_memory_count < 0) {
					ai_memory_count = 0
					this.$toast('请输入数字0~9')
				}
				if (ai_memory_count > 9) {
					ai_memory_count = 9
					this.$toast('请输入数字0~9')
				}
			}
			this.ai_memory_count = ai_memory_count ? ai_memory_count : ''
			return this.ai_memory_count.toString()
		},
		// 修改连续对话次数
		confirm() {
			if (Number(this.ai_memory_count) !== this.user.ai_memory_count) {
				this.$store.state.user.ai_memory_count = Number(this.ai_memory_count)
				this.setting({
					ai_memory_count: this.$store.state.user.ai_memory_count
				})
			}
		},
		// 清空聊天记录
		clearRecord() {
			uni.showModal({
				title: '提示',
				content: '确定清空所有聊天记录？删除后将无法恢复！',
				success: ({ confirm }) => {
					if (confirm) {
						this.$loading()
						this.$('/chat_delete').then(data => {
							this.$parent.getList(data)
							this.$toast('操作成功')
						}).finally(() => {
							this.$loaded()
						})
					}
				}
			});
		},
		switchChange(e) {
			this.$store.state.user.show_random_box = e.detail.value
			if (this.$store.state.user.show_random_box) {
				uni.removeStorageSync('hide_random_box');
				this.$toast('打开成功')
			} else {
				this.$toast('关闭成功，今日不再显示，可以在设置中再次打开')
				uni.setStorageSync('hide_random_box', dayjs().format('YYYY-MM-DD'));
			}
		},
		// 显示聊天页面插屏广告
		showAD() {
			this.rewardedVideoAd.show().then(res => {
				console.log(res)
			}).catch(e => {
				console.log(e)
			})
		}
	}
}
</script>

<style lang="scss"></style>