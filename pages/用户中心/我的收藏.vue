<template>
	<Page ref="Page" bg type="no">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<template v-if="records.length">
					<view class="cu-list menu-avatar">
						<navigator :url="item.page" class="cu-item arrow bg-white solids-bottom" v-for="(item, index) in records"
							:key="index">
							<view class="cu-avatar round lg">
								<image class="w100 h100" :src="item.icon" mode="scaleToFill" />
							</view>
							<view class="content">
								<view class="text-bold">{{ item.name }}</view>
								<view class="text-gray text-sm flex justify-start">
									<text class="text-cut">
										{{ item.desc }}
									</text>
								</view>
							</view>
							<view class="action">
								<view class="cuIcon-right"></view>
							</view>
						</navigator>
					</view>
				</template>
				<Empty v-if="empty" />
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
	onShow() {
		uni.$once('COLLECT_CANCEL', _id => {
			this.records.splice(this.records.findIndex(e => e._id === _id), 1)
			if (!this.records.length) {
				this.empty = true
			}
		})
	},
	created() {
		this.$loading()
		this.$("/collect_record").then(data => {
			this.records = this.$store.state.app.list.filter(e => data.find(ee => ee.function_id === e._id)).map(e => ({ ...e, name: e.page.split('/').at(-1) }));
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
