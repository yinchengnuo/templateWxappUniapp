<template>
	<view class="custom-counter">
		<text class="reduce cuIcon-move" @tap.stop="reduce"></text>
		<text class="num">{{ value }}</text>
		<text class="add cuIcon-add" @tap.stop="add"></text>
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		props: {
			args: { // 触发 change 事件回传给父组件的参数
				type: Array,
				default: () => []
			},
			value: String,
			zeroWarn: String // 当 value 为 0 时是否触发 zero 事件
		},
		data() {
			return {
				inputValue: this.value
			}
		},
		methods: {
			add () { // +
				this.inputValue = this.value
				if (+this.inputValue < 99) {
					this.inputValue ++
					this.emitInputChange()
				}
			},
			reduce () { // -
				this.inputValue = this.value
				if (+this.inputValue) { // value 只允许 大于等于 0
					this.inputValue --
					if (this.zeroWarn) {
						if (this.inputValue) {
							this.emitInputChange()
						} else {
							let eventBUS = new Vue()
							this.$emit('zero', eventBUS, ...this.args)
							eventBUS.$on('beZero', () => {
								this.inputValue = 0
								this.emitInputChange()
								eventBUS = null
							})
							eventBUS.$on('beOne', () => {
								this.inputValue = 1
								this.emitInputChange()
								eventBUS = null
							})
						}
					} else {
						this.emitInputChange()
					}
				}
			},
			emitInputChange() {
				this.$emit('input', this.inputValue)
				this.$emit('change', this.inputValue, ...this.args)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.custom-counter {
		@include flex();
		width: 210rpx;
		height: 50rpx;
		font-size: 36rpx;
		border-radius:5rpx;
		color: $app-sec-text-color;
		border: 1rpx solid $app-sec-text-color;
		text {
			@include flex();
			flex: 1;
			height: 100%;
			&.num {
				color: $app-main-text-color;
				border-left: 2rpx solid $app-sec-text-color;
				border-right: 2rpx solid $app-sec-text-color;
			}
		}
	}
</style>
