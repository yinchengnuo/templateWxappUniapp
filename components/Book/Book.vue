<template>
	<view>
		Book
	</view>
</template>

<script>
export default {
	name: "Book",
	data() {
		return {

		};
	},
	created() {
		console.log(getCurrentPages().at(-1).route.split('/').at(-1))
	}
}
</script>

<style lang="scss"></style>