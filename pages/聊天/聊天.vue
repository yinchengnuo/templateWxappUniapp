<template>
	<view>
		<view style="padding-bottom: 84rpx;">
			<view class="cu-chat">
				<template v-for="(item, index) in list">
					<view v-if="item.type === 'Q'" :key="index" class="cu-item self">
						<view class="main">
							<view class="content bg-green shadow">
								<text>{{ item.message }}</text>
							</view>
						</view>
						<open-data class="cu-avatar radius" type="userAvatarUrl"></open-data>
						<view class="date">{{ item.time }}</view>
					</view>

					<view v-if="item.type === 'A'" :key="index" class="cu-item">
						<view class="cu-avatar radius">
							<image src="../../static/openai.png" class="w100 h100"></image>
						</view>
						<view class="main">
							<view class="content shadow">
								<text>{{ item.message }} <text v-if="ing">...</text> </text>
							</view>
						</view>
						<view class="date ">{{ item.time }}</view>
					</view>
				</template>
			</view>

			<view class="cu-bar foot input" :class="InputBottom!=0?'cur':''" :style="{ bottom: InputBottom + 'px' }">
				<view class="action">
					<text class="cuIcon-settings text-grey"></text>
				</view>
				<input class="solid-bottom" v-model="text" @focus="InputFocus" @blur="InputBlur" :adjust-position="true"
					:focus="false" maxlength="300" cursor-spacing="10"
					@keyboardheightchange="keyboardheightchange"></input>
				<!-- <view class="action">
					<text class="cuIcon-emojifill text-grey"></text>
				</view> -->
				<button class="cu-btn bg-green shadow" @click="send">发送</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ing: false,
				text: '你好',
				InputBottom: 0,
				list: []
			}
		},
		methods: {
			InputFocus(e) {
				// this.InputBottom = e.detail.height
			},

			InputBlur(e) {
				// this.InputBottom = 0
			},
			keyboardheightchange(e) {
				console.log(e)
			},
			async send() {
				if (this.ing) {
					return this.$toast('AI正在生成对话，请稍后')
				}
				if (this.text.trim()) {
					this.ing = true
					this.list.push({
						type: 'Q',
						message: this.text,
						time: (new Date).toLocaleString()
					})
					this.list.push({
						time: '',
						type: 'A',
						message: '',
					})
					setTimeout(() => {
						uni.pageScrollTo({
							scrollTop: 999999999999
						})
					})
					const channel = new uniCloud.SSEChannel()
					channel.on('message', (message) => {
						const item = this.list[this.list.length - 1]
						item.message += message
						setTimeout(() => {
							uni.pageScrollTo({
								scrollTop: 999999999999
							})
						})
					})
					channel.on('end', (message) => {
						console.log('on end', message);
						this.ing = false
					})
					await channel.open()
					uniCloud.callFunction({
						name: 'AI',
						data: {
							text: this.text,
							channel: channel
						}
					}).catch(() => {
						this.ing = false
					})
					this.text = ''
				} else {
					this.$toast('请输入文字')
				}
			}
		}
	}
</script>

<style>

</style>