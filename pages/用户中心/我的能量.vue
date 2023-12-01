<template>
	<Page type="no" ref="Page">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<view class="flex solid-bottom justify-center">
					<view class="cu-coupon-box radius-lg padding-sm">
						<view class="flex justify-between">
							<view class="text-white text-xl text-bold">ToolBox 能量卡</view>
							<view class="cu-tag line-white round text-df padding-lr-sm text-grey">
								<text>消费明细 </text>
								<text class="cuIcon-right"></text>
							</view>
						</view>
						<view class="flex justify-center align-end padding-tb cu-coupon-content text-white">
							<text class="text-lg padding-bottom-xs">余额</text>
							<text class="text-sl"> {{ user.energy || 0 }} </text>
							<text class="text-lg padding-bottom-xs"></text>
						</view>
						<view class="flex justify-around align-center margin-top-xl text-white">
							<view class="text-center">
								<view>总入账</view>
								<view>{{ user.total_income || 0 }}</view>
							</view>
							<view class="text-center">
								<view>总出账</view>
								<view>{{ user.total_payout || 0 }}</view>
							</view>
							<view class="text-center">
								<view>已使用</view>
								<view>{{ user.total_chat_count || 0 }}次</view>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text class="text-bold">能量充值</text>
					</view>
					<view class="action text-grey">
						<text>充值记录</text>
						<text class="cuIcon-right"></text>
					</view>
				</view>
				<view class="cu-list no-border grid col-3">
					<view v-for="(item, index) in PAY" :key="item.num" class="cu-item radius light"
						:class="[active === index ? 'bg-' + className : '', active === index ? active : '']" @click="active = index">
						<view class="flex text-bold text-xl text-shadow margin-top-sm">
							{{ (item.num * 10000).toFixed(0) }}
						</view>
						<view style="position: absolute; top: 0rpx; right: 4rpx" class="radius text-xs text-bold padding-lr-xs"
							:class="[active === index ? 'bg-' + className : '', active === index ? 'text-white' : 'text-grey']">{{
								item.num }}万 </view>
						<view class="flex text-price text-lg text-bold" :class="active === index ? '' : 'text-orange'">{{ item.price
						}}
							<text class="text-price margin-left-xs" style="text-decoration: line-through; font-weight: normal">{{
								item.num }}</text>
						</view>
						<view class="text-xs text-bold" :class="active === index ? '' : 'text-yellow'"
							style="position: absolute; right: 4rpx; bottom: 2rpx">{{ item.discount }}折</view>
					</view>
				</view>
				<button class="margin cu-btn round xxl block bg-black">立即充值</button>
			</template>
		</template>
	</Page>
</template>

<script>
export default {
	data() {
		return {
			active: 4,
			className: "",
		};
	},
	computed: {
		user() {
			return this.$store.state.user;
		},
		PAY() {
			return this.$store.state.user.PAY || [];
		},
	},
	watch: {
		active() {
			this.getClass();
		},
	},
	created() {
		this.getClass();
	},
	mounted() {
		this.$refs.ADFloat.show = false;
		clearInterval(this.$refs.Page.timer);
	},
	onLoad() {
		// this.pay()
	},
	methods: {
		getClass() {
			this.className = getApp()
				.globalData.bgClass.slice()
				.sort(() => Math.random() - 0.5)[0]
				.split("-")[2];
		},
		pay() {
			this.$loading();
			this.$("/pay")
				.then(data => {
					// uni.showModal({
					// 	title: '提示',
					// 	content: JSON.stringify(data),
					// 	showCancel: false
					// })
					uni.requestPayment({
						...data,
						success: e => {
							this.$toast("支付成功");
							console.log(e);
						},
						fail: e => {
							this.$copy(JSON.stringify(e));
						},
						complete: () => {
							this.$loaded();
						},
					});
				})
				.catch(() => {
					this.$loaded();
				});
		},
	},
};
</script>

<style lang="scss" scoped></style>
