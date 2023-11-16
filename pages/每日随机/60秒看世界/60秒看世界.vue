<template>
	<Page ref="Page">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<image v-if="src" class="w100" :src="src" mode="widthFix" @load="$loaded()" @error="$errorImage()" />
				<ErrorImage v-else />
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
				src: ""
			}
		},
		mounted() {
			this.$loading()
			uni.request({
				url: 'http://api.tangdouz.com/60.php'
			}).then(res => {
				this.src = res.data
			})
		}
	}
</script>

<style lang="scss" scoped>

</style>