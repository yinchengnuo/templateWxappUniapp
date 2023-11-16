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
				src: "https://xiaoapi.cn/API/lssdjt_pic.php"
			}
		},
		mounted() {
			this.$loading()
		}
	}
</script>

<style lang="scss" scoped>

</style>