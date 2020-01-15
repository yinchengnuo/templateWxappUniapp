<template>
	<view class="custom-counter">
		<text class="reduce cuIcon-move" :class="{ disabled: inputValue == 0 }" @tap.stop="reduce"></text>
		<input class="num" type="number" @focus="focus" @blur="blur" maxlength="3" v-model="inputValue" />
		<text class="add cuIcon-add" :class="{ disabled: inputValue == max }" @tap.stop="add"></text>
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
			zeroWarn: String, // 当 value 为 0 时是否触发 zero 事件
			max: {
				type: Number,
				default: () => 999
			}
		},
		data() {
			return {
				inputValue: this.value
			}
		},
		watch: {
			value(n) {
				this.inputValue = n
			},
			inputValue(n) {
				if (+this.inputValue > this.max) {
					setTimeout(() => this.inputValue = this.max)
				} else {
					this.inputValue = +this.inputValue
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
			}
		},
		methods: {
			focus() {
				if(this.inputValue === '0') {
					this.inputValue = ''
				}
			},
			blur() {
				if(this.inputValue === '') {
					this.inputValue = '0'
				}
			},
			add () { // +
				this.inputValue = this.value
				if (+this.inputValue < this.max) {
					this.inputValue ++
				} else {
					this.inputValue = +this.max
				}
			},
			reduce () { // -
				this.inputValue = this.value
				if (+this.inputValue) { // value 只允许 大于等于 0
					this.inputValue --
				}
			},
			emitInputChange() {
				this.$emit('input', +this.inputValue)
				this.$emit('change', +this.inputValue, ...this.args)
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
		.disabled {
			background: #F5F7FA;
		}
		text, input {
			@include flex();
			flex: 1;
			height: 100%;
			box-sizing: border-box;
			&.num {
				text-align: center;
				color: $app-main-text-color;
			}
			&.reduce {
				border-right: 2rpx solid $app-sec-text-color;
			}
			&.add {
				border-left: 2rpx solid $app-sec-text-color;
			}
		}
	}
</style>
