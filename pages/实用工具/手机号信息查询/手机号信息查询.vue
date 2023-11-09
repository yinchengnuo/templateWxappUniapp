<template>
	<Page type="S1" ref="Page" bg>
		<template v-slot:default="{ page }">
			<view v-if="page" class="index">
				<view class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text>输入手机号即可查询手机号码信息</text>
					</view>
				</view>
				<view class="cu-bar input">
					<input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="查询"
						placeholder="请输入手机号" type="number" @blur="focus = false" @confirm="make"></input>
					<text v-if="text" class="my_input_clear cuIcon-roundclosefill" @click="text = ''; make()"></text>
					<button class="cu-btn lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]"
						@click="make">查询</button>
				</view>
			</view>
			<template v-if="result">
				<view class="cu-bar solid-bottom margin-top  margin-bottom">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text>查询结果</text>
					</view>
				</view>
				<view class="cu-list menu sm-border card-menu margin-top">
					<view class="cu-item">
						<view class="content">
							<text class="text-lg text-grey">运营商</text>
						</view>
						<view class="action" @click="$copy(result.isp)">
							<text>{{ result.isp }}</text>
							<text class="cuIcon-copy margin-left-xs"></text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-lg text-grey">省份</text>
						</view>
						<view class="action" @click="$copy(result.province)">
							<text>{{ result.province }}</text>
							<text class="cuIcon-copy margin-left-xs"></text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-lg text-grey">城市</text>
						</view>
						<view class="action" @click="$copy(result.city)">
							<text>{{ result.city }}</text>
							<text class="cuIcon-copy margin-left-xs"></text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-lg text-grey">电话区号</text>
						</view>
						<view class="action" @click="$copy(result.citycode)">
							<text>{{ result.citycode }}</text>
							<text class="cuIcon-copy margin-left-xs"></text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-lg text-grey">身份证号</text>
						</view>
						<view class="action" @click="$copy(result.areacode)">
							<text>{{ result.areacode }}</text>
							<text class="cuIcon-copy margin-left-xs"></text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-lg text-grey">邮政编码</text>
						</view>
						<view class="action" @click="$copy(result.postcode)">
							<text>{{ result.postcode }}</text>
							<text class="cuIcon-copy margin-left-xs"></text>
						</view>
					</view>
				</view>
			</template>
			<view v-else class="cu-list menu sm-border bg-white card-menu margin-top">
				<Empty />
				<AD1 />
				<AD2 />
			</view>
		</template>
	</Page>
	<!-- <view class="page">
		https://api.oioweb.cn/doc/common/teladress

		<view class="" style="margin-top: 20rpx;">
			<ad unit-id="adunit-bb0d1a5ba7a52eac"></ad>
		</view>

		<view class="" style="margin-top: 20rpx;">
			<ad unit-id="adunit-42238affd4939e6a" ad-type="video" ad-theme="white"></ad>
		</view>
	</view> -->
</template>

<script>
	export default {
		data() {
			return {
				text: '',
				focus: true,
				result: null
			}
		},
		onLoad() {},
		methods: {
			make() {
				this.focus = false
				this.result = null
				this.text = (this.text || '').trim()
				if (this.text) {
					this.$loading()
					uni.request({
						url: 'https://api.ooomn.com/api/phone?tel=' + this.text
					}).then(res => {
						if (res.data.code === 200) {
							this.result = res.data
						} else {
							this.focus = true
							this.$toast(res.data.msg)
						}
					}).finally(() => {
						this.$loaded()
					})
				} else {
					this.focus = true
					this.$toast('请输入手机号')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>