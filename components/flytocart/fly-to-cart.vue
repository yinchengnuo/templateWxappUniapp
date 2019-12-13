<template>
	<view class="fly-to-cart"
		v-if="!hide"
		:style="{ width: self.width + 'px', height: self.height + 'px', top: top + 'px', left: left + 'px' }">
		<slot></slot>
	</view>
</template>
<script>
	import $flyInData from './fly-to-cart.js'
	export default {
		props: {
			self: Object,
			cart: Object
		},
		data() {
			return {
				count: 0,
				hide: true,
				finger: {},
				busPos: {},
				top: this.self.y - this.self.height / 2,
				left: this.self.x - this.self.width / 2
			}
		},
		methods: {
			fly() {
				const startPos = {
					x: this.self.x,
					y: this.self.y
				}
				const topPoint = { // 抛物线顶点位置
					x: Math.abs(this.self.x - this.cart.x) / 2,
					y: this.self.y - 175
				}
				const cartPos = {
					x: this.cart.x,
					y: this.cart.y
				}
				this.linePos = $flyInData([cartPos, topPoint, startPos], 30)
				this.hide = false
				this.startAnimation()
			},
			startAnimation() {
				let index = this.linePos.length
				this.timer = setInterval(() => {
					index --
					this.linePos[index] ? this.top = this.linePos[index].y : ''
					this.linePos[index] ? this.left = this.linePos[index].x : ''
					if (index < 1) {
						clearInterval(this.timer)
						this.hide = true
					}
				}, 20)
			}
		}
	}
</script>
<style lang="scss">
	.fly-to-cart {
		@include flex();
		z-index: 150;
		color: #FFFFFF;
		position: fixed;
		overflow: hidden;
		border-radius: 50%;
		background: $app-base-color;
	}
</style>
