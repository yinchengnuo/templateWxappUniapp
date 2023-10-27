<template>
	<view :id="id" class="h100">
		<scroll-view scroll-y :show-scrollbar="true" :style="{ height: height + 'px' }">
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "FlexScrollView",
		data() {
			return {
				height: 0,
				id: `view_${Date.now()}`
			};
		},
		mounted() {
			setTimeout(() => {
				this.$offset(this.id).then(({
					height
				}) => {
					this.height = height
				})
			}, 1234)
		}
	}
</script>

<style lang="scss" scoped>
</style>