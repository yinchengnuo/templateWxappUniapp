<template>
	<view class="color-picker" :class="{ show: isShow === true, hide: isShow === false, under: !isShow && !showKey }" @tap="hide()">
		<view class="picker-content" :class="{ show: isShow === true, hide: isShow === false }" @tap.stop="">
			<view class="action">
				<text @tap="hide">取消</text>
				<text class="theme-color" @tap="colorPickerChoose">确定</text>
			</view>
			<view class="picker">
				<view class="color-name">{{ colorName }}</view>
				<view class="hue-view" @touchstart="pickHue" @touchmove="pickHue">
					<text class="anchor" :style="{ left: hueView.anchorLeft + 'px' }"></text>
				</view>
				<view class="color-view" @touchstart="pickColor" @touchmove="pickColor" :style="{ backgroundColor: 'hsl(' + hueView.H + ', 100%, 50%)' }">
					<text class="anchor" :style="{ top: colorView.anchorTop + 'px', left: colorView.anchorLeft + 'px' }"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: null,
				showKey: true,
				hueView: {}, // 色相区域信息
				colorView: {}, // 颜色区域信息
				colorName: '', // 选中的色值
				hueLeft: 0.5, // 色相选择器初始位置 [0, 1]
				anchorTop: 0.5, // 颜色选择器初始 top [0, 1]
				anchorLeft: 0.5, // 颜色选择器初始 left [0, 1]
			}
		},
		mounted() {
			Promise.all([this.getHueViewOffset(), this.getColorViewOffset()]).then(() => {
				this.colorName = this.getColorString() // 根据 HLS 计算 RGB 字符串
			})
		},
		methods: {
			getHueViewOffset() { // 获取色相选择区域尺寸
				const hue = 0.5 // 色相选择器初始位置 [0, 1]
				return new Promise(resolve => uni.createSelectorQuery().in(this).select('.hue-view').boundingClientRect(data => {
						this.hueView = {
							...data, 
							anchorLeft: data.width * this.hueLeft, 
							H: this.hueLeft * 360,
						}
						resolve()
					}).exec()
				)
			},
			getColorViewOffset() { // 获取颜色选择区域尺寸
				return new Promise(resolve => uni.createSelectorQuery().in(this).select('.color-view').boundingClientRect(data => {
						this.colorView = {
							...data, 
							anchorTop: data.height * this.anchorTop, 
							anchorLeft: data.width * this.anchorLeft, 
							S: this.anchorLeft, 
							L: (1 - this.anchorLeft * 0.5) - this.anchorTop / (this.anchorLeft + 1)
						}
						resolve()
					}).exec()
				)
			},
			getColorString() { // 获取 RGB 颜色字符串
				const arr = hslToRgb(this.hueView.anchorLeft / this.hueView.width, this.colorView.S, this.colorView.L)
				const r = arr[0].toString(16).length === 1 ? `0${arr[0].toString(16)}` : arr[0].toString(16)
				const g = arr[1].toString(16).length === 1 ? `0${arr[1].toString(16)}` : arr[1].toString(16)
				const b = arr[2].toString(16).length === 1 ? `0${arr[2].toString(16)}` : arr[2].toString(16)
				return `#${r.toUpperCase()}${g.toUpperCase()}${b.toUpperCase()}`
			},
			pickColor(e) { // 选择颜色
				const top = e.touches[0].pageY - this.colorView.top
				const left = e.touches[0].pageX - this.colorView.left
				if (top < 0) {
					this.colorView.anchorTop = 0
				} else if (top > this.colorView.height) {
					this.colorView.anchorTop = this.colorView.height
				} else {
					this.colorView.anchorTop = e.touches[0].pageY - this.colorView.top
				}
				if (left < 0) {
					this.colorView.anchorLeft = 0
				} else if (left > this.colorView.width) {
					this.colorView.anchorLeft = this.colorView.width
				} else {
					this.colorView.anchorLeft = e.touches[0].pageX - this.colorView.left
				}
				this.colorView.S = this.colorView.anchorLeft / this.colorView.width
				this.colorView.L = this.floor((1 - this.colorView.S * 0.5) - this.colorView.anchorTop / this.colorView.height / (this.colorView.S + 1))
				this.colorName = this.getColorString() // 根据 HLS 计算 RGB 字符串
				this.$emit('preview', this.colorName) // 通知父组件预览颜色变化
			},
			pickHue(e) { // 选择色相
				if (e.touches[0].pageX >= this.hueView.left && e.touches[0].pageX <= this.hueView.right) {
					this.hueView.anchorLeft = e.touches[0].pageX - this.hueView.left
					this.hueView.H = this.hueView.anchorLeft / this.hueView.width * 360
					this.colorName = this.getColorString() // 根据 HLS 计算 RGB 字符串
					this.$emit('preview', this.colorName) // 通知父组件预览颜色变化
				}
			},
			floor(num) {
				return num < 0.09 ? 0 : num
			},
			colorPickerChoose() {
				this.$emit('change', this.colorName)
				this.hide('noCancel')
			},
			show() {
				this.isShow = true
				this.showKey = true
				this.$emit('preview', this.colorName) // 通知父组件预览颜色变化
			},
			hide(noCancel) {
				if (!noCancel) {
					this.$emit('cancel')
				}
				this.isShow = false
				setTimeout(() => this.showKey = false, 200)
			}
		} 
	}
function hslToRgb(h, s, l) {  // HSL 转 RGB 方法
	var r, g, b;
	if(s == 0) {
		r = g = b = l; // achromatic
	} else {
		var hue2rgb = function hue2rgb(p, q, t) {
			if(t < 0) t += 1;
			if(t > 1) t -= 1;
			if(t < 1/6) return p + (q - p) * 6 * t;
			if(t < 1/2) return q;
			if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
			return p;
		}
		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1/3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1/3);
	}
	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
</script>

<style lang="scss" scoped>
	.color-picker {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -999;
		position: fixed;
		background: rgba(0, 0, 0, 0);
		&.show {
			z-index: 999;
			animation: bg-in .2s;
			animation-fill-mode: forwards;
		}
		&.hide {
			z-index: 999;
			animation: bg-out .2s;
			animation-fill-mode: forwards;
		}
		&.under {
			z-index: -999;
		}
		.picker-content {
			@include flex(column);
			left: 0;
			bottom: 0;
			width: 100%;
			height: 567rpx;
			overflow: hidden;
			position: absolute;
			background: #FFFFFF;
			border-top-left-radius: 16rpx;
			border-top-right-radius: 16rpx;
			&.show {
				animation: bottom-in .2s;
				animation-fill-mode: forwards;
			}
			&.hide {
				animation: bottom-out .2s;
				animation-fill-mode: forwards;
			}
			.action {
				@include flex();
				width: 100%;
				height: 88rpx;
				font-size: 34rpx;
				background: #F1F1F1;
				justify-content: space-between;
				text {
					@include flex();
					height: 100%;
					width: 123rpx;
				}
			}
			.picker  {
				@include flex(column);
				flex: 1;
				width: 100%;
				.color-name {
					font-size: 45rpx;
					font-weight: bold;
					letter-spacing: 8rpx;
				}
				.hue-view {
					width: 678rpx;
					height: 56rpx;
					margin: 24rpx 0;
					position: relative;
					background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
					.anchor {
						width: 12rpx;
						height: 100%;
						position: absolute;
						background: #FFFFFF;
						transform: translate(-50%);
						box-shadow: 0 0 2rpx rgba(0, 0, 0, 0.6);
					}
				}
				.color-view {
					width: 678rpx;
					height: 300rpx;
					position: relative;
					&::before,
					&::after {
						content: '';
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						position: absolute;
					}
					&::before {
						background: linear-gradient(to right, white, transparent);
					}
					&::after {
						background: linear-gradient(to top, black, transparent);
					}
					.anchor {
						z-index: 1;
						width: 24rpx;
						height: 24rpx;
						border-radius: 50%;
						position: absolute;
						border: 4rpx solid #FFFFFF;
						background: rgba(0, 0, 0, .3);
						transform: translate(-50%, -50%);
					}
				}
			}
		}
	}
	@keyframes bg-in {
		0% { background: rgba(0, 0, 0, 0); }
		100% { background: rgba(0, 0, 0, .3); }
	}
	@keyframes bg-out {
		0% { background: rgba(0, 0, 0, .3); }
		100% { background: rgba(0, 0, 0, 0); }
	}
	@keyframes bottom-in {
		0% { transform: translateY(567rpx); }
		100% { transform: translateY(0rpx); }
	}
	@keyframes bottom-out {
		0% { transform: translateY(0rpx); }
		100% { transform: translateY(567rpx); }
	}
</style>
