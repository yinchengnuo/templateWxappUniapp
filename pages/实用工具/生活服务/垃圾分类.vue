<template>
	<Page ref="Page" bg>
		<template v-slot:default="{ page }">
			<template v-if="page">
				<view class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
						<text>输入垃圾名称即可查询垃圾分类</text>
					</view>
				</view>
				<view class="cu-bar input">
					<input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search"
						placeholder="请输入垃圾名称" type="text" @blur="focus = false" @confirm="make" />
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
					<view class="cu-list menu sm-border card-menu margin-top margin-bottom">
						<block v-for="(item, index) in result" :key="index">
							<view class="cu-item">
								<view class="content">
									<text class="text-lg">{{ item.name }}</text>
								</view>
								<view class="action">
									<text class="text-lg text-bold">{{ types[item.type] }}</text>
								</view>
							</view>
							<view class="cu-item">
								<view class="content">
									<text class="text-sm text-black text-bold">分类描述：{{ item.explain }}</text>
								</view>
							</view>
							<view class="cu-item">
								<view class="content">
									<text class="text-sm text-black text-bold">扩展知识：{{ item.contain }}</text>
								</view>
							</view>
							<view class="cu-item">
								<view class="content">
									<text class="text-sm text-black text-bold">分类提示：{{ item.tip }}</text>
								</view>
							</view>
						</block>
						<view class="cu-item text-grey text-sm justify-center">没有更多了...</view>
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
export default {
	data() {
		return {
			text: '',
			focus: true,
			result: null,
			types: {
				0: '可回收垃圾',
				1: '有害垃圾',
				2: '湿垃圾',
				3: '干垃圾'
			}
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
				uni.request({
					url: 'https://api.oioweb.cn/api/common/rubbish?name=' + this.text
				}).then(res => {
					if (res.data.code === 200) {
						this.result = res.data.result
					} else {
						this.focus = true
						this.$toast(res.data.msg)
					}
				}).finally(() => {
					this.$loaded()
				})
			} else {
				this.focus = true
				this.$toast('请输入垃圾名称')
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>