<template>
	<view v-show="show">
		<ad v-if="show" unit-id="adunit-42238affd4939e6a" ad-type="video" ad-theme="white" @load="load" @error="error"
			@close="close"></ad>
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
	computed: {
		vip() {
			return this.$store.state.user.vip
		}
	},
	watch: {
		vip: {
			immediate: true,
			handler() {
				if (this.vip === true) {
					this.show = false
					setTimeout(() => {
						this.$emit('load')
					})
				}
				if (this.vip === false) {
					this.show = true
				}
			}
		}
	},
	methods: {
		load() {
			setTimeout(() => {
				this.$emit('load')
			})
		},
		error() {
			this.show = false
			setTimeout(() => {
				this.$emit('error')
			})
		},
		close() {
			setTimeout(() => {
				this.$emit('close')
			})
		}
	}
}
</script>

<style lang="scss"></style>