<template>
	<view class="roll-page" :style="{ background: bgColor }">
		<view class="roll-wrapper" :class="animationDirection" :style="{
			color: fontColor,
			fontSize: fontSize + 'vw',
			fontWeight: fontWeight,
			fontStyle: fontStyle,
			textDecoration: textDecoration,
			textShadow: textShadow,
			opacity: opacity / 100,
			letterSpacing: letterSpacing,
			animationDuration: animationDuration,
			animationDelay: animationDelay,
			animationTimingFunction: animationTimingFunction
		}">
			{{ rollText }}
		</view>
	</view>
</template>

<script>
	export default {
		onShareAppMessage (res) {  //分享小程序
			return {
				title: this.rollText,
				path: `/pages/roll-page/roll-page?rollText=${this.rollText}&fontColor=${this.fontColor}&fontSize=${this.fontSize}&fontWeight=${this.fontWeight}&fontStyle=${this.fontStyle}&textDecoration=${this.textDecoration}&textShadow=${this.textShadow}&opacity=${this.opacity}&letterSpacing=${this.letterSpacing}&bgColor=${this.bgColor}&animationDuration=${this.animationDuration}&animationDelay=${this.animationDelay}&animationTimingFunction=${this.animationTimingFunction}&animationDirection=${this.animationDirection}`
			}
		},
		data() {
			return {
				rollText: '',
				fontColor: '#000000',
				fontSize: 100,
				fontWeight: 'normal',
				fontStyle: 'normal',
				textDecoration: 'none',
				textShadow: '0px 0px 0px #000000',
				opacity: 100,
				letterSpacing: '0px',
				bgColor: '#FFFFFF',
				animationDuration: '0s',
				animationDelay: '0s',
				animationTimingFunction: 'linear',
				animationDirection: '',
			}
		},
		onLoad(opt) {
			this.rollText = opt.rollText
			this.fontColor = opt.fontColor
			this.fontSize = Number(opt.fontSize)
			this.fontWeight = opt.fontWeight
			this.fontStyle = opt.fontStyle
			this.textDecoration = opt.textDecoration
			this.textShadow = opt.textShadow
			this.opacity = Number(opt.opacity)
			this.letterSpacing = opt.letterSpacing
			this.bgColor = opt.bgColor
			this.animationDuration = opt.animationDuration
			this.animationDelay = opt.animationDelay
			this.animationTimingFunction = opt.animationTimingFunction
			this.animationDirection = opt.animationDirection
		}
	}
</script>

<style lang="scss" scoped>
	.roll-page {
		height: 100%;
		@include flex();
		overflow: hidden;
		position: relative;
		.roll-wrapper {
			width: auto;
			font-size: 100vw;
			white-space: nowrap;
			justify-content: flex-start;
			animation: right-left infinite;
			transform: rotateZ(90deg) translateX(calc(50% + 50vh));
			&.left-right {
				animation: left-right infinite;
			}
		}
	}
	@keyframes right-left {
		0% {
			transform: rotateZ(90deg) translateX(calc(50% + 50vh));
		}
		100% {
			transform: rotateZ(90deg) translateX(calc(-50% - 50vh));
		}
	}
	@keyframes left-right {
		0% {
			transform: rotateZ(90deg) translateX(calc(-50% - 50vh));
		}
		100% {
			transform: rotateZ(90deg) translateX(calc(50% + 50vh));
		}
	}
</style>
