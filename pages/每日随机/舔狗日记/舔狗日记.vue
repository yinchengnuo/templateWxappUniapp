<template>
	<Page ref="Page" type="S1" refresh @refresh="refresh">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<image v-if="src" class="w100" :src="src" mode="widthFix" @load="load()" @error="error()" />
				<ErrorImage v-if="errored" />
				<AD1 />
				<AD2 />
			</template>
		</template>

	</Page>
</template>

<script>
const src = 'https://api.lykep.com/api/tgbj'
export default {
	data() {
		return {
			src,
			errored: false,
		}
	},
	mounted() {
		this.$loading()
	},
	methods: {
		load() {
			this.$loaded()
			this.$refs.Page.refreshing = false
		},
		error() {
			this.src = ''
			this.$loaded()
			this.errored = true
			this.$refs.Page.refreshing = false
			this.$toast('哎呀！加载失败了...请稍后再试或下拉刷新重试，或者先看看美女...')
		},
		refresh() {
			this.src = ''
			this.$loading()
			this.errored = false
			setTimeout(() => this.src = src)
		},
	}
}
</script>

<style lang="scss" scoped></style>