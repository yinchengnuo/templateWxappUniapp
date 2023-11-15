<template>
	<view>
		<ad v-if="show" unit-id="adunit-bb0d1a5ba7a52eac" @error="error"></ad>
	</view>
</template>

<script>
	export default {
		name: "AD2",
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