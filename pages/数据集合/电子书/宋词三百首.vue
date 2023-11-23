<template>
	<Page ref="Page" bg>
		<template v-slot:default="{ page }">
			<template v-if="page">
				<BookDict :color="$refs.Page.bgClass.split('-')[2]" />
				<AD2 />
				<AD3 />
			</template>
		</template>
	</Page>
</template>

<script>
export default {
	data() {
		return {}
	},
	onLoad() { },
	methods: {}
}
</script>

<style lang="scss" scoped></style>