<template>
	<view class="chart-progress">
		<canvas canvas-id="arcbar" id="arcbar" class="chart"></canvas>
	</view>
</template>

<script>
	import uCharts from './js/u-charts.js'
	export default {
		props: {
			chartData: Object,
			width: String,
			height: String,
			title: {
				type: String,
				default() {
					return ''
				}
			},
			value: {
				type: String,
				default() {
					return ''
				}
			}
		},
		created() {
			this.draw(this.chartData)
		},
		methods: {
			draw(data){
				new uCharts({
					$this: this,
					canvasId: 'arcbar',
					type: 'arcbar',
					fontSize: 12,
					legend: { show: false },
					background: '#FFFFFF',
					pixelRatio: 1,
					series: data.series,
					animation: true,
					width: uni.upx2px(+this.width),
					height: uni.upx2px(+this.height),
					title: {
						name: this.title,
						color: '#333333',
						fontSize: uni.upx2px(26)
					},
					subtitle: {
						name: this.value,
						color: data.series[0].color,
						fontSize: uni.upx2px(24)
					},
					extra: {
						arcbar:{
							type:'circle', //整圆类型进度条图
							width: uni.upx2px(12), //圆弧的宽度
							startAngle: -0.5, //整圆类型只需配置起始角度即可
							backgroundColor: '#FFB769'
						}
					}
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chart-progress, canvas {
		width: 100%;
		height: 100%;
	}
</style>
