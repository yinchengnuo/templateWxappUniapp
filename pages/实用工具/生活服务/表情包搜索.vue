<template>
	<Page ref="Page">
		<view class="index flexc">
			<view class="w100">
				<uni-section title="输入关键字搜索表情包:" type="line">
					<view class="flex">
						<uni-easyinput trim="all" focus confirmType="搜索" v-model="text" suffixIcon="search" placeholder="请输入关键字"
							@confirm="_request" @iconClick="_request"></uni-easyinput>
					</view>
				</uni-section>
			</view>
			<view class="w100 flex1" style="overflow: auto;">
				<image class="radius shadow bg-white radius-df" v-for="item in list" :key="item" :src="item" mode="aspectFit"
					@click="preview(item)">
				</image>
				<Empty v-if="!list.length" />
			</view>
		</view>
	</Page>
</template>

<script>
export default {
	data() {
		return {
			text: '',
			list: [],
			show: 0
		}
	},
	watch: {
		text(text) {
			this.request()
		}
	},
	onLoad() {
		this.request = this.$debounce(() => {
			this._request()
		}, 500)
		this._request()
	},
	methods: {
		make() {
			this.request()
		},
		_request() {
			this.$loading()
			uni.request({
				url: 'https://api.oioweb.cn/api/picture/emoticon',
				data: {
					keyword: this.text || 'Hi'
				}
			}).then((res) => {
				if (res.data.result && res.data.result.length) {
					this.list = res.data.result.map(e => e[0])
					if (this.show % 4 === 0) {
						this.$refs.Page.showAD()
					}
					this.show++
				} else {
					this.$toast('查询不到内容，请重输试试')
					this.list = []
				}
			}).finally(() => {
				this.$loaded()
			})
		},
		preview(url) {
			uni.previewImage({
				current: url,
				urls: this.list
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.index {
	height: 100%;

	image {
		margin: 11rpx;
		width: 222rpx;
		height: 222rpx;

		&:nth-child(3n+1) {
			margin-left: 0;
		}

		&:nth-child(3n+3) {
			margin-right: 0;
		}
	}
}
</style>