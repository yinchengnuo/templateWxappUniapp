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
import PageImg from '@/mixins/PageImg.js'
export default {
	mixins: [PageImg],
	data() {
		return {}
	},
	mounted() {
		this.refresh()
	},
	methods: {
		refresh() {
			this.errored = false
			uni.request({
				url: 'https://jkapi.com/api/meinv_img?type=json&apiKey=385c3a57e003ecbe19aa0abc8a87ec3a'
			}).then(res => {
				this.src = ''
				setTimeout(() => {
					this.src = res.data.image_url
				})
			}).catch(() => {
				this.error()
			})
		}
	}
}
</script>

<style lang="scss" scoped></style>