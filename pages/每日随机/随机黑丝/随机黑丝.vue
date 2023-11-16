<template>
	<Page ref="Page" refresh @refresh="refresh">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<image v-if="src" class="w100" :src="src" mode="widthFix" show-menu-by-longpress @load="load()" @error="error()"
					@click="$preview(src)" />
				<ErrorImage v-if="errored" />
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
			src: '',
			errored: false,
		}
	},
	mounted() {
		this.refresh()
	},
	methods: {
		refresh() {
			this.$loading()
			this.errored = false
			uni.request({
				url: 'https://jkapi.com/api/heisi_img?type=json&apiKey=e771bf212221b8536795356cc01e1b8e'
			}).then(res => {
				this.src = ''
				setTimeout(() => {
					this.src = res.data.image_url
				})
			}).catch(() => {
				this.error()
			})
		},
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
		}
	}
}
</script>

<style lang="scss" scoped></style>