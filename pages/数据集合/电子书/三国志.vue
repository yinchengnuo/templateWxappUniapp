<template>
	<Page ref="Page">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<view class="text-xxl text-bold flex">三国志</view>
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