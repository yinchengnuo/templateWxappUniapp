<template>
	<Page ref="Page" type="S1">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<image v-if="src" class="w100" :src="src" mode="widthFix" @load="$loaded()" @error="$errorImage()" />
				<ErrorImage v-else />
				<AD1 />
				<AD2 />
			</template>
		</template>

	</Page>
</template>

<script>
	export default {
		data() {
			return {
				src: "https://api.lykep.com/api/tgbj"
			}
		},
		mounted() {
			this.$loading()
		}
	}
</script>

<style lang="scss" scoped>

</style>