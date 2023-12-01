<template>
	<Page ref="Page">
		<template v-slot:default="{ page }">
			<template v-if="page">
				聊天管理
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

		}
	},
	onLoad() {

	},
	methods: {

	}
}
</script>

<style lang="scss" scoped></style>