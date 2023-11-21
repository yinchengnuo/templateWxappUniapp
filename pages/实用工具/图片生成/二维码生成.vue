<template>
	<Page ref="Page" bg>
		<template v-slot:default="{ page }">
			<template v-if="page">
				<view class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text>输入文字/网址即可生成</text>
					</view>
					<view class="action">
						<text v-if="text" class="my_textarea_clear cuIcon-roundclosefill" @click="text = ''; make()"></text>
					</view>
				</view>
				<view class="cu-form-group padding-left-sm padding-right-sm">
					<textarea v-model="text" class="my_textarea" :focus="focus" confirm-type="search" maxlength="-1"
						placeholder="请输入文字/网址" @blur="focus = false" @confirm="make"></textarea>
				</view>
				<view class="cu-form-group padding-left-sm padding-right-sm">
					<button class="w100 cu-btn block xxl shadow-blur margin-top-xs margin-bottom-xs"
						:class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="make">生成</button>
				</view>
				<view class="cu-bar solid-bottom margin-top-xs">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text class="text-bold">生成结果</text>
					</view>
				</view>
				<template v-if="result">
					<view class="cu-list menu sm-border card-menu margin-top margin-bottom" @click="$preview(result)">
						<ErrorImage v-if="errored" />
						<image v-else :src="result" mode="aspectFill" show-menu-by-longpress style="width: 686rpx; height: 686rpx;"
							@load="load()" @error="error()">
						</image>
					</view>
				</template>
				<view v-else class="cu-list menu sm-border bg-white card-menu margin-top margin-bottom">
					<Empty />
				</view>
				<AD2 />
				<AD3 />
			</template>
		</template>
	</Page>
</template>

<script>
import PageImg from '@/mixins/PageImg.js'
export default {
	mixins: [PageImg],
	data() {
		return {
			text: '',
			focus: true,
			result: null
		}
	},
	onLoad() {
		setTimeout(() => this.focus = true, 1234)
		setTimeout(() => this.focus = true, 2345)
		setTimeout(() => this.focus = true, 3456)
	},
	mounted() {
		this.$loaded()
	},
	methods: {
		make() {
			this.focus = false
			this.result = null
			this.text = (this.text || '').toString().trim()
			if (this.text) {
				this.$loading()
				this.result = 'https://api.vvhan.com/api/qr?text=' + this.text
			} else {
				this.focus = true
				this.$toast('请输入文字/网址')
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>