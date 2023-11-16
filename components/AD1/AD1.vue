<template>
	<view>
		<ad-custom v-if="show" unit-id="adunit-ca19851efd20b3b7" @load="load" @error="error" @close="close"></ad-custom>
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

<style lang="scss">

</style>