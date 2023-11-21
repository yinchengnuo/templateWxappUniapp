<template>
	<Page ref="Page" bg>
		<template v-slot:default="{ page }">
			<template v-if="page">
				<view class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text>输入QQ号即可查询</text>
					</view>
					<view class="action">
						<text v-if="text" class="my_textarea_clear cuIcon-roundclosefill" @click="text = ''; make()"></text>
					</view>
				</view>
				<view class="cu-bar input solid-bottom">
					<input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search" placeholder="请输入单号"
						type="digit" @blur="focus = false" @confirm="make" />
					<text v-if="text" class="my_input_clear cuIcon-roundclosefill" @click="text = ''; make()"></text>
					<button class="cu-btn lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]"
						@click="make">查询</button>
				</view>
				<view class="cu-bar solid-bottom margin-top-xs">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text class="text-bold">查询结果</text>
					</view>
				</view>
				<template v-if="result">
					<view class="cu-list menu sm-border card-menu margin-top margin-bottom" @click="$preview(result)">
						<ErrorImage v-if="errored" />
						<image v-else :src="result" mode="aspectFill" show-menu-by-longpress style="width: 686rpx; height: 529rpx;"
							@load="load" @error="error">
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
	onLoad() { },
	methods: {
		make() {
			this.focus = false
			this.result = null
			this.text = (this.text || '').toString().trim()
			if (this.text) {
				this.$loading()
				this.result = 'https://api.gqr5.cn/api/pinggu.php?qq=' + this.text
			} else {
				this.focus = true
				this.$toast('请输入QQ号')
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>