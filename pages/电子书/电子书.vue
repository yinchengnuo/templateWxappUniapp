<template>
	<Page ref="Page">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<view v-if="result.content" class="cu-list menu sm-border card-menu margin-top margin-bottom">
					<view class="cu-item">
						<view class="content">
							<view class="text-black text-bold padding-top-sm padding-bottom-sm">
								<rich-text :nodes="result.content"></rich-text>
							</view>
						</view>
					</view>
				</view>
				<view v-if="result.translation" class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles"></text>
						<text>翻译</text>
					</view>
				</view>
				<view v-if="result.translation" class="cu-list menu sm-border card-menu margin-top margin-bottom">
					<view class="cu-item">
						<view class="content">
							<view class="text-black text-bold padding-top-sm padding-bottom-sm">
								<rich-text :nodes="result.translation"></rich-text>
							</view>
						</view>
					</view>
				</view>
				<view v-if="result.appreciation" class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles"></text>
						<text>赏析</text>
					</view>
				</view>
				<view v-if="result.appreciation" class="cu-list menu sm-border card-menu margin-top margin-bottom">
					<view class="cu-item">
						<view class="content">
							<view class="text-black text-bold padding-top-sm padding-bottom-sm">
								<rich-text :nodes="result.appreciation"></rich-text>
							</view>
						</view>
					</view>
				</view>
				<view v-if="result.interpretation" class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles"></text>
						<text>解读</text>
					</view>
				</view>
				<view v-if="result.interpretation" class="cu-list menu sm-border card-menu margin-top margin-bottom">
					<view class="cu-item">
						<view class="content">
							<view class="text-black text-bold padding-top-sm padding-bottom-sm">
								<rich-text :nodes="result.interpretation"></rich-text>
							</view>
						</view>
					</view>
				</view>
				<view v-if="result.commentary" class="cu-bar bg-white solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-titles"></text>
						<text>注释</text>
					</view>
				</view>
				<view v-if="result.commentary" class="cu-list menu sm-border card-menu margin-top margin-bottom">
					<view class="cu-item">
						<view class="content">
							<view class="text-black text-bold padding-top-sm padding-bottom-sm">
								<rich-text :nodes="result.commentary"></rich-text>
							</view>
						</view>
					</view>
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
			result: {}
		}
	},
	onLoad(options) {
		this.$refs.Page.title = options.name
		this.$loading()
		this.$('/book_detail', options).then(data => {
			this.result = data
			console.log(data)
		}).finally(() => {
			this.$loaded()
		})
	},
	methods: {

	}
}
</script>

<style lang="scss" scoped></style>