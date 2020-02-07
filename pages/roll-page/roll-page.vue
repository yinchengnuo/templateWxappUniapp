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
		onLoad({ animationDelay }) {
			this.rollText = this.$route.query.rollText
			this.fontColor = this.$route.query.fontColor
			this.fontSize = this.$route.query.fontSize
			this.fontWeight = this.$route.query.fontWeight
			this.fontStyle = this.$route.query.fontStyle
			this.textDecoration = this.$route.query.textDecoration
			this.textShadow = this.$route.query.textShadow
			this.opacity = this.$route.query.opacity
			this.letterSpacing = this.$route.query.letterSpacing
			this.bgColor = this.$route.query.bgColor
			this.animationDuration = this.$route.query.animationDuration
			this.animationDelay = this.$route.query.animationDelay
			this.animationTimingFunction = this.$route.query.animationTimingFunction
			this.animationDirection = this.$route.query.animationDirection
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
