<template>
	<view>
		<ad v-if="show" unit-id="adunit-42238affd4939e6a" ad-type="video" ad-theme="white" @error="error"></ad>
	</view>
</template>

<script>
	export default {
		name: "AD3",
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