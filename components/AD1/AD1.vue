<template>
	<view>
		<ad-custom v-if="show" unit-id="adunit-ca19851efd20b3b7" @error="error"></ad-custom>
	</view>
</template>

<script>
	export default {
		name: "AD1",
		data() {
			return {
				show: true
			};
		},
		methods: {
			error() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss">

</style>