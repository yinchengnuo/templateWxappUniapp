<template>
	<Page ref="Page" bg type="no">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<view class="cu-list menu">
					<template v-if="records.length">
						<view class="cu-item" v-for="(item, index) in records" :key="index">
							<view class="content padding-tb-sm">
								<view>
									<text class="margin-right-xs">
										<text class="text-price text-xxl text-bold">{{ item.price }}</text>
									</text>
								</view>
								<view class="text-sm cuIcon-vip">VIP开始时间：{{ item.vip_start_time }}</view>
								<view class="text-sm cuIcon-vip">VIP结束时间：{{ item.vip_end_time }}</view>
								<view class="text-gray text-sm">
									<text class="margin-right-xs">{{ item.create_time }}</text>
								</view>
							</view>
							<view class="action">
								<text class="text-lg text-bold text-green">+{{ item.num * 10000 }}</text>
							</view>
						</view>
						<view class="margin flex text-grey text-sm">仅展示最新100条记录...</view>
					</template>
					<Empty v-if="empty" />
				</view>
			</template>
		</template>
	</Page>
</template>

<script>
export default {
	data() {
		return {
			records: [],
			empty: false,
		};
	},
	computed: {
		loading() {
			return this.$store.state.app.loading
		}
	},
	created() {
		this.$loading()
		this.$("/pay/pay_record").then(data => {
			this.records = data;
			if (!this.records.length) {
				this.empty = true
			}
		}).finally(() => {
			this.$loaded()
		});
	},
	mounted() {
		this.$refs.Page.getHeight();
		this.$refs.ADFloat.show = false;
		clearInterval(this.$refs.Page.timer);
	},
};
</script>

<style lang="scss" scoped></style>
